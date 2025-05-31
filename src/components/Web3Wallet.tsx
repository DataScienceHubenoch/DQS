import React from 'react';
import { useWeb3, SUPPORTED_NETWORKS } from '@/contexts/Web3Context';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const Web3Wallet = () => {
  const { account, balance, isConnected, isLoading, network, connectWallet, disconnectWallet, switchNetwork } = useWeb3();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isLoading) {
    return (
      <Button variant="outline" disabled className="flex items-center space-x-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Connecting...</span>
      </Button>
    );
  }

  if (isConnected && account) {
    return (
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>{network || 'Unknown Network'}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.values(SUPPORTED_NETWORKS).map((net) => (
              <DropdownMenuItem
                key={net.chainId}
                onClick={() => switchNetwork(net.chainId)}
                className={network === net.name ? 'bg-gray-100' : ''}
              >
                {net.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="text-sm">
          <div className="font-medium">{formatAddress(account)}</div>
          <div className="text-gray-500">{balance ? `${parseFloat(balance).toFixed(4)} ETH` : '0 ETH'}</div>
        </div>
        <Button
          variant="outline"
          onClick={disconnectWallet}
          className="flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Disconnect</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={connectWallet}
      className="flex items-center space-x-2"
    >
      <Wallet className="h-4 w-4" />
      <span>Connect Wallet</span>
    </Button>
  );
};

export default Web3Wallet;
