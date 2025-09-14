import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/data/courses";
import { Clock, Users, Star, IndianRupee, BookOpen, Target, Briefcase, Award } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <a href="/courses">Back to Courses</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <Badge className="mb-4">{course.level}</Badge>
            <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-4 italic">{course.titleHindi}</p>
            <p className="text-lg mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span><strong>Duration:</strong> {course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span><strong>{course.students}+</strong> Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span><strong>{course.rating}</strong> Rating</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-3xl font-bold text-primary">
                <IndianRupee className="w-8 h-8" />
                <span>{course.price.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg">
                  Preview Course
                </Button>
                <Button variant="hero" size="lg">
                  Enroll Now
                </Button>
              </div>
            </div>

            <p className="text-muted-foreground">
              <strong>Instructor:</strong> {course.instructor}
            </p>
          </div>

          <div className="relative">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Course Details Tabs */}
        <Tabs defaultValue="modules" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="jobs">Career Path</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-6 h-6" />
                  <span>Course Modules</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-6 h-6" />
                  <span>Skills You'll Learn</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-6 h-6" />
                  <span>Career Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.jobRoles.map((job, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">{job}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructor" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>About Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{course.instructor}</h3>
                    <p className="text-muted-foreground">Technical Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Experienced industry professional with extensive knowledge in {course.level.toLowerCase()} level technical training.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;