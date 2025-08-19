import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { UserMenu } from './UserMenu';
import { AuthModal } from './AuthModal';
import { User, Loader2 } from 'lucide-react';

export const AuthButton: React.FC = () => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading) {
    return (
      <Button variant="ghost" disabled>
        <Loader2 className="h-4 w-4 animate-spin" />
      </Button>
    );
  }

  if (user) {
    return <UserMenu />;
  }

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setShowAuthModal(true)}
        className="flex items-center gap-2"
      >
        <User className="h-4 w-4" />
        Sign In
      </Button>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};