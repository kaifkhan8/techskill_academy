import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, CheckCircle, Clock, Award, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: "electrical-basics",
      title: "Electrical Basics",
      progress: 75,
      status: "In Progress",
      nextLesson: "Motor Control Basics",
      totalLessons: 24,
      completedLessons: 18
    },
    {
      id: "plc-beginner", 
      title: "PLC Programming",
      progress: 30,
      status: "In Progress", 
      nextLesson: "Ladder Logic Programming",
      totalLessons: 32,
      completedLessons: 10
    }
  ];

  const achievements = [
    { title: "First Course Started", icon: BookOpen, earned: true },
    { title: "Quiz Master", icon: CheckCircle, earned: true },
    { title: "Week Streak", icon: TrendingUp, earned: false },
    { title: "Course Completed", icon: Award, earned: false }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-muted-foreground">
              Continue your technical learning journey
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="hero">
              Browse More Courses
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-primary">2</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                  <p className="text-2xl font-bold text-primary">28</p>
                </div>
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-primary">28</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                  <p className="text-2xl font-bold text-primary">0</p>
                </div>
                <Award className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-6 h-6" />
                  <span>My Courses</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {course.completedLessons} of {course.totalLessons} lessons completed
                          </p>
                        </div>
                        <Badge variant="secondary">{course.status}</Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Next: <span className="font-medium">{course.nextLesson}</span>
                        </p>
                        <Button size="sm" variant="outline">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        achievement.earned 
                          ? 'bg-success/10 border border-success/20' 
                          : 'bg-muted/50 border border-border'
                      }`}
                    >
                      <achievement.icon 
                        className={`w-6 h-6 ${
                          achievement.earned ? 'text-success' : 'text-muted-foreground'
                        }`} 
                      />
                      <span 
                        className={`font-medium ${
                          achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {achievement.title}
                      </span>
                      {achievement.earned && (
                        <CheckCircle className="w-4 h-4 text-success ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;