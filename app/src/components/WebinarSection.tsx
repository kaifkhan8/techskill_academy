import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { webinars } from "@/data/webinars";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WebinarSection = () => {
  const { toast } = useToast();
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    webinarId: ""
  });

  const upcomingWebinars = webinars.filter(w => w.isUpcoming).slice(0, 2);

  const handleRegistration = (e: React.FormEvent, webinarId: string) => {
    e.preventDefault();
    console.log("Webinar registration:", { ...registrationData, webinarId });
    
    toast({
      title: "Registration Successful!",
      description: "You'll receive a confirmation email with webinar details shortly.",
    });
    
    setRegistrationData({ name: "", email: "", phone: "", webinarId: "" });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Free Monthly Webinars</h2>
          <p className="text-xl text-muted-foreground mb-2">मुफ्त मासिक वेबिनार</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our expert instructors for free monthly webinars covering essential technical topics. 
            Learn, ask questions, and connect with fellow technicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingWebinars.map((webinar) => (
            <Card key={webinar.id} className="course-card">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{webinar.title}</CardTitle>
                    <p className="text-muted-foreground italic text-sm mb-3">{webinar.titleHindi}</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">FREE</Badge>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{webinar.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formatDate(webinar.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{webinar.time} • {webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{webinar.registrations}/{webinar.maxCapacity} registered</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Instructor:</strong> {webinar.instructor}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.slice(0, 3).map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {webinar.topics.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{webinar.topics.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="hero" 
                      className="w-full"
                      onClick={() => setRegistrationData(prev => ({ ...prev, webinarId: webinar.id }))}
                    >
                      Register Now - FREE
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Register for Webinar</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={(e) => handleRegistration(e, webinar.id)} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={registrationData.name}
                          onChange={(e) => setRegistrationData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={registrationData.email}
                          onChange={(e) => setRegistrationData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={registrationData.phone}
                          onChange={(e) => setRegistrationData(prev => ({ ...prev, phone: e.target.value }))}
                          required
                        />
                      </div>
                      <Button type="submit" variant="hero" className="w-full">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirm Registration
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Can't attend live? Don't worry! All registered participants get access to the recording.
          </p>
          <Button variant="outline" asChild>
            <a href="/webinars">View All Webinars</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;