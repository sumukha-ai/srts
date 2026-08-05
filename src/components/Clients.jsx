import { config } from '../config';
import styles from "./Clients.module.css";

export function Clients() {
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.eyebrow}>Trusted by Teams We Support</h2>
      </div>
      
      {/* Container with fade edges */}
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        
        <div className={styles.marquee}>
          {/* First set */}
          <div className={styles.logoSet}>
            {config.clients.map((client, idx) => (
              <div key={`client-1-${idx}`} className={styles.clientCard}>
                <span className={styles.clientName}>{client.name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className={styles.logoSet}>
            {config.clients.map((client, idx) => (
              <div key={`client-2-${idx}`} className={styles.clientCard}>
                <span className={styles.clientName}>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
