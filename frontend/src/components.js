import React, { useState } from 'react';

// Header Component - Exact same structure as Sea Harvest
export const Header = () => {
  return (
    <div className="border-2 border-black bg-white">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center p-2 border-b border-black">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="border border-black p-2 w-16 h-16 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg" 
              alt="Storytelling Logo" 
              className="w-full h-full object-contain grayscale"
            />
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center flex-1">
          <div className="text-xs font-serif mb-1">THURSDAY, DECEMBER 19, 2024</div>
          <h1 className="text-4xl font-bold font-serif tracking-wider">STORYTELLING WEB DEVELOPMENT</h1>
          <div className="text-sm font-serif tracking-widest">CRAFTING CODE NARRATIVES</div>
        </div>

        {/* Side Info */}
        <div className="text-right">
          <div className="text-xs font-serif font-bold mb-1">PRIMARY STACK</div>
          <div className="text-xs font-serif">ELIXIR</div>
          <div className="text-xs font-serif font-bold mt-2 mb-1">SECONDARY STACK</div>
          <div className="text-xs font-serif">RUBY</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center border-b border-black">
        <nav className="flex divide-x divide-black">
          <a href="#about" className="px-8 py-2 font-serif font-bold hover:bg-gray-100 text-center">ABOUT</a>
          <a href="#projects" className="px-8 py-2 font-serif font-bold hover:bg-gray-100 text-center">PROJECTS</a>
          <a href="#blog" className="px-8 py-2 font-serif font-bold hover:bg-gray-100 text-center">BLOG</a>
          <a href="#contact" className="px-8 py-2 font-serif font-bold hover:bg-gray-100 text-center">CONTACT</a>
        </nav>
      </div>
    </div>
  );
};

// Hero Section - Code Story of the Day
export const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      {/* Main Story */}
      <div className="lg:col-span-2 border border-black p-4">
        <h2 className="text-3xl font-bold font-serif mb-2">CODE STORY OF THE DAY</h2>
        <div className="text-sm font-serif mb-4">FROM CONCEPT TO DEPLOYMENT</div>
        
        <div className="mb-4">
          <img 
            src="https://images.pexels.com/photos/7334191/pexels-photo-7334191.jpeg" 
            alt="Code Story Illustration" 
            className="w-64 h-32 object-cover grayscale mx-auto"
          />
        </div>

        <p className="font-serif text-sm leading-relaxed mb-4">
          The latest narrative has unfolded effortlessly: fresh code perfect for launching as the web or as part of a 
          microservice recipe. Here's a seasonal favorite from your friendly neighborhood developer.
        </p>

        <div className="text-right">
          <a href="#projects" className="text-xs font-serif underline">Read more on page 3</a>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Find Me Box */}
        <div className="border-2 border-dashed border-black p-4">
          <h3 className="font-bold font-serif text-center mb-2">CONNECT WITH ME</h3>
          <div className="text-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1586387239862-30efb44f0a21" 
              alt="Developer Contact" 
              className="w-20 h-20 mx-auto object-cover grayscale rounded-full"
            />
          </div>
          <div className="text-xs font-serif space-y-1">
            <div className="font-bold">PRIMARY FOCUS</div>
            <div>ELIXIR, PHOENIX, OTP</div>
            <div>DISTRIBUTED SYSTEMS</div>
            <div className="font-bold mt-2">AVAILABILITY</div>
            <div>MON-FRI 9:00AM-6:00PM</div>
            <div>WEEKENDS: PROJECTS ONLY</div>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="border-2 border-dashed border-black p-4">
          <div className="text-center mb-2">
            <img 
              src="https://images.pexels.com/photos/32221090/pexels-photo-32221090.jpeg" 
              alt="Get in Touch" 
              className="w-16 h-16 mx-auto object-cover grayscale"
            />
          </div>
          <h3 className="font-bold font-serif text-center text-lg">GET IN TOUCH</h3>
          <div className="text-xs font-serif text-center space-y-1 mt-2">
            <div>EMAIL: hello@storytellingdev.com</div>
            <div>LINKEDIN: /in/storytellingdev</div>
            <div>GITHUB: @storytellingdev</div>
            <div className="font-bold">CLICK HERE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Three Column Section - Services
export const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      {/* Elixir Development */}
      <div className="border border-black p-4">
        <h3 className="text-xl font-bold font-serif mb-2">ELIXIR MASTERY</h3>
        <div className="text-sm font-serif mb-4">BUILDING RESILIENT SYSTEMS</div>
        
        <div className="mb-4">
          <img 
            src="https://images.pexels.com/photos/32297057/pexels-photo-32297057.jpeg" 
            alt="Elixir Development" 
            className="w-full h-32 object-cover grayscale"
          />
        </div>

        <p className="font-serif text-xs leading-relaxed mb-4">
          The Elixir language story begins in the pursuit of fault-tolerant, distributed systems. 
          For generations of developers, my love of the Actor model and functional programming has endured, 
          following us to Phoenix applications where we've specialized in crafting resilient, 
          concurrent applications. Following our nation's capital of OTP supervision trees.
        </p>

        <div className="text-right">
          <a href="#projects" className="text-xs font-serif underline">Read more on page 7</a>
        </div>
      </div>

      {/* Ruby Craftsmanship */}
      <div className="border border-black p-4">
        <h3 className="text-xl font-bold font-serif mb-2">RUBY CRAFTSMANSHIP</h3>
        <div className="text-sm font-serif mb-4">ELEGANT CODE DESIGN</div>
        
        <div className="mb-4">
          <img 
            src="https://images.unsplash.com/photo-1559311648-874c28a0b7c1" 
            alt="Ruby Development" 
            className="w-full h-32 object-cover grayscale"
          />
        </div>

        <p className="font-serif text-xs leading-relaxed mb-4">
          Some call it about programmer-to-language at the Matz and 
          Basecamp mountains at Cornerstone page out of the capital 
          to feel the sun on their laptops.
        </p>

        <div className="text-right">
          <a href="#blog" className="text-xs font-serif underline">Read more on page 11</a>
        </div>
      </div>

      {/* The Developer Story */}
      <div className="border border-black p-4">
        <h3 className="text-xl font-bold font-serif mb-2">THE STORYTELLING APPROACH</h3>
        <div className="text-sm font-serif mb-4">A TALE OF CODE AND CRAFT</div>
        
        <div className="mb-4 border border-black p-2">
          <img 
            src="https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg" 
            alt="Developer Story" 
            className="w-full h-24 object-cover grayscale"
          />
        </div>

        <p className="font-serif text-xs leading-relaxed mb-4">
          The storytelling development approach begins in the understanding that every application 
          tells a story - from user journeys to architectural decisions. 
          Following us to Canberra where we settled in the 1970s. For over 40 years now, we have dedicated ourselves to 
          bringing the finest and freshest narrative architecture to our nation's capital.
        </p>

        <div className="text-right">
          <a href="#about" className="text-xs font-serif underline">Read more on page 2</a>
        </div>
      </div>
    </div>
  );
};

