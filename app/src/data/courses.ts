import electricalImage from "@/assets/electrical-course.jpg";
import plcImage from "@/assets/plc-course.jpg";
import maintenanceImage from "@/assets/maintenance-course.jpg";

export interface Course {
  id: string;
  title: string;
  titleHindi: string;
  description: string;
  descriptionHindi: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  level: string;
  instructor: string;
  modules: string[];
  skills: string[];
  jobRoles: string[];
}

export const courses: Course[] = [
  {
    id: "electrical-basics",
    title: "Electrical Basics",
    titleHindi: "",
    description: "Master fundamental electrical concepts, circuit analysis, and safety procedures for industrial applications.",
    descriptionHindi: "औद्योगिक अनुप्रयोगों के लिए मौलिक विद्युत अवधारणाएं, सर्किट विश्लेषण और सुरक्षा प्रक्रियाएं सीखें।",
    image: electricalImage,
    duration: "6 weeks",
    students: 1250,
    rating: 4.8,
    price: 4999,
    level: "Beginner",
    instructor: "Rajesh Kumar",
    modules: [
      "Electrical Safety & Fundamentals",
      "DC & AC Circuit Analysis", 
      "Electrical Components & Instruments",
      "Motor Control Basics",
      "Troubleshooting Techniques",
      "Practical Wiring & Installation"
    ],
    skills: ["Circuit Analysis", "Electrical Safety", "Multimeter Usage", "Motor Controls", "Wiring"],
    jobRoles: ["Electrical Technician", "Maintenance Helper", "Panel Wireman", "Electrical Assistant"]
  },
  {
    id: "plc-beginner",
    title: "PLC Programming Beginner", 
    titleHindi: "पीएलसी प्रोग्रामिंग शुरुआती",
    description: "Learn PLC programming fundamentals with ladder logic, HMI development, and industrial automation basics.",
    descriptionHindi: "लैडर लॉजिक, एचएमआई विकास और औद्योगिक स्वचालन की बुनियादी बातों के साथ पीएलसी प्रोग्रामिंग सीखें।",
    image: plcImage,  
    duration: "8 weeks",
    students: 980,
    rating: 4.9,
    price: 7999,
    level: "Beginner",
    instructor: "Amit Sharma",
    modules: [
      "PLC Hardware & Architecture",
      "Ladder Logic Programming",
      "Input/Output Configuration", 
      "Timers & Counters",
      "HMI Design Basics",
      "Industrial Communication"
    ],
    skills: ["Ladder Logic", "PLC Programming", "HMI Design", "Industrial Automation", "Troubleshooting"],
    jobRoles: ["PLC Programmer", "Automation Technician", "Control Systems Engineer", "Industrial Electrician"]
  },
  {
    id: "industrial-maintenance",
    title: "Industrial Maintenance",
    titleHindi: "औद्योगिक रखरखाव", 
    description: "Comprehensive training in mechanical, electrical, and preventive maintenance for industrial equipment.",
    descriptionHindi: "औद्योगिक उपकरणों के लिए यांत्रिक, विद्युत और निवारक रखरखाव में व्यापक प्रशिक्षण।",
    image: maintenanceImage,
    duration: "10 weeks", 
    students: 756,
    rating: 4.7,
    price: 6999,
    level: "Intermediate",
    instructor: "Suresh Patel",
    modules: [
      "Mechanical Maintenance Basics",
      "Electrical Maintenance", 
      "Preventive Maintenance Planning",
      "Hydraulics & Pneumatics",
      "Bearing & Belt Maintenance",
      "Equipment Troubleshooting"
    ],
    skills: ["Mechanical Repair", "Electrical Maintenance", "Preventive Maintenance", "Hydraulics", "Troubleshooting"],
    jobRoles: ["Maintenance Technician", "Industrial Mechanic", "Equipment Specialist", "Facility Maintenance"]
  }
];

export const instructors = [
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    experience: "15+ years",
    specialization: "Electrical Systems",
    courses: ["Electrical Basics"],
    rating: 4.8
  },
  {
    id: "amit-sharma", 
    name: "Amit Sharma",
    experience: "12+ years", 
    specialization: "Industrial Automation",
    courses: ["PLC Programming"],
    rating: 4.9
  },
  {
    id: "suresh-patel",
    name: "Suresh Patel", 
    experience: "18+ years",
    specialization: "Mechanical Maintenance", 
    courses: ["Industrial Maintenance"],
    rating: 4.7
  }
];