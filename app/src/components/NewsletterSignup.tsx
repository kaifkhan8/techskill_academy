import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive our weekly technical tips and updates.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Technical Tips</h2>
          <p className="text-xl mb-2 opacity-90">तकनीकी टिप्स के साथ अपडेट रहें</p>
          <p className="text-lg mb-8 opacity-80">
            Get weekly emails with practical technical tips, career advice, job opportunities, 
            and success stories from our community.
          </p>

          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/90 text-foreground placeholder:text-muted-foreground border-white/30"
                />
                <Button 
                  type="submit" 
                  variant="secondary"
                  disabled={isSubmitting}
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                >
                  {isSubmitting ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Subscribe FREE
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-4 text-sm opacity-80">
                <p className="mb-2">What you'll get:</p>
                <div className="flex flex-wrap gap-4 justify-center text-xs">
                  <span>• Weekly Technical Tips</span>
                  <span>• Job Opportunities</span>
                  <span>• Success Stories</span>
                  <span>• Free Resources</span>
                  <span>• Webinar Updates</span>
                </div>
                <p className="mt-2 text-xs opacity-70">
                  No spam. Unsubscribe anytime. 5000+ technicians already subscribed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;