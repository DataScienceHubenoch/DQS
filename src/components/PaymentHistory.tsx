import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeb3 } from '@/contexts/Web3Context';
import { formatEther } from 'ethers';
import { ExternalLink } from 'lucide-react';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  status: 'pending' | 'success' | 'failed';
}

export const PaymentHistory: React.FC = () => {
  const { lastTransaction, network } = useWeb3();
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    if (lastTransaction) {
      const newTransaction: Transaction = {
        hash: lastTransaction.hash,
        from: lastTransaction.from,
        to: lastTransaction.to || '',
        value: formatEther(lastTransaction.value || '0'),
        timestamp: Date.now(),
        status: 'success'
      };
      setTransactions(prev => [newTransaction, ...prev]);
    }
  }, [lastTransaction]);

  const getExplorerUrl = (hash: string) => {
    switch (network) {
      case 'Ethereum Mainnet':
        return `https://etherscan.io/tx/${hash}`;
      case 'Polygon Mainnet':
        return `https://polygonscan.com/tx/${hash}`;
      case 'Mumbai Testnet':
        return `https://mumbai.polygonscan.com/tx/${hash}`;
      default:
        return `https://etherscan.io/tx/${hash}`;
    }
  };

  if (transactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center">No transactions yet</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.hash} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Amount:</span>
                  <span>{tx.value} ETH</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {new Date(tx.timestamp).toLocaleString()}
                </div>
              </div>
              <a
                href={getExplorerUrl(tx.hash)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                View on Explorer
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentHistory; 