import * as React from 'react';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ethers } from 'ethers';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

// Supported networks
export const SUPPORTED_NETWORKS = {
  ethereum: {
    chainId: '0x1',
    name: 'Ethereum Mainnet',
    rpcUrl: 'https://mainnet.infura.io/v3/',
  },
  polygon: {
    chainId: '0x89',
    name: 'Polygon Mainnet',
    rpcUrl: 'https://polygon-rpc.com',
  },
  mumbai: {
    chainId: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
  },
};

// Supported tokens
export const SUPPORTED_TOKENS = {
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    address: null, // Native token
  },
  USDT: {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // Ethereum Mainnet
  },
  USDC: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Ethereum Mainnet
  },
  MATIC: {
    symbol: 'MATIC',
    name: 'Polygon',
    decimals: 18,
    address: null, // Native token
  },
};

// ERC20 ABI for token transfers
const ERC20_ABI = [
  'function transfer(address to, uint256 amount) returns (bool)',
  'function balanceOf(address account) view returns (uint256)',
  'function decimals() view returns (uint8)',
];

interface Web3ContextType {
  isConnected: boolean;
  isConnecting: boolean;
  account: string | null;
  network: string | null;
  balance: string;
  connect: () => Promise<void>;
  disconnect: () => void;
  sendPayment: (to: string, amount: string, token?: string) => Promise<void>;
  isTransactionPending: boolean;
  lastTransaction: string | null;
  getTokenBalance: (tokenAddress: string) => Promise<string>;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [lastTransaction, setLastTransaction] = useState<string | null>(null);
  const { toast } = useToast();

  const updateBalance = async (address: string) => {
    if (!window.ethereum) {
      toast({
        title: "Error",
        description: "Please install MetaMask to use Web3 features",
        variant: "destructive",
      });
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance));
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const getTokenBalance = async (token: string): Promise<string> => {
    if (!window.ethereum || !account) {
      toast({
        title: "Error",
        description: "Please install MetaMask to use Web3 features",
        variant: "destructive",
      });
      return '0';
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const tokenInfo = SUPPORTED_TOKENS[token as keyof typeof SUPPORTED_TOKENS];
      if (!tokenInfo) throw new Error('Unsupported token');

      if (!tokenInfo.address) {
        // Native token
        const balance = await provider.getBalance(account);
        return ethers.formatEther(balance);
      }

      // ERC20 token
      const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, provider);
      const balance = await contract.balanceOf(account);
      return ethers.formatUnits(balance, tokenInfo.decimals);
    } catch (error) {
      console.error('Error fetching token balance:', error);
      return '0';
    }
  };

  const switchNetwork = async (chainId: string) => {
    if (!window.ethereum) {
      toast({
        title: "Error",
        description: "Please install MetaMask to use Web3 features",
        variant: "destructive",
      });
      return false;
    }

    try {
      setIsConnecting(true);
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      });
      toast({
        title: "Success",
        description: "Network switched successfully",
      });
      return true;
    } catch (error: any) {
      if (error.code === 4902) {
        // Chain not added to MetaMask
        const network = Object.values(SUPPORTED_NETWORKS).find(n => n.chainId === chainId);
        if (network) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId,
                chainName: network.name,
                rpcUrls: [network.rpcUrl],
              }],
            });
            return true;
          } catch (addError) {
            console.error('Error adding network:', addError);
            toast({
              title: "Error",
              description: "Failed to add network to MetaMask",
              variant: "destructive",
            });
            return false;
          }
        }
      }
      console.error('Error switching network:', error);
      toast({
        title: "Error",
        description: "Failed to switch network",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsConnecting(false);
    }
  };

  const connect = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      toast({
        title: "Error",
        description: "Please install MetaMask to use this feature",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsConnecting(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const account = accounts[0];
      
      // Get current network
      const network = await provider.getNetwork();
      const currentChainId = network.chainId.toString(16);
      
      // Check if current network is supported
      const isSupportedNetwork = Object.values(SUPPORTED_NETWORKS).some(
        n => n.chainId === `0x${currentChainId}`
      );

      // If not supported, try to switch to Ethereum mainnet
      if (!isSupportedNetwork) {
        const switched = await switchNetwork(SUPPORTED_NETWORKS.ethereum.chainId);
        if (!switched) {
          throw new Error('Please switch to a supported network');
        }
      }

      setAccount(account);
      setNetwork(network.name);
      await updateBalance(account);
      setIsConnected(true);
      localStorage.setItem('walletConnected', 'true');
      
      toast({
        title: "Success",
        description: "Wallet connected successfully",
      });
    } catch (error) {
      console.error('Failed to connect:', error);
      setIsConnected(false);
      setAccount(null);
      setNetwork(null);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to connect wallet",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setAccount(null);
    setBalance('0');
    setNetwork(null);
    setIsConnected(false);
    localStorage.removeItem('walletConnected');
    toast({
      title: "Disconnected",
      description: "Wallet disconnected successfully",
    });
  };

  const sendPayment = async (
    to: string,
    amount: string,
    token: string = 'ETH'
  ): Promise<void> => {
    if (!window.ethereum || !account) {
      toast({
        title: "Error",
        description: "Please install MetaMask to use Web3 features",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsTransactionPending(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tokenInfo = SUPPORTED_TOKENS[token as keyof typeof SUPPORTED_TOKENS];
      
      if (!tokenInfo) {
        throw new Error('Unsupported token');
      }

      let tx: ethers.TransactionResponse;

      if (!tokenInfo.address) {
        // Native token transfer
        const amountInWei = ethers.parseEther(amount);
        tx = await signer.sendTransaction({
          to,
          value: amountInWei,
        });
      } else {
        // ERC20 token transfer
        const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, signer);
        const amountInUnits = ethers.parseUnits(amount, tokenInfo.decimals);
        tx = await contract.transfer(to, amountInUnits);
      }

      // Wait for transaction to be mined
      await tx.wait();
      
      // Update balances
      await updateBalance(account);
      
      setLastTransaction(tx.hash);
      
      toast({
        title: "Success",
        description: `Payment of ${amount} ${token} sent successfully!`,
      });
    } catch (error: any) {
      console.error('Error sending payment:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send payment",
        variant: "destructive",
      });
    } finally {
      setIsTransactionPending(false);
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (localStorage.getItem('walletConnected') === 'true' && window.ethereum) {
        await connect();
      }
    };
    
    checkConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect();
        } else {
          setAccount(accounts[0]);
          await updateBalance(accounts[0]);
        }
      });

      window.ethereum.on('chainChanged', async () => {
        if (window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const network = await provider.getNetwork();
          setNetwork(network.name);
          if (account) {
            await updateBalance(account);
          }
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('chainChanged');
      }
    };
  }, [account]);

  const value = {
    isConnected,
    isConnecting,
    account,
    network,
    balance,
    connect,
    disconnect,
    sendPayment,
    isTransactionPending,
    lastTransaction,
    getTokenBalance,
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};
