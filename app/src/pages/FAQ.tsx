import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, BookOpen, CreditCard, Award, Users } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Courses & Learning",
      icon: BookOpen,
      faqs: [
        {
          question: "What types of courses do you offer?",
          answer: "We offer vocational technical courses including Electrical Basics, PLC Programming, Industrial Maintenance, and more. All courses are designed for practical, job-ready skills."
        },
        {
          question: "How long are the courses?",
          answer: "Course duration varies from 6-10 weeks depending on the subject. Each course includes video lectures, practical assignments, and hands-on projects."
        },
        {
          question: "Are courses available in Hindi?",
          answer: "Yes! Our courses support both Hindi and English languages with bilingual subtitles and study materials to ensure better understanding."
        },
        {
          question: "Do I need prior experience?",
          answer: "Our beginner courses require no prior experience. For intermediate and advanced courses, we provide prerequisite information on each course page."
        }
      ]
    },
    {
      title: "Payment & Pricing",
      icon: CreditCard,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI payments, net banking, and digital wallets like Paytm, PhonePe, and Google Pay."
        },
        {
          question: "Is there a refund policy?",
          answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content. No questions asked."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! The price you see is the final price. This includes all course materials, certificates, and support."
        },
        {
          question: "Can I pay in installments?",
          answer: "Yes, we offer EMI options for courses above ₹5,000. You can choose 3, 6, or 12-month installment plans during checkout."
        }
      ]
    },
    {
      title: "Certificates & Jobs",
      icon: Award,
      faqs: [
        {
          question: "Will I get a certificate?",
          answer: "Yes! Upon successful completion of the course and passing the final assessment, you'll receive an industry-recognized certificate."
        },
        {
          question: "Are certificates recognized by employers?",
          answer: "Our certificates are industry-recognized and accepted by leading companies in the technical and manufacturing sectors."
        },
        {
          question: "Do you provide job placement assistance?",
          answer: "Premium and All Access Pass plans include dedicated job placement assistance with our industry partners and career support."
        },
        {
          question: "What kind of jobs can I get after completing courses?",
          answer: "Depending on the course, you can work as Electrical Technician, PLC Programmer, Maintenance Engineer, Industrial Electrician, and similar technical roles."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Users,
      faqs: [
        {
          question: "What if I face technical issues during the course?",
          answer: "Our technical support team is available 24/7 to help with any platform-related issues. You can reach us via chat, email, or phone."
        },
        {
          question: "Can I access courses on mobile devices?",
          answer: "Yes! Our platform is fully responsive and works on all devices including smartphones, tablets, laptops, and desktops."
        },
        {
          question: "Is there a mobile app?",
          answer: "We're currently developing a mobile app. For now, you can access all features through your mobile browser with full functionality."
        },
        {
          question: "How do I reset my password?",
          answer: "Click on 'Forgot Password' on the login page, enter your email, and follow the instructions sent to your email to reset your password."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            अक्सर पूछे जाने वाले सवाल
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, pricing, certificates, and technical support.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className="w-6 h-6 text-primary" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:info@techskillacademy.com">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;