import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  review: string;
  reviewHindi?: string;
  rating: number;
  image?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  salaryIncrease?: string;
  courseCompleted: string;
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Rahul Sharma",
      role: "Electrical Technician",
      company: "Tata Motors",
      location: "Jamshedpur",
      review: "The electrical basics course completely changed my career. I was working as a helper, but after completing this course, I got promoted to technician level with 60% salary increase!",
      reviewHindi: "इस कोर्स ने मेरा करियर पूरी तरह बदल दिया। पहले मैं हेल्परका काम करता था, अब टेक्निशियन हूं।",
      rating: 5,
      salaryIncrease: "60%",
      courseCompleted: "Electrical Basics",
      videoThumbnail: "/api/placeholder/300/200"
    },
    {
      id: "2", 
      name: "Priya Patel",
      role: "PLC Programmer",
      company: "Siemens",
      location: "Pune",
      review: "As a working professional, the evening batches were perfect for me. The PLC programming course helped me switch from mechanical to automation field with better opportunities.",
      reviewHindi: "शाम की क्लासेस मेरे लिए बिल्कुल सही थीं। अब मैं ऑटोमेशन फील्ड में काम करती हूं।",
      rating: 5,
      salaryIncrease: "45%",
      courseCompleted: "PLC Programming",
      videoThumbnail: "/api/placeholder/300/200"
    },
    {
      id: "3",
      name: "Amit Kumar",
      role: "Maintenance Engineer",
      company: "Bajaj Auto",
      location: "Aurangabad",
      review: "The practical approach and industry case studies made all the difference. I could immediately apply what I learned in my workplace and got promoted within 6 months.",
      reviewHindi: "प्रैक्टिकल तरीके से सिखाने से बहुत फायदा हुआ। 6 महीने में प्रमोशन मिल गया।",
      rating: 5,
      salaryIncrease: "35%",
      courseCompleted: "Industrial Maintenance",
      videoThumbnail: "/api/placeholder/300/200"
    },
    {
      id: "4",
      name: "Deepak Singh",
      role: "Control Systems Technician", 
      company: "L&T",
      location: "Chennai",
      review: "Coming from a small town, I was worried about English. But the Hindi + English teaching method made everything clear. Now I work in a top company!",
      reviewHindi: "छोटे शहर से आने पर अंग्रेजी की समस्या थी। लेकिन हिंदी-अंग्रेजी में सिखाने से सब समझ आया।",
      rating: 5,
      salaryIncrease: "70%",
      courseCompleted: "PLC Programming + Electrical Basics",
      videoThumbnail: "/api/placeholder/300/200"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground mb-2">सफलता की कहानियां</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with TechSkill Academy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="course-card relative overflow-hidden">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Video/Image Section */}
                <div className="relative">
                  {currentTestimonial.videoThumbnail && (
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video">
                      <img 
                        src={currentTestimonial.videoThumbnail} 
                        alt={`${currentTestimonial.name} testimonial`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button 
                          variant="secondary" 
                          size="lg"
                          className="rounded-full w-16 h-16 p-0"
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        >
                          <Play className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Stats Overlay */}
                  {currentTestimonial.salaryIncrease && (
                    <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
                      +{currentTestimonial.salaryIncrease} Salary ↗
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div>
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    "{currentTestimonial.review}"
                  </blockquote>

                  {currentTestimonial.reviewHindi && (
                    <blockquote className="text-base text-muted-foreground/80 mb-6 italic">
                      "{currentTestimonial.reviewHindi}"
                    </blockquote>
                  )}

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-lg text-primary">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground">{currentTestimonial.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial.company} • {currentTestimonial.location}
                    </p>
                    <p className="text-sm text-primary font-medium mt-2">
                      Completed: {currentTestimonial.courseCompleted}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevSlide}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={nextSlide}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center mt-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-Slide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;