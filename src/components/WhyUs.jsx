import { motion } from 'motion/react';
import { config } from '../config';
import styles from "./WhyUs.module.css";

export function WhyUs() {
  
  // Captures the mouse position relative to the specific card being hovered
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Inject the coordinates into the card's inline styles as CSS variables
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.eyebrow}>What Sets Us Apart</h2>
          <p className={styles.title}>
            We blend deep industry insight with modern recruitment technology.
          </p>
        </div>
        
        <div className={styles.bentoGrid}>
          {config.whyUs.map((item, idx) => {
            let bentoClass = styles.bentoDefault;
            if (idx === 0 || idx === 4) {
              bentoClass = styles.bentoWide;
            } else if (idx === 1) {
              bentoClass = styles.bentoTall;
            }
            
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${styles.card} ${bentoClass}`}
                onMouseMove={handleMouseMove} // Added the mouse tracker here
              >
                {/* The Spotlight Hover Glow */}
                <div className={styles.cardGlow} />

                <div className={styles.watermark}>
                  0{idx + 1}
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}