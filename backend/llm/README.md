# LLM Module

This folder contains the logic for interacting with LLMs used in the project.

- `client.py` — wraps Hugging Face Inference API calls
- `prompts.py` — reusable prompt templates

The LLM access is currently implemented using Meta LLaMA 3 via Hugging Face.

## Testing the LLM
1. Copy .env.example to .env and add the token

2. Create a virtual environment and install dependencies:
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

3. Run the test script: python3 backend/llm/test_llm.py





## Example schema for the post request:

{
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Can you help me write a resume for a software engineer?"}
    ]
}


## Example schema for the generate_resume_endpoint

{
  "resume": {
    "name": "Sarah Chen",
    "phone": "+1 (555) 123-4567",
    "email": "sarah.chen@email.com",
    "is_us_citizen": true,
    "links": [
      {
        "type": "LinkedIn",
        "url": "https://linkedin.com/in/sarahchen"
      },
      {
        "type": "GitHub",
        "url": "https://github.com/sarahchen"
      },
      {
        "type": "Portfolio",
        "url": "https://sarahchen.dev"
      }
    ],
    "about_section": "Full-stack software engineer with 4 years of experience building scalable web applications. Passionate about clean code, system design, and mentoring junior developers.",
    "education": [
      {
        "school": "University of California, Berkeley",
        "major": "B.S. Computer Science",
        "gpa": "3.8",
        "activities": "ACM Chapter President, Women in CS Vice President",
        "start_year": "2016",
        "end_year": "2020"
      }
    ],
    "relevant_coursework": [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Machine Learning",
      "Software Engineering"
    ],
    "experience": [
      {
        "company": "TechCorp Inc.",
        "title": "Senior Software Engineer",
        "location": "San Francisco, CA",
        "description": "Led development of microservices architecture serving 2M+ daily active users. Reduced API response time by 40% through caching optimization. Mentored 3 junior engineers and conducted code reviews.",
        "start_date": "June 2022",
        "end_date": "Present"
      },
      {
        "company": "StartupXYZ",
        "title": "Software Engineer",
        "location": "Palo Alto, CA",
        "description": "Built RESTful APIs using Node.js and PostgreSQL. Implemented CI/CD pipelines reducing deployment time by 60%. Collaborated with product team to ship 15+ features.",
        "start_date": "August 2020",
        "end_date": "May 2022"
      },
      {
        "company": "Berkeley Robotics Lab",
        "title": "Software Engineering Intern",
        "location": "Berkeley, CA",
        "description": "Developed computer vision algorithms for autonomous navigation. Created data visualization dashboard using React and D3.js.",
        "start_date": "May 2019",
        "end_date": "August 2019"
      }
    ],
    "projects": [
      {
        "name": "AI Resume Optimizer",
        "description": "Full-stack web app using FastAPI, React, and OpenAI API to optimize resumes for ATS. Implements authentication, database persistence, and PDF generation. Deployed on AWS with Docker.",
        "link": "https://github.com/sarahchen/resume-optimizer",
        "start_date": "January 2024",
        "end_date": "Present"
      },
      {
        "name": "Distributed Task Scheduler",
        "description": "Built a distributed task scheduling system using Python, Redis, and Celery. Handles 10K+ tasks per minute with fault tolerance and automatic retries.",
        "link": "https://github.com/sarahchen/task-scheduler",
        "start_date": "September 2023",
        "end_date": "December 2023"
      }
    ],
    "skills": [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "Git",
      "REST APIs",
      "System Design",
      "Agile/Scrum"
    ],
    "certifications": [
      {
        "name": "AWS Certified Solutions Architect - Associate",
        "issuer": "Amazon Web Services",
        "date": "March 2023"
      },
      {
        "name": "Certified Kubernetes Application Developer (CKAD)",
        "issuer": "Cloud Native Computing Foundation",
        "date": "November 2022"
      }
    ],
    "awards": [
      {
        "name": "Hackathon Winner - Best AI Application",
        "issuer": "TechCorp Annual Hackathon",
        "date": "October 2023"
      },
      {
        "name": "Dean's List",
        "issuer": "UC Berkeley College of Engineering",
        "date": "2018-2020"
      }
    ]
  }
}



## Example schema for optimize resume endpoint


{
  "resume": {
    "name": "Sarah Chen",
    "phone": "+1 (555) 123-4567",
    "email": "sarah.chen@email.com",
    "is_us_citizen": true,
    "links": [
      {
        "type": "LinkedIn",
        "url": "https://linkedin.com/in/sarahchen"
      },
      {
        "type": "GitHub",
        "url": "https://github.com/sarahchen"
      },
      {
        "type": "Portfolio",
        "url": "https://sarahchen.dev"
      }
    ],
    "about_section": "Full-stack software engineer with 4 years of experience building scalable web applications. Passionate about clean code, system design, and mentoring junior developers.",
    "education": [
      {
        "school": "University of California, Berkeley",
        "major": "B.S. Computer Science",
        "gpa": "3.8",
        "activities": "ACM Chapter President, Women in CS Vice President",
        "start_year": "2016",
        "end_year": "2020"
      }
    ],
    "relevant_coursework": [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Machine Learning",
      "Software Engineering"
    ],
    "experience": [
      {
        "company": "TechCorp Inc.",
        "title": "Senior Software Engineer",
        "location": "San Francisco, CA",
        "description": "Led development of microservices architecture serving 2M+ daily active users. Reduced API response time by 40% through caching optimization. Mentored 3 junior engineers and conducted code reviews.",
        "start_date": "June 2022",
        "end_date": "Present"
      },
      {
        "company": "StartupXYZ",
        "title": "Software Engineer",
        "location": "Palo Alto, CA",
        "description": "Built RESTful APIs using Node.js and PostgreSQL. Implemented CI/CD pipelines reducing deployment time by 60%. Collaborated with product team to ship 15+ features.",
        "start_date": "August 2020",
        "end_date": "May 2022"
      },
      {
        "company": "Berkeley Robotics Lab",
        "title": "Software Engineering Intern",
        "location": "Berkeley, CA",
        "description": "Developed computer vision algorithms for autonomous navigation. Created data visualization dashboard using React and D3.js.",
        "start_date": "May 2019",
        "end_date": "August 2019"
      }
    ],
    "projects": [
      {
        "name": "AI Resume Optimizer",
        "description": "Full-stack web app using FastAPI, React, and OpenAI API to optimize resumes for ATS. Implements authentication, database persistence, and PDF generation. Deployed on AWS with Docker.",
        "link": "https://github.com/sarahchen/resume-optimizer",
        "start_date": "January 2024",
        "end_date": "Present"
      },
      {
        "name": "Distributed Task Scheduler",
        "description": "Built a distributed task scheduling system using Python, Redis, and Celery. Handles 10K+ tasks per minute with fault tolerance and automatic retries.",
        "link": "https://github.com/sarahchen/task-scheduler",
        "start_date": "September 2023",
        "end_date": "December 2023"
      }
    ],
    "skills": [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "Git",
      "REST APIs",
      "System Design",
      "Agile/Scrum"
    ],
    "certifications": [
      {
        "name": "AWS Certified Solutions Architect - Associate",
        "issuer": "Amazon Web Services",
        "date": "March 2023"
      },
      {
        "name": "Certified Kubernetes Application Developer (CKAD)",
        "issuer": "Cloud Native Computing Foundation",
        "date": "November 2022"
      }
    ],
    "awards": [
      {
        "name": "Hackathon Winner - Best AI Application",
        "issuer": "TechCorp Annual Hackathon",
        "date": "October 2023"
      },
      {
        "name": "Dean's List",
        "issuer": "UC Berkeley College of Engineering",
        "date": "2018-2020"
      }
    ]
  },
  "job_description": "We are hiring a Staff Backend Engineer to lead our platform team. Requirements: 5+ years of experience building distributed systems, expert-level Python and Go, deep knowledge of PostgreSQL and Redis, experience with Kubernetes and cloud infrastructure (AWS or GCP), proven track record of leading technical projects and mentoring engineers. Nice to have: experience with event-driven architecture, Kafka, gRPC, and observability tools (Datadog, Prometheus). You will own the design and implementation of our core platform services, drive technical decisions, and help scale our systems to support 10x growth."
}