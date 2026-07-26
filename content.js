
const portfolioContent = {
   personal: {
    name: "Nithesh Yadav",
    shortName: "NY",
    handle: "@nitydv",
    username: "nitydv",
    title: "Software Engineering Student <br>& Full-Stack Developer",
    location: "Pune, India",
    tagline: "Building full-stack applications and leading developer communities",
    statusBadge: "Open to Software Engineering Internships",
    resumeUrl: "resume.pdf",
    avatarUrl: "profile.jpg",
    bio: [
      "I am an Information Technology undergraduate at Army Institute of Technology, Pune (SPPU), passionate about crafting scalable full-stack applications and cloud computing solutions.",
      "With hands-on expertise in Java, Spring Boot, React, and Google Cloud Platform (GCP), I combine strong software engineering fundamentals with community leadership across global tech programs.",
      "A 5x hackathon winner and active tech mentor, always eager to tackle challenging problems and build impactful software."
    ],
    resumeUrl: "#", 
  },

   contact: {
    email: "nitheshyadav3589@gmail.com",
    location: "Army Institute of Technology, Dighi, Pune, Maharashtra 411015",
    handle: "@nitydv",
    socials: [
      {
        name: "GitHub",
        icon: "github",
        url: "https://github.com/nitydv",
        label: "github.com/nitydv (@nitydv)"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/nitydv",
        label: "linkedin.com/in/nitydv"
      },
      {
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/nit.ydv",
        label: "instagram.com/nit.ydv (@nit.ydv)"
      },
      {
        name: "Credly",
        icon: "award",
        url: "https://credly.com/users/nitydv",
        label: "credly.com/users/nitydv"
      },
      {
        name: "Email",
        icon: "mail",
        url: "mailto:nitheshyadav3589@gmail.com",
        label: "nitheshyadav3589@gmail.com"
      }
    ]
  },

  education: {
    degree: "B.E. in Information Technology",
    institution: "Army Institute of Technology, Pune (SPPU)",
    location: "Pune, MH, India",
    timeline: "2024 — Expected June 2028",
    cgpa: "8.36 / 10.0",
    semesters: "Sem 1: 8.68 | Sem 2: 8.73 | Sem 3: 7.68",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering"
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"]
    },
    {
      category: "Web & Frameworks",
      icon: "layout",
      items: ["Spring Boot", "React", "REST APIs", "HTML/CSS"]
    },
    {
      category: "Cloud Platform",
      icon: "cloud",
      items: ["Google Cloud Platform (GCP)", "AWS Cloud Fundamentals"]
    },
    {
      category: "Databases",
      icon: "database",
      items: ["SQL", "DBMS Concepts", "Relational Database Modeling"]
    },
    {
      category: "Developer Tools & Version Control",
      icon: "tool",
      items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"]
    }
  ],

  projects: [
    {
      id: "skillsync-ai",
      title: "SkillSyncAI Clone",
      subtitle: "Personalized Skill Assessment & Learning Path Engine",
      featured: true,
      description: "Engineered a Java-based platform to help users assess their technical skill set and identify gaps against target engineering roles. Features recommendation logic for personalized learning paths and project suggestions built with modular Java components.",
      tags: ["Java", "Algorithms", "OOP", "System Design"],
      github: "https://github.com/nitydv/SkillSyncAI",
      demo: null
    },
    {
      id: "paypal-clone",
      title: "PayPal-Clone",
      subtitle: "Full-Stack Digital Payments & Wallet Application",
      featured: true,
      description: "Architected a full-stack digital payments application replicating core PayPal functionality — user registration, secure authentication, wallet balance management, peer-to-peer money transfers, and complete transaction history logs.",
      tags: ["Java", "Full-Stack", "REST APIs", "Authentication", "Web App"],
      github: "https://github.com/nitydv/PayPal-Clone",
      demo: null
    },
    {
      id: "ecommerce-backend",
      title: "ecommerce-Backend-Spring-Boot",
      subtitle: "Scalable E-Commerce REST Engine",
      featured: true,
      description: "Built a RESTful backend for an e-commerce platform using Java and Spring Boot. Designed robust APIs for product catalog management, shopping cart operations, and order processing with clean service-layer separation.",
      tags: ["Java", "Spring Boot", "REST APIs", "SQL", "Backend"],
      github: "https://github.com/nitydv/ecommerce-Backend-Spring-Boot",
      demo: null
    },
    {
      id: "spring-boot-rest",
      title: "Spring-Boot-Rest",
      subtitle: "Full-Stack Spring Boot + React Integration",
      featured: true,
      description: "Developed a full-stack web application pairing a Spring Boot REST backend with a React frontend. Consumed RESTful endpoints to connect intuitive UI components with server-side business logic.",
      tags: ["Java", "Spring Boot", "React", "REST APIs", "Full-Stack"],
      github: "https://github.com/nitydv/Spring-Boot-Rest",
      demo: null
    },
    {
      id: "hospital-management",
      title: "HospitalManagement",
      subtitle: "Healthcare Patient & Operations System",
      featured: false,
      description: "Java-based hospital management system providing structured record keeping for patient admissions, appointment scheduling algorithms, doctor availability tracking, and medical billing records.",
      tags: ["Java", "OOP", "DBMS", "Software Architecture"],
      github: "https://github.com/nitydv/HospitalManagement",
      demo: null
    },
    {
      id: "user-service",
      title: "user-service",
      subtitle: "Identity & Authentication Microservice",
      featured: false,
      description: "High-performance backend microservice built with Java and Spring Boot, handling user registration, password encryption, session token generation, and role-based access control.",
      tags: ["Java", "Spring Boot", "Microservices", "Security"],
      github: "https://github.com/nitydv/user-service",
      demo: null
    },
    {
      id: "java-practice",
      title: "JavaPractice",
      subtitle: "DSA Solutions & Algorithm Repository",
      featured: false,
      description: "Comprehensive repository of core Data Structures & Algorithms solutions, LeetCode problem breakdowns, and optimized algorithm implementations written in clean, idiomatic Java.",
      tags: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
      github: "https://github.com/nitydv/JavaPractice",
      demo: null
    },
    {
      id: "typing-web-app",
      title: "TypingWebApp",
      subtitle: "Real-time Typing Speed & Accuracy Test",
      featured: false,
      description: "Interactive web application built with TypeScript featuring real-time Words Per Minute (WPM) calculation, keystroke accuracy tracking, time modes, and dynamic visual typing statistics.",
      tags: ["TypeScript", "HTML5/CSS3", "DOM API", "Frontend"],
      github: "https://github.com/nitydv/TypingWebApp",
      demo: null
    }
  ],

  leadership: [
    {
      title: "AWS Student Builder",
      organization: "Amazon Web Services (AWS)",
      badge: "Selected Jul 2026",
      period: "2026 — Present",
      description: "Engaged with the AWS Student Builder community to explore cloud fundamentals through hands-on labs and guided learning paths. Applied AWS cloud concepts to personal and academic projects.",
      highlights: ["Cloud Architecture", "AWS Builder Track", "Hands-on Labs"]
    },
    {
      title: "GitHub Campus Expert / Campus Ambassador",
      organization: "GitHub",
      badge: "Selected Jul 2026",
      period: "2026 — Present",
      description: "Represented GitHub on campus by organizing workshops and technical sessions promoting Git, version control, and open-source collaboration. Mentored peers on collaborative workflows.",
      highlights: ["Open Source Advocacy", "Git Workshops", "Community Building"]
    },
    {
      title: "Google Developer Groups (GDG) Organizer",
      organization: "Google Developer Groups",
      badge: "Selected Jul 2026",
      period: "2026 — Present",
      description: "Organized tech meetups and technical workshops on Google technologies, including cloud computing and modern web development. Coordinated event logistics and campus outreach.",
      highlights: ["Developer Meetups", "Google Cloud Seminars", "Campus Outreach"]
    },
    {
      title: "Microsoft Learn Student Ambassador (Gold)",
      organization: "Microsoft",
      badge: "Selected Jul 2025 — Gold Level",
      period: "2025 — Present",
      description: "Hosted technical sessions guiding students through Microsoft Learn modules covering cloud and software development fundamentals. Contributed to global peer mentorship.",
      highlights: ["Gold Ambassador Status", "Technical Mentorship", "Student Workshops"]
    },
    {
      title: "Cloud Tech Expert — GDSC, AIT",
      organization: "Google Developer Student Club, AIT Pune",
      badge: "Jul 2024 — Present",
      period: "Jul 2024 — Present",
      description: "Built hands-on Google Cloud Platform proficiency through cloud labs and challenges. Recognized as a Premium Milestone Swag recipient in Google Cloud Arcade Program.",
      highlights: ["Google Cloud Platform", "Arcade Program Winner", "Tech Mentoring"]
    }
  ],

  achievements: [
    {
      title: "Multi-Time Hackathon Winner",
      category: "Competitions",
      icon: "trophy",
      badge: "5+ Wins Overall",
      description: "Winner in Ideathon, Panorama, and Hide & Seek Technical Events, alongside securing top positions across 5+ hackathons for rapid prototyping and innovative software solutions."
    },
    {
      title: "Postman Student Expert Certification",
      category: "Certification",
      icon: "checkCircle",
      badge: "Certified",
      description: "Certified Postman Student Expert with verified skills in API requests, collections, environment variables, automated API testing, and documentation workflows."
    },
    {
      title: "Google Cloud Arcade Program Certificate",
      category: "Cloud Recognition",
      icon: "cloud",
      badge: "Premium Swag Recipient",
      description: "Achieved top milestone tier in the Google Cloud Arcade Program, completing advanced hands-on labs in DevOps, Kubernetes, IAM, and BigQuery."
    }
  ],

  campusAndVolunteering: [
    {
      role: "Designer & Management Head",
      organization: "Cultural Board, AIT Pune",
      details: "Led event planning, public relations, and promotional visual campaigns for major college festivals."
    },
    {
      role: "Video Editor",
      organization: "Nature Club, AIT Pune",
      details: "Created engaging video content and multimedia graphics for environmental awareness campaigns."
    },
    {
      role: "Community & Cybersecurity Volunteer",
      organization: "NSS & Volunteer Yatra (UNICEF)",
      details: "Participated in cybersecurity awareness drives and community outreach programs."
    }
  ]
};

if (typeof window !== "undefined") {
  window.portfolioContent = portfolioContent;
}
