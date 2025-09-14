import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import CountdownTimer from "@/components/CountdownTimer";
import { BookOpen, CheckCircle, Bell, Gift, Users, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ComingSoon = () => {
  const { toast } = useToast();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    notifications: true
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early signup:", signupData);
    
    toast({
      title: "Successfully Registered!",
      description: "You'll be notified when we launch with exclusive early bird offers.",
    });
    
    setSignupData({
      name: "",
      email: "",
      phone: "",
      interests: [],
      notifications: true
    });
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setSignupData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const timeline = [
    {
      phase: "Soft Launch",
      date: "November 15, 2025",
      features: [
        "3 Demo courses live",
        "Limited beta access", 
        "Community forum",
        "Basic video content"
      ],
      status: "upcoming"
    },
    {
      phase: "Beta Phase",
      date: "November - December 2025",
      features: [
        "200 beta signups",
        "2 live webinars monthly",
        "Feedback collection",
        "Course improvements"
      ],
      status: "upcoming"
    },
    {
      phase: "Official Launch",
      date: "January 10, 2026",
      features: [
        "10+ complete courses",
        "Referral system active",
        "Certificates with QR verification",
        "Full job placement support"
      ],
      status: "upcoming"
    }
  ];

  const interests = [
    "Electrical Basics",
    "PLC Programming", 
    "Industrial Maintenance",
    "Job Placement Support",
    "Career Guidance",
    "Free Webinars"
  ];

  const earlyBirdBenefits = [
    {
      title: "50% Early Bird Discount",
      titleHindi: "50% अर्ली बर्ड छूट",
      description: "Get half price on all courses for first 100 signups",
      icon: Gift
    },
    {
      title: "Exclusive Beta Access",
      titleHindi: "विशेष बीटा एक्सेस", 
      description: "Be among the first to access our courses",
      icon: Star
    },
    {
      title: "Free Lifetime Updates",
      titleHindi: "मुफ्त लाइफटाइम अपडेट",
      description: "Get all future course updates at no extra cost",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Coming Soon
          </Badge>
          
          <h1 className="text-5xl font-bold text-primary mb-4">
            TechSkill Academy
          </h1>
          <p className="text-xl text-muted-foreground mb-2 italic">
            तकनीकी शिक्षा का नया अध्याय
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            India's most comprehensive vocational technical education platform is launching soon. 
            Master industry-ready skills with expert instructors and Hindi + English support.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Official Launch In:</h2>
            <CountdownTimer />
          </div>
        </div>

        {/* Early Bird Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {earlyBirdBenefits.map((benefit, index) => (
            <Card key={index} className="text-center course-card bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <p className="text-muted-foreground italic">{benefit.titleHindi}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Signup Form */}
          <Card className="course-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Bell className="w-6 h-6" />
                <span>Get Early Access</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Be the first to know when we launch and get exclusive early bird offers!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={signupData.name}
                    onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={signupData.phone}
                    onChange={(e) => setSignupData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>I'm interested in: (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`interest-${index}`}
                          checked={signupData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={`interest-${index}`} className="text-sm">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notifications"
                    checked={signupData.notifications}
                    onCheckedChange={(checked) => 
                      setSignupData(prev => ({ ...prev, notifications: checked as boolean }))
                    }
                  />
                  <Label htmlFor="notifications" className="text-sm">
                    Send me updates about launch, courses, and special offers
                  </Label>
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me When Ready
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Join 2,500+ people already signed up for early access
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Launch Timeline */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Launch Timeline</h2>
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <Card key={index} className="course-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      <Badge variant="outline">{phase.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Early Signups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Expected Job Rate</div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">What Early Subscribers Say:</h3>
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-muted-foreground italic">
                "Finally, a technical education platform that understands the needs of Indian students. 
                Can't wait for the Hindi + English courses!"
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Rahul S., Electrical Engineering Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;