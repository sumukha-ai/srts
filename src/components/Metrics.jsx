import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { config } from '../config';
import styles from "./Metrics.module.css";

// Helper component to animate numbers from 0 when in view while strictly enforcing the suffix
function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Clean the value to extract just the number
  const stringValue = String(value || "0");
  const numericMatch = stringValue.match(/[\d.]+/);
  const numericVal = numericMatch ? parseFloat(numericMatch[0]) : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1500; // 1.5 seconds animation

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const current = numericVal * easeProgress;
      
      // Format decimal places correctly if the original value had decimals
      const decimals = numericVal % 1 !== 0 ? 1 : 0;
      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericVal]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={styles.impactBar}
        >
          
          {/* Left Side: Context / Telemetry Label */}
          <div className={styles.leftContent}>
            {/* <div className={styles.tvaBadge}>
              <span className={styles.tvaDot} />
              <span>TELEMETRY_LOG</span>
            </div> */}
            <h3 className={styles.barTitle}>Proven Velocity</h3>
          </div>

          {/* Right Side: Horizontal Stats Grid */}
          <div className={styles.statsGrid}>
            {config.metrics.map((metric, idx) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={styles.statItem}
              >
                <div className={styles.statValue}>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className={styles.statLabel}>{metric.label}</div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}