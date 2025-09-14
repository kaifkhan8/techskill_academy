import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { instructors } from "@/data/courses";
import { Star, BookOpen, Clock } from "lucide-react";

const Instructors = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Our Expert Instructors
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            हमारे विशेषज्ञ प्रशिक्षक
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry professionals with years of hands-on experience in technical fields.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="course-card group">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {instructor.name}
                </CardTitle>
                <p className="text-muted-foreground">{instructor.specialization}</p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{instructor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{instructor.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Courses:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.courses.map((course, index) => (
                      <Badge key={index} variant="secondary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Want to Become an Instructor?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Share your technical expertise and help students build their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Apply to Teach
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;