import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';
import { config } from '../config';
import styles from "./Services2.module.css";

export function Services2() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div className={styles.headingCopy}>
            <h2 className={styles.eyebrow}>Our Capabilities</h2>
            <p className={styles.title}>
              Tailored recruitment frameworks designed to scale.
            </p>
          </div>
        </div>
        
        <div className={styles.accordionContainer}>
          {config.services.map((service, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={service.title} 
                className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button 
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className={styles.headerIndex}>0{idx + 1}</span>
                  <h3 className={styles.headerTitle}>{service.title}</h3>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.iconWrap}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.accordionBodyWrapper}
                    >
                      <div className={styles.accordionContent}>
                        <p className={styles.description}>{service.description}</p>
                        
                        <div className={styles.featuresList}>
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className={styles.featureItem}>
                              <div className={styles.checkWrap}>
                                <Check size={14} strokeWidth={3} />
                              </div>
                              <span className={styles.featureText}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}