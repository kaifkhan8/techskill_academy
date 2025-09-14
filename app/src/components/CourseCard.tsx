import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Star, IndianRupee } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  titleHindi: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  level: string;
  instructor: string;
}

const CourseCard = ({ 
  id, 
  title, 
  titleHindi, 
  description, 
  image, 
  duration, 
  students, 
  rating, 
  price, 
  level, 
  instructor 
}: CourseCardProps) => {
  return (
    <Card className="course-card group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="tech-badge">
            {level}
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground italic">{titleHindi}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students}+</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">Instructor: {instructor}</p>
      </CardContent>

      <CardFooter className="pt-2 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-lg font-semibold text-primary">
          <IndianRupee className="w-5 h-5" />
          <span>{price.toLocaleString('en-IN')}</span>
        </div>
        <Button variant="hero" size="sm" asChild>
          <Link to={`/course/${id}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;