import { motion } from 'motion/react';
import { config } from '../config';
import styles from "./Philosophy.module.css";

export function Philosophy() {
  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={styles.eyebrow}
          >
            Our Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            A principled approach to building high-performing technology teams.
          </motion.p>
        </div>
        
        <div className={styles.frameworkWrapper}>
          {/* The visual pipeline connecting the cards (Desktop Only) */}
          <div className={styles.connectingLine} />

          <div className={styles.grid}>
            {config.philosophy.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={styles.card}
                >
                  {/* Subtle hover accent line */}
                  <div className={styles.cardAccent} />
                  
                  <div className={styles.iconWrap}>
                    <Icon className={styles.icon} strokeWidth={1.5} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      <span className={styles.stepNumber}>0{idx + 1}.</span> {item.title}
                    </h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}