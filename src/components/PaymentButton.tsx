import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useWeb3 } from '@/contexts/Web3Context';
import { Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentButtonProps {
  to: string;
  amount: string;
  label?: string;
  className?: string;
  onSuccess?: (tx: any) => void;
  onError?: (error: any) => void;
  supportedTokens?: string[];
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  to,
  amount,
  label = 'Pay Now',
  className = '',
  onSuccess,
  onError,
  supportedTokens = ['ETH'],
}) => {
  const { sendPayment, isTransactionPending, isConnected, connectWallet, getTokenBalance } = useWeb3();
  const [error, setError] = useState<string | null>(null);
  const [selectedToken, setSelectedToken] = useState(supportedTokens[0]);
  const [tokenBalance, setTokenBalance] = useState<string>('0');

  React.useEffect(() => {
    if (isConnected) {
      getTokenBalance(selectedToken).then(setTokenBalance);
    }
  }, [isConnected, selectedToken, getTokenBalance]);

  const handlePayment = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }

    try {
      setError(null);
      const tx = await sendPayment(to, amount, selectedToken);
      if (tx && onSuccess) {
        onSuccess(tx);
      }
    } catch (err: any) {
      setError(err.message);
      if (onError) {
        onError(err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {supportedTokens.length > 1 && (
        <Select
          value={selectedToken}
          onValueChange={setSelectedToken}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select token" />
          </SelectTrigger>
          <SelectContent>
            {supportedTokens.map((token) => (
              <SelectItem key={token} value={token}>
                {token}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span>Balance: {tokenBalance} {selectedToken}</span>
        <span>Amount: {amount} {selectedToken}</span>
      </div>
      <Button
        onClick={handlePayment}
        disabled={isTransactionPending}
        className={className}
      >
        {isTransactionPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          label
        )}
      </Button>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default PaymentButton; 