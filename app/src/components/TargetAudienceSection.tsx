import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Wrench, ArrowRight, CheckCircle } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      title: "Students (18-30)",
      titleHindi: "छात्र (18-30)",
      subtitle: "From Tier 2/3 Cities",
      icon: GraduationCap,
      description: "Build a technical career with industry-ready skills and guaranteed job placement support.",
      benefits: [
        "Start with zero experience",
        "Learn in Hindi + English", 
        "Affordable course fees (₹499-₹1999)",
        "Industry-recognized certificates",
        "Job placement assistance",
        "Resume building support"
      ],
      cta: "Start Your Tech Career",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Working Technicians (25-40)",
      titleHindi: "कार्यरत तकनीशियन (25-40)",
      subtitle: "Skill Upgradation & Growth",
      icon: Wrench,
      description: "Upgrade your skills to advance in your current role or switch to better opportunities.",
      benefits: [
        "Evening & weekend batches",
        "Practical industry case studies",
        "Advanced troubleshooting techniques", 
        "Salary increment strategies",
        "Career transition support",
        "Networking with industry experts"
      ],
      cta: "Upgrade Your Skills",
      bgGradient: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Who Is This For?</h2>
          <p className="text-xl text-muted-foreground mb-2">यह किसके लिए है?</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our courses are specifically designed for two key audiences - students starting their technical journey 
            and working professionals looking to advance their careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className={`course-card relative overflow-hidden bg-gradient-to-br ${audience.bgGradient}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{audience.title}</CardTitle>
                <p className="text-muted-foreground italic">{audience.titleHindi}</p>
                <Badge variant="secondary" className="mx-auto mt-2">
                  {audience.subtitle}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {audience.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  {audience.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Our Success Stories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Average Salary Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Course Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;