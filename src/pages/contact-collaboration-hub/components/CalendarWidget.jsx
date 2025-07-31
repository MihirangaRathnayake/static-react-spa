import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendarWidget = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Mock available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Mock calendar data for the next 7 days
  const getNextSevenDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      // Skip weekends for availability
      if (date?.getDay() !== 0 && date?.getDay() !== 6) {
        days?.push({
          date: date,
          day: date?.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: date?.getDate(),
          month: date?.toLocaleDateString('en-US', { month: 'short' }),
          available: Math.random() > 0.3 // Random availability
        });
      }
    }
    return days;
  };

  const availableDays = getNextSevenDays();

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookMeeting = () => {
    setShowBookingForm(true);
  };

  const BookingConfirmation = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-6"
    >
      <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
        <Icon name="Calendar" size={32} className="text-neon-green" />
      </div>
      <h4 className="text-lg font-poppins font-bold text-foreground mb-2">
        Meeting Scheduled!
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        I'll send you a calendar invite with the meeting details shortly.
      </p>
      <div className="bg-card/50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Date:</span>
          <span className="text-foreground font-medium">
            {selectedDate?.day}, {selectedDate?.month} {selectedDate?.dayNum}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-muted-foreground">Time:</span>
          <span className="text-foreground font-medium">{selectedTime} (IST)</span>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          setShowBookingForm(false);
          setSelectedDate(null);
          setSelectedTime(null);
        }}
        className="border-neon-green/30 text-neon-green hover:bg-neon-green/10"
      >
        Schedule Another Meeting
      </Button>
    </motion.div>
  );

  if (showBookingForm) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="glassmorphism rounded-2xl p-8"
      >
        <BookingConfirmation />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="glassmorphism rounded-2xl p-8"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-purple-accent/20 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} className="text-purple-accent" />
        </div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-foreground">
            Schedule a Meeting
          </h3>
          <p className="text-sm text-muted-foreground">
            Book a 30-minute call to discuss your project
          </p>
        </div>
      </div>
      {/* Meeting Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { type: 'Project Discussion', duration: '30 min', icon: 'Briefcase' },
          { type: 'Career Chat', duration: '20 min', icon: 'Coffee' },
          { type: 'Technical Review', duration: '45 min', icon: 'Code' }
        ]?.map((meeting) => (
          <div
            key={meeting?.type}
            className="p-3 rounded-lg bg-card/30 border border-border/20 hover:bg-card/50 transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-2 mb-1">
              <Icon name={meeting?.icon} size={16} className="text-electric-blue" />
              <span className="text-sm font-medium text-foreground">{meeting?.type}</span>
            </div>
            <p className="text-xs text-muted-foreground">{meeting?.duration}</p>
          </div>
        ))}
      </div>
      {/* Date Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3">Select Date</h4>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {availableDays?.map((day, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDateSelect(day)}
              disabled={!day?.available}
              className={`p-3 rounded-lg text-center transition-all duration-300 ${
                selectedDate === day
                  ? 'bg-neon-green/20 border-2 border-neon-green text-neon-green'
                  : day?.available
                  ? 'bg-card/30 border border-border/20 hover:bg-card/50 text-foreground'
                  : 'bg-muted/10 border border-border/10 text-muted-foreground cursor-not-allowed opacity-50'
              }`}
            >
              <div className="text-xs font-medium">{day?.day}</div>
              <div className="text-lg font-bold">{day?.dayNum}</div>
              <div className="text-xs">{day?.month}</div>
            </motion.button>
          ))}
        </div>
      </div>
      {/* Time Selection */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-6"
        >
          <h4 className="text-sm font-semibold text-foreground mb-3">Select Time (IST)</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {timeSlots?.map((time) => (
              <motion.button
                key={time}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTime === time
                    ? 'bg-electric-blue/20 border-2 border-electric-blue text-electric-blue' :'bg-card/30 border border-border/20 hover:bg-card/50 text-foreground'
                }`}
              >
                {time}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
      {/* Book Meeting Button */}
      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Clock" size={16} className="text-neon-green" />
              <span className="text-sm font-medium text-foreground">Meeting Summary</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Date: {selectedDate?.day}, {selectedDate?.month} {selectedDate?.dayNum}</p>
              <p>Time: {selectedTime} (IST)</p>
              <p>Duration: 30 minutes</p>
            </div>
          </div>

          <Button
            variant="default"
            fullWidth
            onClick={handleBookMeeting}
            iconName="Calendar"
            iconPosition="left"
            className="bg-gradient-to-r from-neon-green to-electric-blue hover:neon-glow"
          >
            Book Meeting
          </Button>
        </motion.div>
      )}
      <div className="mt-6 p-4 bg-electric-blue/5 rounded-lg border border-electric-blue/20">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-electric-blue mt-0.5" />
          <div className="text-sm">
            <p className="text-foreground font-medium mb-1">Meeting Details</p>
            <p className="text-muted-foreground text-xs">
              All meetings are conducted via Google Meet. You'll receive a calendar invite with the meeting link after booking.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CalendarWidget;