// About Section
export const AboutSection = () => {
  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      {/* Main About Content */}
      <div className="lg:col-span-2 border border-black p-4">
        <h2 className="text-3xl font-bold font-serif mb-2">YOUR STORYTELLING DEVELOPER</h2>
        <div className="text-sm font-serif mb-4">CRAFTING DIGITAL NARRATIVES FOR TEAMS</div>
        
        <div className="mb-4">
          <img 
            src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg" 
            alt="Developer Workspace" 
            className="w-full h-48 object-cover grayscale"
          />
        </div>

        <div className="space-y-4 font-serif text-sm leading-relaxed">
          <p>
            Our development journey has been serving teams and startups for 
            over four decades of passion.
          </p>

          <p>
            The Storytelling Web Development story begins in the early 2000s on a small, 
            picturesque coding island called GitHub in 
            Open Source. For generations since, our love of the web and taste for elegant code has endured, following us 
            to teams where we settled in the early 2010s. For over 15 years now, we have dedicated ourselves to 
            bringing the finest and most robust applications to our clients' digital presence.
          </p>

          <p>
            We supply comprehensive development services - including Phoenix LiveView, Ruby on Rails -  
            and sell to teams via permanent roles at the top companies and freelance contracts.
          </p>

          <p>
            Our knowledge of systems spans decades, as do our relationships with some of the best teams in  
            the industry.
          </p>

          <div className="mt-6">
            <h4 className="font-bold mb-2">We offer a wide variety of expertise at the very best quality, including:</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Elixir and Phoenix Framework</li>
              <li>Ruby on Rails Applications</li>
              <li>Distributed Systems Architecture</li>
              <li>Real-time Applications with LiveView</li>
              <li>API Design and Documentation</li>
              <li>Microservices and Event-driven Systems</li>
              <li>Database Design and Optimization</li>
              <li>DevOps and Deployment Strategies</li>
              <li>Team Leadership and Mentoring</li>
              <li>Code Reviews and Technical Guidance</li>
              <li>Performance Optimization</li>
              <li>A huge selection of technical solutions</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <h5 className="font-bold font-serif text-sm mb-2">Workspace Story</h5>
            <img 
              src="https://images.pexels.com/photos/32297057/pexels-photo-32297057.jpeg" 
              alt="Development Environment" 
              className="w-full h-32 object-cover grayscale"
            />
          </div>
          <div>
            <h5 className="font-bold font-serif text-sm mb-2">Crafting Story</h5>
            <img 
              src="https://images.unsplash.com/photo-1586387239862-30efb44f0a21" 
              alt="Code Crafting" 
              className="w-full h-32 object-cover grayscale"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Get in Touch */}
        <div className="border-2 border-dashed border-black p-4">
          <div className="text-center mb-2">
            <img 
              src="https://images.pexels.com/photos/32221090/pexels-photo-32221090.jpeg" 
              alt="Contact Book" 
              className="w-16 h-16 mx-auto object-cover grayscale"
            />
          </div>
          <h3 className="font-bold font-serif text-center text-lg">GET IN TOUCH</h3>
          <div className="text-xs font-serif text-center space-y-1 mt-2">
            <div>CONSULTING: +1 (555) 123-4567</div>
            <div>PROJECTS: +1 (555) 987-6543</div>
            <div>EMAIL US: hello@storytellingdev.com</div>
            <div className="font-bold">CLICK HERE</div>
          </div>
        </div>

        {/* Find Me */}
        <div className="border-2 border-dashed border-black p-4">
          <h3 className="font-bold font-serif text-center mb-2">FIND ME</h3>
          <div className="text-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1559311648-874c28a0b7c1" 
              alt="Location" 
              className="w-20 h-20 mx-auto object-cover grayscale rounded-full"
            />
          </div>
          <div className="text-xs font-serif space-y-1">
            <div className="font-bold">REMOTE WORLDWIDE</div>
            <div>AVAILABLE FOR COLLABORATION</div>
            <div>TIME ZONE: UTC-5 TO UTC+2</div>
            <div className="font-bold mt-2">OPEN FOR PROJECTS</div>
            <div>FULL-TIME & CONTRACT WORK</div>
            <div>TEAM AUGMENTATION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio/Projects Section
