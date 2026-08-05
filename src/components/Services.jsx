import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { config } from '../config';
import styles from "./Services.module.css";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.eyebrow}>Our Capabilities</h2>
          <p className={styles.title}>
            Tailored recruitment frameworks designed to scale with your ambitions.
          </p>
        </div>
        
        {/* Mac Window Shell */}
        <div className={styles.macWindow}>
          
          {/* Mac Window Title Bar */}
          <div className={styles.macTitleBar}>
            <div className={styles.macDots}>
              <span className={styles.macDotRed} />
              <span className={styles.macDotYellow} />
              <span className={styles.macDotGreen} />
            </div>
            <div className={styles.macTitle}>shree-rama-talent-solutions — capabilities.config.js</div>
          </div>

          {/* Window Body Container */}
          <div className={styles.dashboardWrapper}>
            {/* Sidebar Tabs */}
            <div className={styles.tabsContainer}>
              <div className={styles.sidebarLabel}>Frameworks</div>
              {config.services.map((service, idx) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`${styles.tabButton} ${activeIndex === idx ? styles.activeTab : ''}`}
                >
                  {service.title}
                  {activeIndex === idx && (
                    <motion.div layoutId="activeMacTab" className={styles.activeIndicator} />
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic Content Display Area */}
            <div className={styles.contentDisplay}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className={styles.activeContent}
                >
                  <div className={styles.contentHeader}>
                    <h3 className={styles.contentTitle}>{config.services[activeIndex].title}</h3>
                    <p className={styles.description}>{config.services[activeIndex].description}</p>
                  </div>

                  <div className={styles.featuresGrid}>
                    {config.services[activeIndex].features.map((feature, fIdx) => (
                      <motion.div 
                        key={feature}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 + (fIdx * 0.04) }}
                        className={styles.featureModule}
                      >
                        <CheckCircle2 className={styles.checkIcon} size={18} />
                        <span className={styles.featureText}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* <button className={styles.learnMoreBtn}>
                    Discuss this framework <ArrowRight size={16} />
                  </button> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}