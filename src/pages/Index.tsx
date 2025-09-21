import React, { useState, useEffect } from 'react';
import { Car, Star, Phone, Mail, MapPin, CheckCircle, Droplets, Users, Sparkles, Menu, X, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-car-wash.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // WhatsApp contact function
  const contactWhatsApp = (message: string = '') => {
    const phoneNumber = '919916877128';
    const defaultMessage = 'Hi Dr. ScrubBoss! I\'m interested in your car wash services.';
    const finalMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Subscription plans data
  const subscriptionPlans = [
    {
      carType: 'Hatchback',
      basicPrice: '₹999',
      basicPeriod: 'month',
      basicServices: '2 Full Wash + 1 Wax',
      premiumPrice: '₹2,499',
      premiumPeriod: '3 months',
      premiumServices: '6 Full Wash + 3 Wax + 1 Engine',
      icon: '🚗'
    },
    {
      carType: 'Sedan',
      basicPrice: '₹1,499',
      basicPeriod: 'month',
      basicServices: '2 Full Wash + 1 Wax',
      premiumPrice: '₹3,499',
      premiumPeriod: '3 months',
      premiumServices: '6 Full Wash + 3 Wax + 1 Engine',
      icon: '🚙'
    },
    {
      carType: 'SUV/MUV',
      basicPrice: '₹1,999',
      basicPeriod: 'month',
      basicServices: '2 Full Wash + 1 Wax',
      premiumPrice: '₹4,499',
      premiumPeriod: '3 months',
      premiumServices: '6 Full Wash + 3 Wax + 1 Engine',
      icon: '🚐'
    },
    {
      carType: 'Luxury',
      basicPrice: '₹2,999',
      basicPeriod: 'month',
      basicServices: '2 Full Wash + 1 Wax + Leather Care',
      premiumPrice: '₹6,999',
      premiumPeriod: '3 months',
      premiumServices: '6 Full Wash + 3 Wax + 2 Leather + Engine',
      icon: '🏎️'
    },
    {
      carType: 'Electric Cars',
      basicPrice: '₹1,299',
      basicPeriod: 'month',
      basicServices: '2 Full Wash + Eco Products',
      premiumPrice: '₹3,299',
      premiumPeriod: '3 months',
      premiumServices: '6 Full Wash + 3 Wax + Engine Safe for EV',
      icon: '⚡'
    }
  ];

  // Individual services data
  const individualServices = [
    {
      name: 'Basic Wash',
      description: 'Exterior wash, tire shine, window cleaning',
      price: '₹299',
      icon: <Car className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'Premium Wash',
      description: 'Clay bar treatment and sealant',
      price: '₹599',
      icon: <Sparkles className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'Interior Cleaning',
      description: 'Vacuuming, surface cleaning, air freshener',
      price: '₹399',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'Detailing',
      description: 'Deep cleaning of interior, stain removal',
      price: '₹899',
      icon: <Star className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'Waxing',
      description: 'Protective wax for enhanced shine',
      price: '₹499',
      icon: <Droplets className="w-8 h-8 text-blue-500" />
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Whitefield, Bangalore',
      text: 'Dr. ScrubBoss has transformed how I care for my car. The convenience is unmatched, and my car has never looked better!'
    },
    {
      name: 'Priya Sharma',
      location: 'Electronic City, Bangalore',
      text: 'Excellent service! They come right to my doorstep and the quality is outstanding. Highly recommend their premium package.'
    },
    {
      name: 'Amit Patel',
      location: 'Koramangala, Bangalore',
      text: 'Professional team, eco-friendly products, and great customer support. My luxury car is always spotless!'
    }
  ];

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-gray-900">Dr. ScrubBoss</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${activeSection === 'home' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('subscriptions')}
                className={`font-medium transition-colors ${activeSection === 'subscriptions' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
              >
                Subscriptions
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-colors ${activeSection === 'services' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${activeSection === 'contact' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-4 py-2 space-y-1">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('subscriptions')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                >
                  Subscriptions
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Eco-Friendly Car Care at Your
            <span className="text-gradient-luxury block mt-2">Doorstep</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Dr. ScrubBoss brings professional car washing and detailing to you, with a 
            focus on sustainability and convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('subscriptions')}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              View Subscription Plans
            </button>
            <button 
              onClick={() => contactWhatsApp('Hi! I want to know more about Dr. ScrubBoss services.')}
              className="btn-whatsapp text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. ScrubBoss Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dr. ScrubBoss?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate in car care convenience with our premium mobile services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Convenience</h3>
              <p className="text-gray-600">
                Schedule washes at your preferred time and location. No need to drive anywhere!
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                Experience meticulous detailing with premium products and trained technicians.
              </p>
            </div>

            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                We use water-saving techniques and biodegradable solutions for a cleaner planet.
              </p>
            </div>
          </div>

          {/* Value Props */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wash at Customer Location</h4>
                <p className="text-gray-600">Our mobile units come directly to your home or office.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Subscription Service</h4>
                <p className="text-gray-600">Regular care plans that keep your vehicle spotless year-round.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">World Class Customer Support</h4>
                <p className="text-gray-600">24/7 support team ready to assist with any questions or concerns.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Full Refund Guarantee</h4>
                <p className="text-gray-600">Not satisfied? Get your money back, no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="subscriptions" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Subscription plans tailored for every vehicle type
            </p>
          </div>

          <div className="grid gap-6">
            {subscriptionPlans.map((plan) => (
              <div key={plan.carType} className="card-elevated">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="text-4xl">{plan.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{plan.carType}</h3>
                      <p className="text-gray-600">Professional care for your vehicle</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">
                    {/* Basic Plan */}
                    <div className="bg-gray-50 rounded-lg p-4 min-w-[280px]">
                      <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-gray-900">{plan.basicPrice}</div>
                        <div className="text-sm text-gray-600">per {plan.basicPeriod}</div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3 text-center">{plan.basicServices}</div>
                      <button 
                        onClick={() => contactWhatsApp(`Hi! I'm interested in the ${plan.carType} Basic Plan (${plan.basicPrice}/${plan.basicPeriod}). Please provide more details.`)}
                        className="btn-outline w-full text-sm"
                      >
                        Choose Basic
                      </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="card-luxury min-w-[280px] relative">
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                        POPULAR
                      </div>
                      <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-gray-900">{plan.premiumPrice}</div>
                        <div className="text-sm text-gray-600">per {plan.premiumPeriod}</div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3 text-center">{plan.premiumServices}</div>
                      <button 
                        onClick={() => contactWhatsApp(`Hi! I'm interested in the ${plan.carType} Premium Plan (${plan.premiumPrice}/${plan.premiumPeriod}). Please provide more details.`)}
                        className="btn-luxury w-full text-sm"
                      >
                        Choose Premium
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual Services
            </h2>
            <p className="text-xl text-gray-600">
              Select from our range of individual car care services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service) => (
              <div key={service.name} className="card-service">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-lg font-bold text-blue-500">{service.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <button 
                      onClick={() => contactWhatsApp(`Hi! I'm interested in the ${service.name} service (${service.price}). Please provide more details.`)}
                      className="btn-outline w-full text-sm"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Need a custom package or have specific requirements?</p>
            <button 
              onClick={() => contactWhatsApp('Hi! I need a custom car wash package. Please help me create one.')}
              className="btn-primary"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our satisfied customers say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elevated">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Dr. ScrubBoss for any inquiries or assistance. 
              We're here to help you keep your vehicle in top condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:contact@drscrubboss.com" className="text-blue-500 hover:text-blue-600">
                    contact@drscrubboss.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+919916877128" className="text-green-500 hover:text-green-600">
                    +91 9916877128
                  </a>
                </div>
              </div>

              <button 
                onClick={() => contactWhatsApp()}
                className="btn-whatsapp w-full flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Areas</h3>
              <p className="text-gray-600 mb-6">We currently serve the following areas in Bangalore:</p>
              
              <div className="space-y-4">
                {['Whitefield', 'Electronic City', 'Koramangala'].map((area) => (
                  <div key={area} className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Don't see your area?</strong> Contact us to check if we can serve your location. 
                  We're constantly expanding our service areas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Car className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Dr. ScrubBoss</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Premium Car Care at Your Doorstep</p>
              <p className="text-sm text-gray-500">© 2024 Dr. ScrubBoss. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-nav md:hidden">
        <button 
          onClick={() => scrollToSection('home')}
          className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
        >
          <Car className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </button>
        <button 
          onClick={() => scrollToSection('subscriptions')}
          className={`mobile-nav-item ${activeSection === 'subscriptions' ? 'active' : ''}`}
        >
          <Star className="w-5 h-5" />
          <span className="text-xs">Plans</span>
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className={`mobile-nav-item ${activeSection === 'services' ? 'active' : ''}`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-xs">Services</span>
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className={`mobile-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Index;