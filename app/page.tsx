'use client'

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Clock,
  Hammer,
  HardHat,
  Home,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { ScrollLink } from "@/components/scroll-link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-amber-600" />
            <span className="text-xl font-bold tracking-tight">VIBHA HOMES</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <ScrollLink href="#home" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Home
            </ScrollLink>
            <ScrollLink href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">
              About
            </ScrollLink>
            <ScrollLink href="#services" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Services
            </ScrollLink>
            <ScrollLink href="#projects" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Projects
            </ScrollLink>
            <ScrollLink href="#testimonials" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Testimonials
            </ScrollLink>
            <ScrollLink href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
              Contact
            </ScrollLink>
          </nav>
          <div className="hidden md:block">
            <QuoteModal buttonClassName="bg-amber-600 hover:bg-amber-700" />
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-construction.svg"
              alt="Modern construction site"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Building Dreams, <span className="text-amber-400">Creating Homes</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                VIBHA HOMES delivers exceptional construction services with precision, quality, and innovation. Your
                vision, our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore Our Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-amber-400 border-amber-400 hover:bg-amber-600 hover:text-white hover:border-amber-600"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-amber-50 py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  We pride ourselves on delivering exceptional quality in every project, with attention to detail that
                  exceeds expectations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">
                  We understand the importance of timelines and ensure your project is completed on schedule without
                  compromising quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <HardHat className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our team of skilled professionals brings years of experience and expertise to every construction
                  project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/team-construction.svg"
                  alt="VIBHA HOMES team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-sm">
                  About VIBHA HOMES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Building Excellence Since 2010</h2>
                <p className="text-gray-600">
                  VIBHA HOMES has been a trusted name in the construction industry for over a decade. We specialize in
                  residential and commercial construction, delivering projects that stand the test of time.
                </p>
                <p className="text-gray-600">
                  Our mission is to transform your vision into reality with precision, quality, and innovation. We
                  believe in building not just structures, but relationships based on trust and excellence.
                </p>
                <ul className="space-y-2">
                  {[
                    "Premium quality materials",
                    "Experienced professionals",
                    "Timely project completion",
                    "Transparent communication",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-sm mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-gray-600">
                We offer a wide range of construction services tailored to meet your specific needs and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Home className="h-10 w-10 text-amber-600" />,
                  title: "Residential Construction",
                  description:
                    "Build your dream home with our expert residential construction services, from concept to completion.",
                },
                {
                  icon: <Building2 className="h-10 w-10 text-amber-600" />,
                  title: "Commercial Construction",
                  description:
                    "Create functional and impressive commercial spaces designed to enhance your business operations.",
                },
                {
                  icon: <Hammer className="h-10 w-10 text-amber-600" />,
                  title: "Renovations & Remodeling",
                  description:
                    "Transform your existing space with our renovation and remodeling services for a fresh new look.",
                },
                {
                  icon: <MapPin className="h-10 w-10 text-amber-600" />,
                  title: "Interior Design",
                  description:
                    "Enhance your space with our interior design services that blend functionality with aesthetic appeal.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-amber-600" />,
                  title: "Project Management",
                  description: "Ensure your project runs smoothly with our comprehensive project management services.",
                },
                {
                  icon: <Award className="h-10 w-10 text-amber-600" />,
                  title: "Custom Solutions",
                  description:
                    "Get tailored construction solutions designed specifically to meet your unique requirements.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="#"
                    className="text-amber-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-sm mb-4">
                Our Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-gray-600">
                Explore our showcase of completed projects that demonstrate our commitment to quality and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/project-luxury-villa.svg",
                  title: "Luxury Villa",
                  category: "Residential",
                },
                {
                  image: "/project-office-complex.svg",
                  title: "Corporate Office Complex",
                  category: "Commercial",
                },
                {
                  image: "/project-apartment.svg",
                  title: "Modern Apartment Building",
                  category: "Residential",
                },
                {
                  image: "/project-mall.svg",
                  title: "Shopping Mall",
                  category: "Commercial",
                },
                {
                  image: "/project-eco-home.svg",
                  title: "Eco-Friendly Home",
                  category: "Residential",
                },
                {
                  image: "/project-hotel-renovation.svg",
                  title: "Hotel Renovation",
                  category: "Renovation",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-amber-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <Button variant="link" className="text-white p-0 h-auto mt-2 w-fit">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                className="bg-amber-600 hover:bg-amber-700"
                onClick={() => {
                  // This button is already in the projects section, so we'll just scroll to the top of the section
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-sm mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
              <p className="text-gray-600">
                Don't just take our word for it. Hear what our satisfied clients have to say about their experience with
                VIBHA HOMES.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Homeowner",
                  quote:
                    "VIBHA HOMES transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. We couldn't be happier with our new home!",
                },
                {
                  name: "Priya Sharma",
                  role: "Business Owner",
                  quote:
                    "The team at VIBHA HOMES delivered our commercial project on time and within budget. Their professionalism and expertise made the entire process smooth and stress-free.",
                },
                {
                  name: "Amit Patel",
                  role: "Property Developer",
                  quote:
                    "I've worked with many construction companies, but VIBHA HOMES stands out for their reliability and quality of work. They're now our go-to partner for all construction projects.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="bg-amber-100 h-12 w-12 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-amber-600 text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "12+", label: "Years of Experience" },
                { value: "50+", label: "Team Members" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-amber-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Construction Project?
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Contact us today for a free consultation and quote. Let's bring your vision to life with VIBHA
                    HOMES.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <QuoteModal
                      buttonText="Get a Free Quote"
                      buttonSize="lg"
                      buttonClassName="bg-amber-600 hover:bg-amber-700"
                    />
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-white hover:bg-white/10"
                      onClick={() => {
                        const aboutSection = document.getElementById('about');
                        if (aboutSection) {
                          aboutSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] lg:h-auto">
                  <Image
                    src="/construction-process.svg"
                    alt="Construction site"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-sm mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch With Us</h2>
              <p className="text-gray-600">
                Have questions or ready to start your project? Reach out to us and our team will get back to you
                shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="interior">Interior Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Our Location</h4>
                        <p className="text-gray-600">123 Construction Avenue, City Name, State 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Phone Number</h4>
                        <p className="text-gray-600">+1 (123) 456-7890</p>
                        <p className="text-gray-600">+1 (987) 654-3210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Email Address</h4>
                        <p className="text-gray-600">info@vibhahomes.com</p>
                        <p className="text-gray-600">support@vibhahomes.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="h-8 w-8 text-amber-500" />
                <span className="text-2xl font-bold">VIBHA HOMES</span>
              </div>
              <p className="text-gray-400 mb-6">
                Building dreams and creating homes with quality, precision, and innovation since 2010.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Renovations & Remodeling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to receive updates and news about our latest projects.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VIBHA HOMES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
