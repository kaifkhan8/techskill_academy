import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import WebinarSection from "@/components/WebinarSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterSignup from "@/components/NewsletterSignup";
import { courses } from "@/data/courses";
import { ArrowRight, CheckCircle, Users, Award, Briefcase, BookOpen, TrendingUp, Star } from "lucide-react";

const Index = () => {
  const featuredCourses = courses.slice(0, 3);
  
  const stats = [
    { label: "Students Enrolled", value: "3000+", icon: Users },
    { label: "Courses Available", value: "12+", icon: BookOpen },
    { label: "Industry Partners", value: "50+", icon: Briefcase },
    { label: "Job Placements", value: "85%", icon: TrendingUp }
  ];

  const features = [
    {
      title: "Industry-Ready Skills",
      titleHindi: "उद्योग-तैयार कौशल",
      description: "Learn practical skills that are in high demand in the technical job market.",
      icon: Award
    },
    {
      title: "Expert Instructors", 
      titleHindi: "विशेषज्ञ प्रशिक्षक",
      description: "Learn from experienced professionals with years of industry experience.",
      icon: Users
    },
    {
      title: "Job Placement Support",
      titleHindi: "नौकरी प्लेसमेंट सहायता", 
      description: "Get assistance in finding the right job opportunities after course completion.",
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                India's Leading Technical Education Platform
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master Technical Skills for a 
                <span className="block text-accent-glow">Bright Career</span>
              </h1>
              <p className="text-xl mb-4 opacity-90">
                तकनीकी कौशल सीखें और अपने करियर को नई ऊंचाई दें
              </p>
              <p className="text-lg mb-8 opacity-80">
                Learn industry-ready technical skills with hands-on training from expert instructors. 
                Join thousands of students building successful careers in electrical, automation, and maintenance fields.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <h3 className="text-2xl font-bold mb-6">Quick Start Your Learning</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-glow" />
                    <span>Choose from 12+ technical courses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-glow" />
                    <span>Learn with bilingual support (Hindi + English)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-glow" />
                    <span>Get industry-recognized certificates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-glow" />
                    <span>85% job placement success rate</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-accent hover:bg-accent/90" asChild>
                  <Link to="/signup">Start Learning Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground mb-2">फीचर्ड कोर्सेज</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your technical career with our most popular courses designed for job-ready skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <TargetAudienceSection />

      {/* Free Monthly Webinars */}
      <WebinarSection />

      {/* Enhanced Testimonials with Video Support */}
      <TestimonialSlider />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Technical Career?</h2>
          <p className="text-xl mb-2 opacity-90">अपना तकनीकी करियर शुरू करने के लिए तैयार हैं?</p>
          <p className="text-lg mb-8 opacity-80">
            Join thousands of students who have transformed their careers with our technical training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Talk to Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;