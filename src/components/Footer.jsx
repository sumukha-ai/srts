import { config } from '../config';
import logoSrc from '../assets/srtsnb.png';
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Tier: Brand & Navigation */}
        <div className={styles.topTier}>
          <div className={styles.brandBlock}>
            <a href="#" className={styles.logo} aria-label={config.company.name}>
              <img src={logoSrc} alt={config.company.name} className={styles.logoImage} />
            </a>
          </div>
          
          <div className={styles.links}>
            <a href="#philosophy" className={styles.link}>Philosophy</a>
            <a href="#services" className={styles.link}>Services</a>
            <a href={config.company.linkedinRama} target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href={`mailto:${config.company.email}`} className={styles.link}>Email</a>
          </div>
        </div>

        {/* Divider Line */}
        <div className={styles.divider} />
        
        {/* Bottom Tier: Copyright & Credits */}
        <div className={styles.bottomTier}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} {config.company.name}. All rights reserved.
          </div>
          
          <div className={styles.credits}>
            Architected & Built with <a href={config.company.linkedinSumukha} target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Sumukha.AI</a>
          </div>
        </div>

      </div>
    </footer>
  );
}