import { useEffect, useState } from "react";
import { Course, courses as staticCourses } from "@/data/courses";
import electricalImage from "@/assets/electrical-course.jpg";
import plcImage from "@/assets/plc-course.jpg";
import maintenanceImage from "@/assets/maintenance-course.jpg";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => {
        const updatedCourses = data.map((c: any) => {
          if (c.id === "electrical-basics") c.image = electricalImage;
          else if (c.id === "plc-beginner") c.image = plcImage;
          else if (c.id === "industrial-maintenance") c.image = maintenanceImage;
          return c;
        });
        setCourses(updatedCourses);
      })
      .catch(() => setCourses(staticCourses)); // fallback
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <img src={course.image} alt={course.title} className="w-32 h-20 object-cover mr-2 inline-block" />
            {course.title} – {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}
