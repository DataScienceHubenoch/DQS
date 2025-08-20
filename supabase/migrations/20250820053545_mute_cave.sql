/*
  # Create Registrations Table

  1. New Tables
    - `registrations` - User registrations for courses and services
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `type` (text) - 'course' or 'service'
      - `selection` (text) - selected course or service
      - `experience` (text, optional) - for courses
      - `goals` (text, optional) - learning goals or project requirements
      - `company` (text, optional)
      - `payment_method` (text) - preferred payment method
      - `message` (text, optional) - additional message
      - `status` (text, default 'pending') - registration status
      - `payment_status` (text, default 'pending') - payment status
      - `amount` (numeric, optional) - course price or service quote
      - `agree_to_terms` (boolean)
      - `agree_to_marketing` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on registrations table
    - Add policies for public registration creation
    - Add policies for admin management
*/

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  type text NOT NULL CHECK (type IN ('course', 'service')),
  selection text NOT NULL,
  experience text,
  goals text,
  company text,
  payment_method text NOT NULL CHECK (payment_method IN ('bank_transfer', 'mobile_money', 'crypto')),
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'completed')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  amount numeric,
  agree_to_terms boolean NOT NULL DEFAULT false,
  agree_to_marketing boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create registrations
CREATE POLICY "Anyone can create registrations"
  ON registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to view their own registrations
CREATE POLICY "Users can view own registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (email = (SELECT email FROM profiles WHERE id = auth.uid()));

-- Allow admins to view and manage all registrations
CREATE POLICY "Admins can manage all registrations"
  ON registrations
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Create updated_at trigger
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations(status);
CREATE INDEX IF NOT EXISTS idx_registrations_type ON registrations(type);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at);

-- Create email notifications table
CREATE TABLE IF NOT EXISTS email_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id uuid REFERENCES registrations(id) ON DELETE CASCADE,
  email_type text NOT NULL CHECK (email_type IN ('confirmation', 'approval', 'rejection', 'payment_reminder', 'completion')),
  sent_at timestamptz DEFAULT now(),
  status text DEFAULT 'sent' CHECK (status IN ('sent', 'failed', 'pending'))
);

-- Enable RLS for email notifications
ALTER TABLE email_notifications ENABLE ROW LEVEL SECURITY;

-- Allow admins to manage email notifications
CREATE POLICY "Admins can manage email notifications"
  ON email_notifications
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );