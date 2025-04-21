import React, { useEffect, useRef } from "react";
import { Calendar, Briefcase, Award, GraduationCap, Image, Share2, PenTool } from "lucide-react";

const ExperienceItem = ({ experience, index, isLast }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-in");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className="opacity-0 relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line - always show for all items except the last one */}
      {!isLast && (
        <div className="absolute left-[15px] top-2 bottom-0 w-0.5 bg-portfolio-purple/30"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-[30px] h-[30px] rounded-full bg-portfolio-dark border-2 border-portfolio-purple flex items-center justify-center">
        {experience.type === "work" ? (
          <Briefcase size={14} className="text-portfolio-purple" />
        ) : (
          <Calendar size={14} className="text-portfolio-purple" />
        )}
      </div>
      
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white">{experience.role}</h3>
          <div className="text-sm text-portfolio-purple">{experience.duration}</div>
        </div>
        
        <div className="text-gray-300 mb-2">{experience.company}</div>
        
        <p className="text-gray-400">{experience.description}</p>
      </div>
    </div>
  );
};

const CertificateItem = ({ certificate, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-in");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className="opacity-0 glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-portfolio-purple/20"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-portfolio-purple to-portfolio-blue p-3 rounded-lg">
          <Award size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
          <p className="text-sm text-portfolio-purple">{certificate.issuer}</p>
        </div>
      </div>
      
      <p className="text-gray-400">{certificate.description}</p>
    </div>
  );
};

const FreelanceSkillItem = ({ skill, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-in");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className="opacity-0 glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-portfolio-purple/20"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-portfolio-purple to-portfolio-blue p-3 rounded-lg">
          {skill.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{skill.title}</h3>
          <p className="text-sm text-portfolio-purple">{skill.platforms}</p>
        </div>
      </div>
      
      <p className="text-gray-400">{skill.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.tools.map((tool, i) => (
          <span 
            key={i}
            className="text-xs bg-gradient-to-r from-portfolio-purple/20 to-portfolio-blue/20 text-gray-300 px-3 py-1 rounded-full border border-white/5"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = ({ title, experiences, icon: Icon }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-portfolio-purple/20 p-3 rounded-xl">
          <Icon className="text-portfolio-purple" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceItem 
            key={index} 
            experience={experience} 
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const internExperiences = [
    {
      role: "AI/ML Intern",
      company: "AI and ML InternPe",
      duration: "2023",
      description: "Worked on AI and ML projects, implementing deep learning models for real-world applications.",
      type: "work",
    },
    {
      role: "AIML Intern",
      company: "Winvinaya Infosystem",
      duration: "2024",
      description: "Developed machine learning solutions for business analytics and automated data processing systems.",
      type: "work",
    },
  ];

  const hackathonExperiences = [
    {
      role: "Participant",
      company: "IIT Shaastra's AIML Challenge 1 and 2",
      duration: "2023 and 2024",
      description: "Competed in AI/ML hackathon focused on innovative solutions for real-world problems.",
      type: "event",
    },
    {
      role: "Participant",
      company: "SRMIST Datathon",
      duration: "2022",
      description: "Participated in data science competition focused on real-world problem-solving.",
      type: "event",
    },
    {
      role: "Participant",
      company: "Intel oneAPI Hackathon",
      duration: "2024",
      description: "Built optimized AI solutions using Intel's oneAPI toolkit.",
      type: "event",
    },
    {
      role: "Participant",
      company: "IBM Z Datathon",
      duration: "2024",
      description: "Worked on large-scale data analysis and machine learning models using IBM's technology stack.",
      type: "event",
    },
    {
      role: "Participant",
      company: "Industrial AI Hackathon - IIT Madras",
      duration: "2025",
      description: "Developed innovative AI solutions for industrial applications.",
      type: "event",
    },
  
  ];

  const certificates = [
    {
      title: "Generative AI Course",
      issuer: "GUVI",
      description: "Comprehensive course covering the fundamentals and advanced concepts of Generative AI, including GANs, VAEs, and transformer-based models.",
    },
    {
      title: "Introduction to DeepLearning",
      issuer: "Infosys SpringBoard",
      description: "In-depth training on neural networks, deep learning architectures, and practical applications in computer vision and natural language processing.",
    },
    {
      title: "Artificial Intelligence Bootcamp",
      issuer: "NOVITech R&D",
      description: "Intensive bootcamp focusing on AI fundamentals, machine learning algorithms, and real-world AI applications.",
    },
    {
      title: "Power BI Workshop",
      issuer: "Tech Tip",
      description: "Hands-on workshop covering data visualization, dashboard creation, and business intelligence using Power BI.",
    }
  ];

  const freelanceSkills = [
    {
      title: "Social Media Handling",
      platforms: "Instagram, Facebook",
      description: "Professional social media management for Instagram and Facebook, including content strategy, engagement optimization, analytics tracking, and Meta Ads management.",
      tools: ["Content Strategy", "Analytics", "Community Management", "Meta Ads", "Scheduling"],
      icon: <Share2 size={24} className="text-white" />
    },
    {
      title: "Poster Making",
      platforms: "Canva, Adobe Photoshop",
      description: "Creative design of promotional materials and event posters using Canva and Photoshop, focusing on visual impact and brand consistency.",
      tools: ["Canva", "Adobe Photoshop", "Typography", "Layout Design"],
      icon: <PenTool size={24} className="text-white" />
    },
    {
      title: "Photo Editing",
      platforms: "Adobe Photoshop",
      description: "Professional photo editing and retouching services using Photoshop, including color correction, composition enhancement, and creative effects.",
      tools: ["Color Correction", "Retouching", "Composition", "Filters"],
      icon: <Image size={24} className="text-white" />
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={sectionRef} className="section-title text-center opacity-0 mb-16">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <ExperienceSection 
            title="Internship Experience" 
            experiences={internExperiences} 
            icon={Briefcase}
          />
          <ExperienceSection 
            title="Hackathon Experience" 
            experiences={hackathonExperiences} 
            icon={Calendar}
          />
          
          {/* Certificates and Workshops Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-portfolio-purple/20 p-3 rounded-xl">
                <GraduationCap className="text-portfolio-purple" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certificates & Workshops</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <CertificateItem 
                  key={index} 
                  certificate={certificate} 
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Freelancing Skills Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-portfolio-purple/20 p-3 rounded-xl">
                <PenTool className="text-portfolio-purple" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Freelancing Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freelanceSkills.map((skill, index) => (
                <FreelanceSkillItem 
                  key={index} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
