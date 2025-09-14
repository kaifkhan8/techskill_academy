import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Users, IndianRupee, Copy, Share2, Trophy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReferralProgram = () => {
  const { toast } = useToast();
  const [referralCode] = useState("TECH2024RAHUL");
  const [friendEmail, setFriendEmail] = useState("");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const handleSendInvitation = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending invitation to:", friendEmail);
    toast({
      title: "Invitation Sent!",
      description: `Invitation sent to ${friendEmail}`,
    });
    setFriendEmail("");
  };

  const benefits = [
    {
      title: "₹500 Discount",
      titleHindi: "₹500 की छूट",
      description: "Your friend gets ₹500 off their first course",
      icon: Gift,
      color: "text-green-600"
    },
    {
      title: "₹300 Credit",
      titleHindi: "₹300 क्रेडिट",
      description: "You get ₹300 credit when they enroll",
      icon: IndianRupee,
      color: "text-blue-600"
    },
    {
      title: "Unlimited Referrals",
      titleHindi: "असीमित रेफरल",
      description: "No limit on how many friends you can refer",
      icon: Users,
      color: "text-purple-600"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Share Your Code",
      titleHindi: "अपना कोड शेयर करें",
      description: "Share your unique referral code with friends and family"
    },
    {
      step: 2,
      title: "Friend Enrolls",
      titleHindi: "दोस्त का नामांकन",
      description: "Your friend uses your code and enrolls in any course"
    },
    {
      step: 3,
      title: "Both Get Rewards",
      titleHindi: "दोनों को इनाम",
      description: "They get discount, you get credit - everyone wins!"
    }
  ];

  const leaderboard = [
    { name: "Rahul S.", referrals: 15, earnings: "₹4,500" },
    { name: "Priya M.", referrals: 12, earnings: "₹3,600" },
    { name: "Amit K.", referrals: 10, earnings: "₹3,000" },
    { name: "Deepak P.", referrals: 8, earnings: "₹2,400" },
    { name: "Ravi T.", referrals: 6, earnings: "₹1,800" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Refer & Earn Program
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            रेफर करें और कमाएं कार्यक्रम
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share TechSkill Academy with your friends and earn rewards for every successful referral. 
            Help others advance their careers while earning credits for yourself!
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center course-card">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
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

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground italic text-sm mb-2">{step.titleHindi}</p>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <div className="border-t-2 border-dashed border-primary/30 transform -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Referral Tools */}
        <Tabs defaultValue="share" className="max-w-4xl mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="share">Share Your Code</TabsTrigger>
            <TabsTrigger value="track">Track Referrals</TabsTrigger>
          </TabsList>

          <TabsContent value="share">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Share2 className="w-6 h-6" />
                  <span>Share Your Referral Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="referral-code">Your Unique Referral Code</Label>
                  <div className="flex space-x-2 mt-2">
                    <Input
                      id="referral-code"
                      value={referralCode}
                      readOnly
                      className="font-mono text-lg"
                    />
                    <Button onClick={handleCopyCode}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Quick Share Message</Label>
                  <div className="mt-2 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      "Hey! I'm learning technical skills at TechSkill Academy. Use my code 
                      <strong className="text-primary"> {referralCode} </strong> 
                      to get ₹500 off your first course. They have amazing courses in Electrical, PLC, and Maintenance! 
                      Check it out: techskillacademy.com"
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSendInvitation}>
                  <Label htmlFor="friend-email">Send Direct Invitation</Label>
                  <div className="flex space-x-2 mt-2">
                    <Input
                      id="friend-email"
                      type="email"
                      placeholder="Friend's email address"
                      value={friendEmail}
                      onChange={(e) => setFriendEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" variant="hero">
                      Send Invite
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="track">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6" />
                  <span>Your Referral Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Successful Referrals</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg">
                    <div className="text-3xl font-bold text-accent mb-2">₹1,500</div>
                    <div className="text-sm text-muted-foreground">Credits Earned</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg">
                    <div className="text-3xl font-bold text-success mb-2">₹750</div>
                    <div className="text-sm text-muted-foreground">Credits Available</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Referrals</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Amit P.", status: "Enrolled", date: "Nov 10", credit: "₹300" },
                      { name: "Rajesh K.", status: "Enrolled", date: "Nov 8", credit: "₹300" },
                      { name: "Priya M.", status: "Pending", date: "Nov 5", credit: "Pending" }
                    ].map((referral, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {referral.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{referral.name}</p>
                            <p className="text-sm text-muted-foreground">{referral.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={referral.status === "Enrolled" ? "default" : "secondary"}>
                            {referral.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{referral.credit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Leaderboard */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-center">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span>Top Referrers This Month</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-secondary/50 to-secondary/30">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-amber-600' : 'bg-primary'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.referrals} referrals</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{user.earnings}</p>
                    <p className="text-xs text-muted-foreground">earned</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Start Referring Today!</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Help your friends advance their technical careers while earning rewards
          </p>
          <Button variant="hero" size="lg">
            Get Your Referral Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;