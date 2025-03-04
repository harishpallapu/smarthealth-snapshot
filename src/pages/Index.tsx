
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { HeartPulse, Moon, Activity, ArrowRight, BarChart3, Shield, Scale } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <HeartPulse className="h-6 w-6 text-red-500" />,
      title: 'Heart Rate Monitoring',
      description: 'Track your heart rate in real-time and analyze patterns to optimize cardiovascular health.'
    },
    {
      icon: <Scale className="h-6 w-6 text-orange-500" />,
      title: 'BMI Tracking',
      description: 'Calculate and monitor your Body Mass Index to maintain a healthy weight range.'
    },
    {
      icon: <Moon className="h-6 w-6 text-indigo-500" />,
      title: 'Sleep Analysis',
      description: 'Monitor sleep patterns and quality to improve your rest and recovery.'
    },
    {
      icon: <Activity className="h-6 w-6 text-green-500" />,
      title: 'Activity Tracking',
      description: 'Record daily activities and exercise to maintain an active lifestyle.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
      title: 'Health Insights',
      description: 'Get personalized analytics and insights to optimize your health goals.'
    },
    {
      icon: <Shield className="h-6 w-6 text-slate-500" />,
      title: 'Privacy Focused',
      description: 'Your health data is encrypted and securely stored with privacy as our priority.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 bg-health-pattern opacity-5 z-0"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Smart Personal Health Dashboard
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Monitor your health metrics, track progress, and gain insights with a beautiful, intuitive dashboard designed for your well-being.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="rounded-full px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
                alt="SmartHealth Dashboard Preview" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Powerful Health Tracking Features</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Experience comprehensive health monitoring with our intuitive tools designed to help you achieve your wellness goals.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm h-full border border-slate-100">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-health-blue to-health-indigo text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Start Your Health Journey Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are taking control of their health with SmartHealth Dashboard.
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-health-blue">
                Create Your Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Hear from people who have transformed their health with our platform.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The sleep tracking feature has helped me establish a much healthier sleep routine. I'm more productive than ever.",
                name: "Alex Morgan",
                title: "Software Engineer"
              },
              {
                quote: "Being able to monitor my heart rate throughout the day has been invaluable for my fitness journey. Highly recommend!",
                name: "Sarah Johnson",
                title: "Fitness Instructor"
              },
              {
                quote: "The BMI tracker helped me set realistic goals and track my progress. I've lost 15 pounds and feel amazing!",
                name: "Michael Chen",
                title: "Marketing Director"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-full">
                  <div className="mb-4 text-health-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 mb-6">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
