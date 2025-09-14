import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, IndianRupee, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      nameHindi: "बेसिक प्लान",
      price: 2999,
      duration: "per course",
      features: [
        "Access to course materials",
        "Video lectures",
        "Basic assignments",
        "Course completion certificate",
        "Community access"
      ],
      popular: false
    },
    {
      name: "Premium Plan", 
      nameHindi: "प्रीमियम प्लान",
      price: 4999,
      duration: "per course",
      features: [
        "Everything in Basic",
        "Live doubt sessions",
        "1-on-1 mentor support",
        "Practical assignments",
        "Industry-recognized certificate",
        "Job placement assistance",
        "Lifetime access"
      ],
      popular: true
    },
    {
      name: "All Access Pass",
      nameHindi: "ऑल एक्सेस पास", 
      price: 12999,
      duration: "all courses",
      features: [
        "Access to ALL courses",
        "Premium features for all",
        "Priority mentor support",
        "Advanced projects",
        "Industry internships",
        "Guaranteed job placement",
        "Lifetime access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            मूल्य योजना
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your technical education journey. All plans include quality content and expert instruction.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-primary course-card' : 'course-card'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-muted-foreground italic mb-4">{plan.nameHindi}</p>
                <div className="flex items-center justify-center space-x-1 text-3xl font-bold text-primary">
                  <IndianRupee className="w-8 h-8" />
                  <span>{plan.price.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-muted-foreground">{plan.duration}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit/debit cards, UPI payments, net banking, and digital wallets like Paytm, PhonePe, and Google Pay.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a refund policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content. No questions asked.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide job placement assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium and All Access Pass plans include job placement assistance with our industry partners and dedicated career support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;