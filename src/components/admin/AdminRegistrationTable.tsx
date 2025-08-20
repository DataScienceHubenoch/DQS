import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Filter, Eye, CheckCircle2, XCircle, Clock, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'course' | 'service';
  selection: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  payment_method: string;
  payment_status: 'pending' | 'paid' | 'failed';
  amount?: number;
  created_at: string;
  company?: string;
  experience?: string;
  goals?: string;
}

interface AdminRegistrationTableProps {
  registrations: Registration[];
  onStatusUpdate: (id: string, status: string) => Promise<void>;
}

export const AdminRegistrationTable: React.FC<AdminRegistrationTableProps> = ({
  registrations,
  onStatusUpdate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredRegistrations = registrations.filter(registration => {
    const matchesSearch = 
      registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.selection.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || registration.status === statusFilter;
    const matchesType = typeFilter === 'all' || registration.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    setUpdating(id);
    try {
      await onStatusUpdate(id, newStatus);
      toast({
        title: "Status Updated",
        description: `Registration status updated to ${newStatus}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdating(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registration Management</CardTitle>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search registrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="course">Courses</SelectItem>
              <SelectItem value="service">Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Selection</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegistrations.map((registration) => (
                <TableRow key={registration.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{registration.name}</p>
                      <p className="text-sm text-gray-500">{registration.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {registration.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{registration.selection}</TableCell>
                  <TableCell>{getStatusBadge(registration.status)}</TableCell>
                  <TableCell>{getPaymentStatusBadge(registration.payment_status)}</TableCell>
                  <TableCell>
                    {new Date(registration.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedRegistration(registration)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Registration Details</DialogTitle>
                            <DialogDescription>
                              Complete information for {registration.name}
                            </DialogDescription>
                          </DialogHeader>
                          {selectedRegistration && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-sm font-medium">Name</Label>
                                  <p className="text-sm text-gray-600">{selectedRegistration.name}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium">Email</Label>
                                  <p className="text-sm text-gray-600">{selectedRegistration.email}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium">Phone</Label>
                                  <p className="text-sm text-gray-600">{selectedRegistration.phone}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium">Company</Label>
                                  <p className="text-sm text-gray-600">{selectedRegistration.company || 'N/A'}</p>
                                </div>
                              </div>
                              {selectedRegistration.experience && (
                                <div>
                                  <Label className="text-sm font-medium">Experience Level</Label>
                                  <p className="text-sm text-gray-600">{selectedRegistration.experience}</p>
                                </div>
                              )}
                              {selectedRegistration.goals && (
                                <div>
                                  <Label className="text-sm font-medium">Goals/Requirements</Label>
                                  <p className="text-sm text-gray-600">{selectedRegistration.goals}</p>
                                </div>
                              )}
                              <div className="flex gap-2 pt-4">
                                <Button
                                  size="sm"
                                  className="bg-green-500 hover:bg-green-600"
                                  onClick={() => handleStatusUpdate(selectedRegistration.id, 'approved')}
                                  disabled={updating === selectedRegistration.id}
                                >
                                  <CheckCircle2 className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleStatusUpdate(selectedRegistration.id, 'rejected')}
                                  disabled={updating === selectedRegistration.id}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {registration.status === 'pending' && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-green-600 hover:text-green-700"
                            onClick={() => handleStatusUpdate(registration.id, 'approved')}
                            disabled={updating === registration.id}
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleStatusUpdate(registration.id, 'rejected')}
                            disabled={updating === registration.id}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};