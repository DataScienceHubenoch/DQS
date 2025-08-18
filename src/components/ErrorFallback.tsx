import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          
          {isDevelopment && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm font-medium text-red-800 mb-1">Error Details:</p>
              <p className="text-xs text-red-700 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <Button
              onClick={resetError}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button
              variant="outline"
              className="w-full"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              If the problem persists, please{' '}
              <a
                href="mailto:dataquestsolutions2@gmail.com"
                className="text-sky-600 hover:text-sky-700 underline"
              >
                contact support
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorFallback;