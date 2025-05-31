
import React, { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ethers } from 'ethers';
import { CreditCard, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CryptoPaymentProps {
  courseName: string;
  priceUSD: number;
  onPaymentSuccess?: () => void;
}

const CryptoPayment: React.FC<CryptoPaymentProps> = ({ 
  courseName, 
  priceUSD, 
  onPaymentSuccess 
}) => {
  const { account, provider, isConnected } = useWeb3();
  const [isProcessing, setIsProcessing] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState('0x742d35Cc6634C0532925a3b8D400B52d13bC2e2A'); // Example address
  const { toast } = useToast();

  // Convert USD to ETH (simplified - in production, use a real price feed)
  const ethPrice = 2000; // Simplified ETH price
  const priceETH = (priceUSD / ethPrice).toFixed(6);

  const handlePayment = async () => {
    if (!isConnected || !provider || !account) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to make a payment",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      const signer = await provider.getSigner();
      
      const transaction = {
        to: recipientAddress,
        value: ethers.parseEther(priceETH),
        gasLimit: 21000,
      };

      const tx = await signer.sendTransaction(transaction);
      
      toast({
        title: "Transaction sent",
        description: `Transaction hash: ${tx.hash}`,
      });

      await tx.wait();
      
      toast({
        title: "Payment successful!",
        description: `You have successfully enrolled in ${courseName}`,
      });

      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Crypto Payment</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Course</Label>
          <p className="text-sm text-gray-600">{courseName}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Price (USD)</Label>
            <p className="text-lg font-bold">${priceUSD}</p>
          </div>
          <div>
            <Label>Price (ETH)</Label>
            <p className="text-lg font-bold">{priceETH} ETH</p>
          </div>
        </div>

        <div>
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            className="font-mono text-sm"
          />
        </div>

        {isConnected ? (
          <Button 
            onClick={handlePayment} 
            disabled={isProcessing}
            className="w-full"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              `Pay ${priceETH} ETH`
            )}
          </Button>
        ) : (
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Please connect your wallet to make a payment
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CryptoPayment;
