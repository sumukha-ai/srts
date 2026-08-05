import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { config } from '../config';
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle Glow Background Accent */}
          <div className={styles.bannerGlow} />

          <div className={styles.contentWrapper}>
            <div className={styles.headingGroup}>
              {/* <div className={styles.tvaBadge}>
                <span className={styles.tvaDot} />
                <span>SECURE_CHANNELS // OPEN</span>
              </div> */}
              <h2 className={styles.title}>Ready to scale your team?</h2>
              <p className={styles.description}>
                Let's discuss how {config.company.name} can accelerate your hiring and secure the talent you need to thrive.
              </p>
            </div>
            
            <div className={styles.actions}>
              {/* Email Direct Action Card */}
              <a 
                href={`mailto:${config.company.email}`}
                className={styles.actionCard}
              >
                <div className={styles.cardContent}>
                  <div className={styles.emailIconWrap}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardType}>EMAIL</span>
                    <span className={styles.cardValue}>{config.company.email}</span>
                  </div>
                </div>
                <div className={styles.arrowWrap}>
                  <ArrowRight size={18} className={styles.cardArrow} />
                </div>
              </a>
              
              {/* WhatsApp Direct Action Card */}
              <a 
                href={`https://wa.me/${config.company.whatsapp?.replace(/[^0-9]/g, '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.actionCard}
              >
                <div className={styles.cardContent}>
                  <div className={styles.whatsappIconWrap}>
                    <MessageCircle size={20} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardType}> WHATSAPP </span>
                    <span className={styles.cardValue}>{config.company.whatsapp}</span>
                  </div>
                </div>
                <div className={styles.arrowWrap}>
                  <ArrowRight size={18} className={styles.cardArrow} />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}