import React, { useEffect, useRef } from 'react';

const ParticleSystem = ({ hoveredSkill, update, draw }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas?.getContext('2d');
    const particles = particlesRef?.current;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas?.width;
        this.y = Math.random() * canvas?.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
        '#32FF7E', // neon-green
        '#00C9FF', // electric-blue
        '#A855F7', // purple-accent
        '#FF6B6B' // coral-red
        ];
        return colors?.[Math.floor(Math.random() * colors?.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas?.width) {
          this.vx *= -1;
        }
        if (this.y < 0 || this.y > canvas?.height) {
          this.vy *= -1;
        }

        // Mouse interaction
        const dx = mouseRef?.current?.x - this.x;
        const dy = mouseRef?.current?.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx += dx * force * 0.0001;
          this.vy += dy * force * 0.0001;
        }

        // Friction
        this.vx *= 0.999;
        this.vy *= 0.999;
      }

      draw() {
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(this.opacity * 255)?.toString(16)?.padStart(2, '0');
        ctx?.fill();

        // Add glow effect when skill is hovered
        if (hoveredSkill) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = this.color;
          ctx?.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(canvas?.width * canvas?.height / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles?.push(new Particle());
      }
    };

    initParticles();

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e?.clientX;
      mouseRef.current.y = e?.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);

      // Update and draw particles
      particles?.forEach((particle) => {
        particle?.update();
        particle?.draw();
      });

      // Draw connections between nearby particles
      particles?.forEach((particle, i) => {
        particles?.slice(i + 1)?.forEach((otherParticle) => {
          const dx = particle?.x - otherParticle?.x;
          const dy = particle?.y - otherParticle?.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.2;
            ctx?.beginPath();
            ctx?.moveTo(particle?.x, particle?.y);
            ctx?.lineTo(otherParticle?.x, otherParticle?.y);
            ctx.strokeStyle = `rgba(50, 255, 126, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx?.stroke();
          }
        });
      });

      // Cluster effect when skill is hovered
      if (hoveredSkill) {
        particles?.forEach((particle) => {
          const dx = mouseRef?.current?.x - particle?.x;
          const dy = mouseRef?.current?.y - particle?.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const force = (200 - distance) / 200;
            particle.vx += dx * force * 0.0002;
            particle.vy += dy * force * 0.0002;

            // Increase glow effect
            particle.opacity = Math.min(1, particle?.opacity + force * 0.01);
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef?.current) {
        cancelAnimationFrame(animationFrameRef?.current);
      }
    };
  }, [hoveredSkill]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }} />);


};

export default ParticleSystem;