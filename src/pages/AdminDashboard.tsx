import { useState } from "react";
import { Search, Users, BookOpen, TrendingUp, Download, Eye, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const inquiries = [
    { id: 1, name: "Rahul Sharma", email: "rahul@email.com", college: "VIT Chennai", status: "pending", date: "2024-01-15" },
    { id: 2, name: "Priya Singh", email: "priya@email.com", college: "SRM University", status: "contacted", date: "2024-01-14" },
    { id: 3, name: "Amit Kumar", email: "amit@email.com", college: "Manipal University", status: "admitted", date: "2024-01-13" },
  ];

  const partners = [
    { id: 1, name: "VIT Chennai", students: 45, ranking: 12, status: "active", admissions: "Open" },
    { id: 2, name: "SRM University", students: 38, ranking: 18, status: "active", admissions: "Open" },
    { id: 3, name: "Manipal University", students: 52, ranking: 8, status: "active", admissions: "Closing Soon" },
  ];

  const trainingProgress = [
    { id: 1, student: "Rahul Sharma", course: "Full Stack Development", progress: 75, completion: "Expected: March 2024" },
    { id: 2, student: "Priya Singh", course: "Data Science Fundamentals", progress: 45, completion: "Expected: April 2024" },
    { id: 3, student: "Amit Kumar", course: "Software Engineering", progress: 90, completion: "Expected: February 2024" },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "bg-yellow-100 text-yellow-800",
      contacted: "bg-blue-100 text-blue-800",
      admitted: "bg-green-100 text-green-800",
      active: "bg-green-100 text-green-800",
    };
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">CCC Admin Dashboard</h1>
          <p className="text-primary-foreground/80">Manage student inquiries, college partners, and training progress</p>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,567</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">College Partners</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+5 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Training Completion</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">+3% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search students, colleges, or courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="inquiries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inquiries">Student Inquiries</TabsTrigger>
            <TabsTrigger value="partners">College Partners</TabsTrigger>
            <TabsTrigger value="training">Training Progress</TabsTrigger>
          </TabsList>

          {/* Student Inquiries */}
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Recent Student Inquiries</CardTitle>
                <CardDescription>Manage and track student admission requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{inquiry.name}</p>
                        <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                        <p className="text-sm">Interested in: {inquiry.college}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusBadge(inquiry.status)}>{inquiry.status}</Badge>
                        <span className="text-sm text-muted-foreground">{inquiry.date}</span>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* College Partners */}
          <TabsContent value="partners">
            <Card>
              <CardHeader>
                <CardTitle>College Partner Management</CardTitle>
                <CardDescription>Monitor partner colleges and their admission status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partners.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{partner.name}</p>
                        <p className="text-sm text-muted-foreground">Ranking: #{partner.ranking} | {partner.students} students placed</p>
                        <p className="text-sm">Admissions: {partner.admissions}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusBadge(partner.status)}>{partner.status}</Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Training Progress */}
          <TabsContent value="training">
            <Card>
              <CardHeader>
                <CardTitle>Student Training Progress</CardTitle>
                <CardDescription>Track Trainlance skill development programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingProgress.map((progress) => (
                    <div key={progress.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1 flex-1">
                        <p className="font-medium">{progress.student}</p>
                        <p className="text-sm text-muted-foreground">{progress.course}</p>
                        <p className="text-sm">{progress.completion}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{progress.progress}%</p>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${progress.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;