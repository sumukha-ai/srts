import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { config } from '../config';
import styles from "./Header.module.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.top}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label={config.company.name}>
          {config.company.name}
        </a>
        
        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className={styles.desktopActions}>
          <a href="#contact" className={styles.cta}>
            Talk to Us
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className={styles.mobileActions}>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={styles.menuButton} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileCta}>
            Talk to Us
          </a>
        </div>
      )}
    </header>
  );
}