export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "DISTRIBUTED CHAT SYSTEM",
      tech: "ELIXIR • PHOENIX • LIVEVIEW",
      description: "Real-time messaging platform handling 100k+ concurrent users with fault-tolerant architecture.",
      story: "This project began as a simple chat application but evolved into a complex distributed system..."
    },
    {
      title: "E-COMMERCE PLATFORM",
      tech: "RUBY • RAILS • POSTGRESQL",
      description: "Full-featured online marketplace with payment processing and inventory management.",
      story: "Starting with a Rails foundation, this platform grew to serve thousands of merchants..."
    },
    {
      title: "MICROSERVICES ARCHITECTURE",
      tech: "ELIXIR • DOCKER • KUBERNETES",
      description: "Event-driven microservices system for financial data processing.",
      story: "The challenge was building a system that could process millions of financial transactions..."
    }
  ];

  return (
    <div id="projects" className="border border-black p-4 m-4">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">FEATURED PROJECT STORIES</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`border border-black p-4 cursor-pointer transition-all ${
              activeProject === index ? 'bg-gray-100' : 'bg-white'
            }`}
            onClick={() => setActiveProject(index)}
          >
            <h3 className="font-bold font-serif text-lg mb-2">{project.title}</h3>
            <div className="text-xs font-serif text-gray-600 mb-2">{project.tech}</div>
            <p className="font-serif text-sm leading-relaxed">{project.description}</p>
            {activeProject === index && (
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="font-serif text-xs leading-relaxed italic">{project.story}</p>
                <div className="mt-2">
                  <a href="#" className="text-xs font-serif underline">View Project Details →</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Blog Section
export const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Art of Elixir Pattern Matching",
      date: "December 15, 2024",
      excerpt: "Pattern matching in Elixir is more than syntax - it's a way of thinking about data flow and system design.",
      readTime: "5 min read"
    },
    {
      title: "Ruby Metaprogramming: A Developer's Tale",
      date: "December 10, 2024", 
      excerpt: "How Ruby's dynamic nature allows us to write code that writes code, creating elegant solutions.",
      readTime: "8 min read"
    },
    {
      title: "Building Fault-Tolerant Systems",
      date: "December 5, 2024",
      excerpt: "Lessons learned from implementing OTP supervision trees in production environments.",
      readTime: "12 min read"
    }
  ];

  return (
    <div id="blog" className="border border-black p-4 m-4">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">DEVELOPMENT STORIES & INSIGHTS</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="border border-black p-4">
            <div className="text-xs font-serif text-gray-600 mb-2">{post.date} • {post.readTime}</div>
            <h3 className="font-bold font-serif text-lg mb-2">{post.title}</h3>
            <p className="font-serif text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <div className="text-right">
              <a href="#" className="text-xs font-serif underline">Continue Reading →</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <a href="#" className="border border-black px-6 py-2 font-serif font-bold hover:bg-gray-100 inline-block">
          VIEW ALL STORIES
        </a>
      </div>
    </div>
  );
};

// Contact Section
export const ContactSection = () => {
  return (
    <div id="contact" className="border border-black p-4 m-4">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">LET'S CRAFT YOUR NEXT STORY</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="border border-black p-4">
          <h3 className="font-bold font-serif text-xl mb-4">START A CONVERSATION</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-serif text-sm font-bold mb-2">PROJECT TYPE</label>
              <select className="w-full border border-black p-2 font-serif">
                <option>Elixir Development</option>
                <option>Ruby on Rails</option>
                <option>System Architecture</option>
                <option>Team Consultation</option>
                <option>Code Review</option>
              </select>
            </div>
            <div>
              <label className="block font-serif text-sm font-bold mb-2">YOUR NAME</label>
              <input type="text" className="w-full border border-black p-2 font-serif" />
            </div>
            <div>
              <label className="block font-serif text-sm font-bold mb-2">EMAIL</label>
              <input type="email" className="w-full border border-black p-2 font-serif" />
            </div>
            <div>
              <label className="block font-serif text-sm font-bold mb-2">PROJECT STORY</label>
              <textarea rows="4" className="w-full border border-black p-2 font-serif" 
                placeholder="Tell me about your project vision, challenges, and goals..."></textarea>
            </div>
            <button type="submit" className="border-2 border-black px-6 py-2 font-serif font-bold hover:bg-gray-100">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="border border-black p-4">
            <h3 className="font-bold font-serif text-xl mb-4">DIRECT CONTACT</h3>
            <div className="space-y-2 font-serif text-sm">
              <div><strong>EMAIL:</strong> hello@storytellingdev.com</div>
              <div><strong>LINKEDIN:</strong> /in/storytellingdev</div>
              <div><strong>GITHUB:</strong> @storytellingdev</div>
              <div><strong>TIMEZONE:</strong> UTC-5 (EST)</div>
            </div>
          </div>

          <div className="border border-black p-4">
            <h3 className="font-bold font-serif text-xl mb-4">AVAILABILITY</h3>
            <div className="space-y-2 font-serif text-sm">
              <div><strong>FULL-TIME ROLES:</strong> Open to opportunities</div>
              <div><strong>CONTRACT WORK:</strong> Available for projects</div>
              <div><strong>CONSULTING:</strong> 1-2 week availability</div>
              <div><strong>RESPONSE TIME:</strong> Within 24 hours</div>
            </div>
          </div>

          <div className="border border-black p-4">
            <h3 className="font-bold font-serif text-xl mb-4">EXPERTISE AREAS</h3>
            <div className="space-y-1 font-serif text-sm">
              <div>• Elixir/Phoenix Development</div>
              <div>• Ruby on Rails Applications</div>
              <div>• Distributed Systems Design</div>
              <div>• Team Leadership & Mentoring</div>
              <div>• Code Architecture & Reviews</div>
              <div>• Performance Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer
export const Footer = () => {
  return (
    <div className="border-t-2 border-black bg-white p-4">
      <div className="text-center font-serif text-xs">
        ©2024 STORYTELLING WEB DEVELOPMENT • CRAFTING CODE NARRATIVES
      </div>
    </div>
  );
};
