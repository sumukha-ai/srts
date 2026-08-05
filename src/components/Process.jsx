import { motion } from 'motion/react';
import { config } from '../config';
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        
        {/* Split Layout Wrapper */}
        <div className={styles.splitWrapper}>
          
          {/* Left Column: Sticky Anchor Header */}
          <div className={styles.stickyHeaderCol}>
            <div className={styles.stickyContent}>
              {/* <div className={styles.tvaBadge}>
                <span className={styles.tvaDot} />
                <span>TVA_TIMELINE_PROTOCOL</span>
              </div> */}
              <h2 className={styles.eyebrow}>Our Methodology</h2>
              <h3 className={styles.title}>
                A rigorous, four-step framework engineered for zero friction.
              </h3>
              <p className={styles.subtitle}>
                We combine elite talent scouting with automated systems to close roles faster and smarter.
              </p>
            </div>
          </div>

          {/* Right Column: Natural Scrolling Steps */}
          <div className={styles.stepsCol}>
            {config.process.map((step, idx) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={styles.stepCard}
              >
                <div className={styles.cardAccent} />
                <div className={styles.cardHeader}>
                  <span className={styles.stepNum}>0{idx + 1}</span>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                </div>
                <p className={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}