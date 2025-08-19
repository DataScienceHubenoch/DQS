import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  created_at: string;
  read: boolean;
}

export const NotificationSystem: React.FC = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!user) return;

    // Subscribe to enrollment status changes
    const enrollmentSubscription = supabase
      .channel('enrollment_changes')
      .on('postgres_changes', 
        { 
          event: 'UPDATE', 
          schema: 'public', 
          table: 'enrollments',
          filter: `user_id=eq.${user.id}`
        }, 
        (payload) => {
          const { new: newEnrollment } = payload;
          
          if (newEnrollment.status === 'approved') {
            toast({
              title: "Course Approved!",
              description: "Your course enrollment has been approved. You can now start learning!",
            });
            
            // Add to notifications
            const notification: Notification = {
              id: Date.now().toString(),
              title: "Course Enrollment Approved",
              message: "Your course enrollment has been approved. You can now start learning!",
              type: 'success',
              created_at: new Date().toISOString(),
              read: false
            };
            
            setNotifications(prev => [notification, ...prev]);
          }
        }
      )
      .subscribe();

    // Subscribe to new blog posts
    const blogSubscription = supabase
      .channel('blog_changes')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'blog_posts',
          filter: 'published=eq.true'
        }, 
        (payload) => {
          const { new: newPost } = payload;
          
          toast({
            title: "New Blog Post",
            description: `Check out our latest post: ${newPost.title}`,
          });
          
          const notification: Notification = {
            id: Date.now().toString(),
            title: "New Blog Post Published",
            message: `Check out our latest post: ${newPost.title}`,
            type: 'info',
            created_at: new Date().toISOString(),
            read: false
          };
          
          setNotifications(prev => [notification, ...prev]);
        }
      )
      .subscribe();

    return () => {
      enrollmentSubscription.unsubscribe();
      blogSubscription.unsubscribe();
    };
  }, [user, toast]);

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };

  const removeNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!user) return null;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </Button>

      {showNotifications && (
        <div className="absolute right-0 top-full mt-2 w-80 max-h-96 overflow-y-auto z-50">
          <Card>
            <CardContent className="p-0">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No notifications yet
                </div>
              ) : (
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {notification.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            {new Date(notification.created_at).toLocaleString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          className="mt-2 text-xs"
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};