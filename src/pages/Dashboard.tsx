
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { HeartPulse, Activity, Moon, Scale, Apple, Utensils, Droplet, User } from 'lucide-react';
import MetricCard from '@/components/ui/MetricCard';
import BMICalculator from '@/components/HealthMetrics/BMICalculator';
import HeartRateMonitor from '@/components/HealthMetrics/HeartRateMonitor';
import SleepTracker from '@/components/HealthMetrics/SleepTracker';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Simulated data
  const userData = {
    name: 'Alex Morgan',
    steps: 8435,
    caloriesBurned: 340,
    waterIntake: 5,
    weight: '68.2 kg',
    height: '175 cm',
    bmi: 22.3,
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold">Welcome back, {userData.name}</h1>
            <p className="text-slate-600 mt-1">Here's an overview of your health metrics</p>
          </motion.div>
        </div>
        
        {/* Dashboard Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-2 border-b border-slate-200">
            {[
              { id: 'overview', label: 'Overview', icon: <Activity className="h-4 w-4" /> },
              { id: 'heart', label: 'Heart Rate', icon: <HeartPulse className="h-4 w-4" /> },
              { id: 'sleep', label: 'Sleep', icon: <Moon className="h-4 w-4" /> },
              { id: 'bmi', label: 'BMI', icon: <Scale className="h-4 w-4" /> },
              { id: 'profile', label: 'Profile', icon: <User className="h-4 w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-health-blue text-health-blue'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="Steps"
                  value={userData.steps}
                  icon={<Activity className="h-5 w-5 text-health-blue" />}
                  description="Daily Goal: 10,000 steps"
                  trend="up"
                  trendValue="12% from yesterday"
                />
                <MetricCard
                  title="Calories Burned"
                  value={`${userData.caloriesBurned} kcal`}
                  icon={<Apple className="h-5 w-5 text-health-teal" />}
                  description="Daily Goal: 500 kcal"
                  trend="neutral"
                  trendValue="Same as yesterday"
                />
                <MetricCard
                  title="Water Intake"
                  value={`${userData.waterIntake} glasses`}
                  icon={<Droplet className="h-5 w-5 text-blue-500" />}
                  description="Daily Goal: 8 glasses"
                  trend="down"
                  trendValue="1 less than yesterday"
                />
                <MetricCard
                  title="Meals Tracked"
                  value="3"
                  icon={<Utensils className="h-5 w-5 text-orange-400" />}
                  description="Breakfast, Lunch, Dinner"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <BMICalculator />
                </div>
                <div className="md:col-span-1">
                  <HeartRateMonitor />
                </div>
                <div className="md:col-span-1">
                  <SleepTracker />
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Heart Rate Tab */}
        {activeTab === 'heart' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            <HeartRateMonitor />
          </motion.div>
        )}
        
        {/* Sleep Tab */}
        {activeTab === 'sleep' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            <SleepTracker />
          </motion.div>
        )}
        
        {/* BMI Tab */}
        {activeTab === 'bmi' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            <BMICalculator />
          </motion.div>
        )}
        
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-slate-200"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-health-blue/10 flex items-center justify-center">
                  <User className="h-12 w-12 text-health-blue" />
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  Edit Profile
                </Button>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  <p className="text-slate-600">Member since January 2023</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">Height</p>
                    <p className="text-lg font-medium">{userData.height}</p>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">Weight</p>
                    <p className="text-lg font-medium">{userData.weight}</p>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">BMI</p>
                    <p className="text-lg font-medium">{userData.bmi}</p>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">Age</p>
                    <p className="text-lg font-medium">32</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-lg font-semibold mb-4">Health Goals</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Daily Steps</span>
                      <span className="text-health-blue font-medium">10,000 steps</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Water Intake</span>
                      <span className="text-health-blue font-medium">8 glasses</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sleep Duration</span>
                      <span className="text-health-blue font-medium">8 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
