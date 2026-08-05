import { config } from '../config';
import logoSrc from '../assets/srtsnb.png';
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a href="#" className={styles.logo} aria-label={config.company.name}>
            <img src={logoSrc} alt={config.company.name} className={styles.logoImage} />
          </a>
          <p className={styles.tagline}>{config.company.tagline}</p>
        </div>
        
        <div className={styles.links}>
          <a href={config.company.linkedinRama} target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href={`mailto:${config.company.email}`} className={styles.link}>Email</a>
          <a href="#philosophy" className={styles.link}>Philosophy</a>
          <a href="#services" className={styles.link}>Services</a>
        </div>
        
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} {config.company.name}.<br className={styles.desktopBreak} />
          <span className={styles.builtWith}> Built with <a href={config.company.linkedinSumukha} target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Sumukha.AI</a></span>
        </div>
      </div>
    </footer>
  );
}
