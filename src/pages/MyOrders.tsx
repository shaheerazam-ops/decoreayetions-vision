import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  Mail, 
  Phone, 
  MessageSquare, 
  DollarSign,
  Loader2,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowLeft,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import PageHero from "@/components/PageHero";

const MyOrders = () => {
  const { user, initialLoading } = useSupabaseAuth();

  const { data: orders, isLoading, error, refetch } = useQuery({
    queryKey: ["orders", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const getStatusBadge = (status: string | null) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
      case "approved":
        return (
          <Badge className="bg-green-500 text-white">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Confirmed
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-500 text-white">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "cancelled":
      case "rejected":
        return (
          <Badge className="bg-red-500 text-white">
            <AlertCircle className="w-3 h-3 mr-1" />
            Cancelled
          </Badge>
        );
      default:
        return (
          <Badge className="bg-blue-500 text-white">
            <Clock className="w-3 h-3 mr-1" />
            Under Review
          </Badge>
        );
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not specified";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatDateTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  if (initialLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-luxury mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your orders...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <Card className="max-w-md">
            <CardContent className="pt-6">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-center text-muted-foreground mb-4">
                Failed to load your orders. Please try again.
              </p>
              <Button onClick={() => refetch()} className="w-full">
                Retry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />

        <PageHero
          title="My Event Requests"
          subtitle="Review and track all your submitted event requests. We'll contact you soon!"
          imageUrl="https://i.pinimg.com/originals/8f/59/eb/8f59eb09bb7af3d541d3b4fef91af870.jpg"
          icon={<FileText className="w-12 h-12 text-luxury animate-pulse" />}
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link to="/contact">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Contact
              </Button>
            </Link>

            {!orders || orders.length === 0 ? (
              <Card className="border-luxury/30">
                <CardContent className="pt-12 pb-12 text-center">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    No Orders Yet
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't submitted any event requests yet. Start planning your perfect event!
                  </p>
                  <Button asChild className="bg-luxury text-luxury-foreground hover:bg-luxury/90">
                    <Link to="/contact">Submit Your First Request</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="elegant-text text-3xl text-primary">
                    Your Event Requests ({orders.length})
                  </h2>
                </div>

                {orders.map((order) => (
                  <Card
                    key={order.id}
                    className="border-border/50 hover:border-luxury/30 transition-all shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl text-primary mb-2">
                            {order.event_type
                              ? order.event_type
                                  .split("-")
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() + word.slice(1)
                                  )
                                  .join(" ")
                              : "Event Request"}
                          </CardTitle>
                          <CardDescription className="text-base">
                            Submitted on {formatDateTime(order.created_at)}
                          </CardDescription>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-luxury mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-foreground font-medium">{order.email}</p>
                          </div>
                        </div>

                        {order.phone && (
                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-luxury mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Phone</p>
                              <p className="text-foreground font-medium">{order.phone}</p>
                            </div>
                          </div>
                        )}

                        {order.event_date && (
                          <div className="flex items-start gap-3">
                            <Calendar className="w-5 h-5 text-luxury mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Event Date</p>
                              <p className="text-foreground font-medium">
                                {formatDate(order.event_date)}
                              </p>
                            </div>
                          </div>
                        )}

                        {order.guests && (
                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-luxury mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Guest Count</p>
                              <p className="text-foreground font-medium">{order.guests}</p>
                            </div>
                          </div>
                        )}

                        {order.budget && (
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-luxury mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Budget Range</p>
                              <p className="text-foreground font-medium">{order.budget}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Message */}
                      {order.message && (
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-start gap-3">
                            <MessageSquare className="w-5 h-5 text-luxury mt-0.5" />
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-2">
                                Your Message
                              </p>
                              <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                                {order.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Order ID */}
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Order ID: {order.id}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default MyOrders;

