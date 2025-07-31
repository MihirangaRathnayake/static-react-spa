import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialProof = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [contributionData, setContributionData] = useState([]);

  // Mock GitHub contribution data
  const generateContributionData = () => {
    const data = [];
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date?.setDate(date?.getDate() - i);

      const contributions = Math.floor(Math.random() * 8); // 0-7 contributions per day
      data?.push({
        date: date?.toISOString()?.split('T')?.[0],
        count: contributions,
        level: contributions === 0 ? 0 : Math.ceil(contributions / 2)
      });
    }
    return data;
  };

  const activities = [
    {
      type: "commit",
      action: "Pushed 3 commits to EcoTrack-Dashboard",
      time: "2 hours ago",
      icon: "GitCommit",
      color: "#32FF7E"
    },
    {
      type: "course",
      action: "Completed Advanced React Patterns module",
      time: "1 day ago",
      icon: "BookOpen",
      color: "#00C9FF"
    },
    {
      type: "project",
      action: "Deployed MindFlow v2.1 to production",
      time: "3 days ago",
      icon: "Rocket",
      color: "#A855F7"
    },
    {
      type: "learning",
      action: "Started Three.js fundamentals course",
      time: "5 days ago",
      icon: "Play",
      color: "#FF6B6B"
    },
    {
      type: "contribution",
      action: "Contributed to open-source UI library",
      time: "1 week ago",
      icon: "Heart",
      color: "#32FF7E"
    }
  ];

  const achievements = [
    {
      title: "NIBM Student",
      description: "Software Engineering Program",
      progress: 75,
      icon: "GraduationCap",
      color: "#32FF7E"
    },
    {
      title: "GitHub Streak",
      description: "45 days of consistent coding",
      progress: 90,
      icon: "Flame",
      color: "#FF6B6B"
    },
    {
      title: "Projects Completed",
      description: "12 full-stack applications",
      progress: 100,
      icon: "CheckCircle",
      color: "#00C9FF"
    },
    {
      title: "Skills Mastered",
      description: "Frontend & UI/UX Design",
      progress: 85,
      icon: "Award",
      color: "#A855F7"
    }
  ];

  useEffect(() => {
    setContributionData(generateContributionData());

    // Rotate activities every 3 seconds
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getContributionColor = (level) => {
    const colors = {
      0: '#1e293b', // slate-800
      1: '#32FF7E40', // neon-green with opacity
      2: '#32FF7E60',
      3: '#32FF7E80',
      4: '#32FF7E' // full neon-green
    };
    return colors?.[level] || colors?.[0];
  };



  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
            Continuous <span className="text-purple-accent">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            My journey in code, learning, and building. Every day is an opportunity to grow and create something meaningful.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-poppins font-semibold text-foreground">
                GitHub Activity
              </h3>
              <div className="flex items-center space-x-2">
                <Icon name="Github" size={20} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-inter">
                  {contributionData?.filter(d => d?.count > 0)?.length} contributions this year
                </span>
              </div>
            </div>

            {/* Contribution Grid */}
            <div className="overflow-x-auto scrollbar-dark">
              <div className="flex flex-col space-y-1">
                {/* Day labels */}
                <div className="flex space-x-1 mb-2">
                  <div className="w-8 text-xs text-muted-foreground"></div>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                    <div key={month} className="text-xs text-muted-foreground" style={{ width: `${100 / 12}%`, minWidth: '24px' }}>
                      {i % 3 === 0 ? month : ''}
                    </div>
                  ))}
                </div>

                {/* Grid with day labels */}
                <div className="flex">
                  {/* Day of week labels */}
                  <div className="flex flex-col space-y-1 mr-2">
                    {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                      <div key={i} className="w-6 h-3 text-xs text-muted-foreground flex items-center">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Contribution squares organized by weeks */}
                  <div className="flex space-x-1">
                    {Array.from({ length: 53 }, (_, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col space-y-1">
                        {Array.from({ length: 7 }, (_, dayIndex) => {
                          const dataIndex = weekIndex * 7 + dayIndex;
                          const day = contributionData[dataIndex];

                          if (!day) return <div key={dayIndex} className="w-3 h-3" />;

                          return (
                            <motion.div
                              key={dayIndex}
                              className="w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 hover:scale-125"
                              style={{ backgroundColor: getContributionColor(day?.level) }}
                              whileHover={{ scale: 1.2 }}
                              title={`${day?.count} contributions on ${day?.date}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: dataIndex * 0.001 }}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4]?.map((level) => (
                  <div
                    key={level}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: getContributionColor(level) }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>

            {/* GitHub Stats */}
            <div className="mt-6 pt-4 border-t border-border/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green font-poppins">
                    {contributionData?.filter(d => d?.count > 0)?.length}
                  </div>
                  <div className="text-xs text-muted-foreground font-inter">
                    Total Contributions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue font-poppins">
                    45
                  </div>
                  <div className="text-xs text-muted-foreground font-inter">
                    Day Streak
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="text-center p-2 bg-muted/10 rounded-lg">
                  <div className="text-sm font-semibold text-purple-accent font-poppins">
                    {Math.max(...contributionData?.map(d => d?.count) || [0])}
                  </div>
                  <div className="text-xs text-muted-foreground font-inter">
                    Best Day
                  </div>
                </div>
                <div className="text-center p-2 bg-muted/10 rounded-lg">
                  <div className="text-sm font-semibold text-orange-400 font-poppins">
                    {Math.round(contributionData?.reduce((sum, d) => sum + d?.count, 0) / contributionData?.length || 0)}
                  </div>
                  <div className="text-xs text-muted-foreground font-inter">
                    Daily Avg
                  </div>
                </div>
                <div className="text-center p-2 bg-muted/10 rounded-lg">
                  <div className="text-sm font-semibold text-pink-400 font-poppins">
                    12
                  </div>
                  <div className="text-xs text-muted-foreground font-inter">
                    Repositories
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-poppins font-semibold text-foreground">
                Recent Activity
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-neon-green font-inter">Live</span>
              </div>
            </div>

            {/* Activity List */}
            <div className="space-y-4">
              {activities?.map((activity, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-300 ${index === currentActivity
                    ? 'bg-muted/20 border border-neon-green/30' : 'hover:bg-muted/10'
                    }`}
                  initial={{ opacity: 0.6 }}
                  animate={{
                    opacity: index === currentActivity ? 1 : 0.6,
                    scale: index === currentActivity ? 1.02 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${activity?.color}20` }}
                  >
                    <Icon
                      name={activity?.icon}
                      size={16}
                      style={{ color: activity?.color }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-inter text-foreground">
                      {activity?.action}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity?.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {achievements?.map((achievement, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-2xl text-center group hover:neon-glow transition-all duration-300"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${achievement?.color}20` }}
              >
                <Icon
                  name={achievement?.icon}
                  size={24}
                  style={{ color: achievement?.color }}
                />
              </div>

              <h4 className="font-poppins font-semibold text-foreground mb-2">
                {achievement?.title}
              </h4>

              <p className="text-sm text-muted-foreground mb-4 font-inter">
                {achievement?.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-muted/20 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ backgroundColor: achievement?.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${achievement?.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>

              <span
                className="text-xs font-inter font-medium mt-2 block"
                style={{ color: achievement?.color }}
              >
                {achievement?.progress}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;