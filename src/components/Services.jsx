import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { config } from '../config';
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div className={styles.headingCopy}>
            <h2 className={styles.eyebrow}>Our Capabilities</h2>
            <p className={styles.title}>
              Tailored recruitment frameworks designed to scale with your ambitions.
            </p>
          </div>
        </div>
        
        <div className={styles.list}>
          {config.services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.card}
            >
              <div className={styles.serviceCopy}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
              
              <div className={styles.featuresColumn}>
                <ul className={styles.features}>
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <div className={styles.checkWrap}>
                        <Check className={styles.checkIcon} />
                      </div>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
