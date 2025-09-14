export interface BlogPost {
  id: string;
  title: string;
  titleHindi: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "electrical-safety-tips-2024",
    title: "10 Essential Electrical Safety Tips Every Technician Should Know",
    titleHindi: "हर तकनीशियन के लिए 10 जरूरी विद्युत सुरक्षा टिप्स",
    excerpt: "Master these fundamental electrical safety practices to protect yourself and others in industrial environments.",
    content: `
# 10 Essential Electrical Safety Tips Every Technician Should Know

Working with electricity requires constant vigilance and adherence to safety protocols. Here are the most important safety tips every electrical technician should follow:

## 1. Always Use Personal Protective Equipment (PPE)
Never work on electrical systems without proper PPE including insulated gloves, safety glasses, and arc-rated clothing.

## 2. Test Before You Touch
Always test circuits with a reliable voltage tester before beginning work, even if you believe the power is off.

## 3. Follow Lockout/Tagout Procedures
Properly isolate energy sources and use lockout/tagout procedures to prevent accidental energization.

## 4. Understand Arc Flash Hazards
Be aware of arc flash boundaries and wear appropriate arc-rated PPE when working on energized equipment.

## 5. Maintain Safe Working Distances
Keep proper clearance from energized parts based on voltage levels and safety standards.

## 6. Use Insulated Tools
Always use tools with proper insulation ratings for the voltage levels you're working with.

## 7. Never Work Alone on High-Risk Tasks
Use the buddy system when working on complex or high-voltage systems.

## 8. Keep Work Areas Clean and Organized
Maintain clean, well-lit work areas free from water, debris, and unnecessary materials.

## 9. Stay Updated with Safety Standards
Regularly review and update your knowledge of electrical safety codes and standards.

## 10. Trust Your Instincts
If something doesn't feel right, stop work and reassess the situation.

Remember: No job is so urgent that it can't be done safely. Take the time to follow proper procedures every time.
    `,
    author: "Rajesh Kumar",
    authorRole: "Senior Electrical Instructor",
    publishDate: "2024-11-10",
    readTime: "5 min read",
    category: "Safety",
    tags: ["Electrical Safety", "PPE", "Workplace Safety", "Technical Tips"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: "plc-troubleshooting-guide",
    title: "PLC Troubleshooting: A Step-by-Step Guide for Beginners",
    titleHindi: "PLC समस्या निवारण: शुरुआती लोगों के लिए चरणबद्ध गाइड",
    excerpt: "Learn systematic approaches to diagnose and resolve common PLC issues in industrial automation systems.",
    content: `
# PLC Troubleshooting: A Step-by-Step Guide for Beginners

Troubleshooting PLC systems can seem overwhelming, but with a systematic approach, you can quickly identify and resolve most issues.

## Step 1: Gather Information
- Document the problem symptoms
- Note when the problem started
- Check if any recent changes were made
- Review alarm logs and error codes

## Step 2: Visual Inspection
- Check all physical connections
- Look for damaged cables or loose connections
- Verify indicator lights on modules
- Inspect power supply indicators

## Step 3: Check Power Supplies
- Verify input power voltage levels
- Check DC power supply outputs
- Test battery backup systems
- Monitor current consumption

## Step 4: Analyze Program Logic
- Review ladder logic for the affected circuits
- Check input/output assignments
- Verify timer and counter settings
- Look for programming errors or changes

## Step 5: Test Inputs and Outputs
- Force individual inputs and outputs
- Use diagnostic tools to monitor I/O status
- Check sensor and actuator functionality
- Verify wiring continuity

## Step 6: Communication Diagnostics
- Test network communication status
- Check protocol settings and parameters
- Verify cable integrity for communication networks
- Monitor data exchange between devices

## Common Issues and Solutions

### Problem: PLC Won't Start
- Check power supply voltage
- Verify program download
- Check memory battery
- Review error codes

### Problem: Intermittent Operation
- Inspect loose connections
- Check environmental conditions
- Monitor power quality
- Review grounding systems

Remember: Always document your troubleshooting steps and solutions for future reference.
    `,
    author: "Amit Sharma",
    authorRole: "PLC Programming Expert",
    publishDate: "2024-11-05",
    readTime: "8 min read",
    category: "Technical",
    tags: ["PLC", "Troubleshooting", "Automation", "Maintenance"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: "career-growth-technician",
    title: "From Helper to Engineer: A Technician's Career Growth Roadmap",
    titleHindi: "हेल्पर से इंजीनियर तक: तकनीशियन के करियर ग्रोथ का रोडमैप",
    excerpt: "Discover the step-by-step career progression path for technical professionals in the manufacturing industry.",
    content: `
# From Helper to Engineer: A Technician's Career Growth Roadmap

The technical field offers excellent opportunities for career advancement. Here's a comprehensive roadmap to help you climb the career ladder.

## Level 1: Technical Helper (0-2 years)
**Salary Range: ₹15,000 - ₹25,000/month**

### Responsibilities:
- Assist senior technicians
- Basic maintenance tasks
- Tool preparation and organization
- Following safety procedures

### Skills to Develop:
- Basic electrical/mechanical knowledge
- Safety procedures
- Tool identification and usage
- Following instructions accurately

## Level 2: Junior Technician (2-4 years)
**Salary Range: ₹25,000 - ₹40,000/month**

### Responsibilities:
- Independent maintenance tasks
- Basic troubleshooting
- Documentation and reporting
- Training new helpers

### Skills to Develop:
- Advanced troubleshooting
- Reading technical drawings
- Basic PLC knowledge
- Computer skills

## Level 3: Senior Technician (4-7 years)
**Salary Range: ₹40,000 - ₹60,000/month**

### Responsibilities:
- Complex repairs and maintenance
- Leading maintenance teams
- Planning maintenance schedules
- Training junior staff

### Skills to Develop:
- Advanced PLC programming
- Preventive maintenance planning
- Leadership skills
- Quality management

## Level 4: Maintenance Engineer (7-10 years)
**Salary Range: ₹60,000 - ₹1,00,000/month**

### Responsibilities:
- Equipment design and modification
- Maintenance strategy development
- Budget planning and management
- Inter-departmental coordination

### Skills to Develop:
- Engineering principles
- Project management
- Cost optimization
- Strategic planning

## Tips for Career Advancement:

### 1. Continuous Learning
- Take technical courses regularly
- Stay updated with new technologies
- Obtain relevant certifications
- Learn multiple technical skills

### 2. Build Relationships
- Network with industry professionals
- Maintain good relationships with colleagues
- Seek mentorship opportunities
- Join technical associations

### 3. Document Your Achievements
- Keep records of successful projects
- Quantify your contributions
- Build a portfolio of work
- Gather performance feedback

### 4. Develop Soft Skills
- Communication skills
- Leadership abilities
- Problem-solving approach
- Time management

Remember: Career growth requires patience, dedication, and continuous skill development. Each level builds upon the previous one.
    `,
    author: "Suresh Patel",
    authorRole: "Industry Career Counselor",
    publishDate: "2024-10-28",
    readTime: "10 min read",
    category: "Career",
    tags: ["Career Growth", "Professional Development", "Technical Careers", "Salary"],
    image: "/api/placeholder/600/400",
    featured: false
  }
];

export const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Safety", count: blogPosts.filter(post => post.category === "Safety").length },
  { name: "Technical", count: blogPosts.filter(post => post.category === "Technical").length },
  { name: "Career", count: blogPosts.filter(post => post.category === "Career").length }
];