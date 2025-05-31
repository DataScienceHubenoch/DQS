import React from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const NetworkStatus = () => {
  const { isConnected, network, isConnecting } = useWeb3();

  const getNetworkColor = (network: string | null) => {
    if (!network) return 'bg-gray-500';
    
    switch (network.toLowerCase()) {
      case 'ethereum':
        return 'bg-blue-500';
      case 'polygon':
        return 'bg-purple-500';
      case 'bsc':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (isConnecting) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
        <span>Connecting...</span>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <span>Not Connected</span>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center space-x-2">
            <div className={cn("h-2 w-2 rounded-full", getNetworkColor(network))} />
            <span className="text-sm font-medium">{network || 'Unknown Network'}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Connected to {network || 'Unknown Network'} network</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NetworkStatus; 