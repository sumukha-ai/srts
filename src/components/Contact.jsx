import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { config } from '../config';
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Ready to scale your team?</h2>
          <p className={styles.description}>Let's discuss how {config.company.name} can accelerate your hiring and secure the talent you need to thrive.</p>
          
          <div className={styles.actions}>
            <a 
              href={`mailto:${config.company.email}`}
              className={styles.emailCard}
            >
              <div className={styles.cardContent}>
                <div className={styles.emailIconWrap}>
                  <Mail className={styles.emailIcon} />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.emailLabel}>Email Us</div>
                  <div className={styles.cardValue}>{config.company.email}</div>
                </div>
              </div>
              <ArrowRight className={styles.emailArrow} />
            </a>
            
            <a 
              href={`https://wa.me/${config.company.whatsapp.replace(/\+/g, '')}`}
              target="_blank" rel="noopener noreferrer"
              className={styles.whatsappCard}
            >
              <div className={styles.cardContent}>
                <div className={styles.whatsappIconWrap}>
                  <MessageCircle className={styles.whatsappIcon} />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.whatsappLabel}>WhatsApp</div>
                  <div className={styles.cardValue}>{config.company.whatsapp}</div>
                </div>
              </div>
              <ArrowRight className={styles.whatsappArrow} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
