import { motion } from 'motion/react';
import { config } from '../config';
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.eyebrow}>Our Methodology</h2>
          <p className={styles.title}>
            A rigorous, four-step framework designed to eliminate friction.
          </p>
        </div>
        
        <div className={styles.grid}>
          {/* Connecting line */}
          <div className={styles.line} />
          
          {config.process.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.step}
            >
              <div className={styles.number}>
                {idx + 1}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
