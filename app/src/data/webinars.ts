export interface Webinar {
  id: string;
  title: string;
  titleHindi: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  registrations: number;
  maxCapacity: number;
  topics: string[];
  isUpcoming: boolean;
}

export const webinars: Webinar[] = [
  {
    id: "electrical-safety-nov",
    title: "Electrical Safety Fundamentals",
    titleHindi: "विद्युत सुरक्षा की बुनियादी बातें",
    description: "Learn essential electrical safety practices and regulations for industrial environments. Perfect for beginners and refresher for experienced technicians.",
    instructor: "Rajesh Kumar",
    date: "2025-11-25",
    time: "7:00 PM IST",
    duration: "90 minutes",
    registrations: 245,
    maxCapacity: 500,
    topics: [
      "OSHA Electrical Safety Standards",
      "PPE Requirements",
      "Lockout/Tagout Procedures",
      "Arc Flash Protection",
      "Q&A Session"
    ],
    isUpcoming: true
  },
  {
    id: "plc-basics-dec",
    title: "PLC Programming Made Simple",
    titleHindi: "PLC प्रोग्रामिंग को आसान तरीके से समझें",
    description: "Introduction to PLC programming with real-world examples. Learn ladder logic basics and common industrial applications.",
    instructor: "Amit Sharma",
    date: "2025-12-20",
    time: "7:00 PM IST", 
    duration: "90 minutes",
    registrations: 189,
    maxCapacity: 500,
    topics: [
      "PLC Hardware Overview",
      "Ladder Logic Basics",
      "Input/Output Configuration",
      "Simple Programming Examples",
      "Career Opportunities"
    ],
    isUpcoming: true
  },
  {
    id: "maintenance-tips-jan",
    title: "Industrial Maintenance Best Practices",
    titleHindi: "औद्योगिक रखरखाव की बेहतरीन तकनीकें",
    description: "Preventive maintenance strategies and troubleshooting techniques for industrial equipment. Includes case studies from real manufacturing facilities.",
    instructor: "Suresh Patel",
    date: "2026-01-15",
    time: "7:00 PM IST",
    duration: "90 minutes", 
    registrations: 98,
    maxCapacity: 500,
    topics: [
      "Preventive vs Predictive Maintenance",
      "Equipment Inspection Techniques",
      "Common Failure Patterns",
      "Maintenance Documentation",
      "Cost-Effective Strategies"
    ],
    isUpcoming: true
  }
];