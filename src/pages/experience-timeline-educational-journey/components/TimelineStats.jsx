import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineStats = ({ milestones }) => {
  const stats = [
    {
      label: 'Total Milestones',
      value: milestones?.length,
      icon: 'Target',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10'
    },
    {
      label: 'Education',
      value: milestones?.filter(m => m?.category === 'Education')?.length,
      icon: 'GraduationCap',
      color: 'text-purple-accent',
      bgColor: 'bg-purple-accent/10'
    },
    {
      label: 'Projects',
      value: milestones?.filter(m => m?.category === 'Projects')?.length,
      icon: 'Code',
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10'
    },
    {
      label: 'Certifications',
      value: milestones?.filter(m => m?.category === 'Certifications')?.length,
      icon: 'Award',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats?.map((stat, index) => (
        <motion.div
          key={stat?.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glassmorphism rounded-2xl p-6 text-center"
        >
          <div className={`w-12 h-12 ${stat?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-2xl font-poppins font-bold text-foreground mb-1">
            {stat?.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat?.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineStats;