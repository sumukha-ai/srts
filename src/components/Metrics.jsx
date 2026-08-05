import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { config } from '../config';
import styles from "./Metrics.module.css";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Metrics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {config.metrics.map((metric, idx) => (
            <div key={idx} className={`${styles.metric} ${idx !== 0 && idx !== 2 && idx !== 4 ? styles.mobileDivider : ''} ${idx > 1 ? styles.desktopDivider : ''}`}>
              <span className={styles.value}>
                <Counter value={metric.value} suffix={metric.suffix} />
              </span>
              <span className={styles.label}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
