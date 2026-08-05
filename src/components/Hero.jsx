import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageCircle, Search, LayoutGrid, Users, Settings, Bell, CheckCircle2, GripHorizontal, Sparkles } from 'lucide-react';
import { config } from '../config';
import styles from "./Hero.module.css";

const SkeletonLine = ({ w, h = 8, color = '#e2e8f0' }) => (
  <div style={{ width: w, height: h, background: color, borderRadius: 4 }} />
);

const KanbanCard = ({ delay = 0, avatarColor = '#e2e8f0', tagColor = '#f1f5f9' }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={styles.kanbanCard}
  >
    <div className={styles.cardHeader}>
      <div className={styles.avatarMini} style={{ background: avatarColor }} />
      <div className={styles.cardLines}>
        <SkeletonLine w="65%" color="#334155" />
        <SkeletonLine w="40%" />
      </div>
    </div>
    <div className={styles.cardFooter}>
      <SkeletonLine w="30%" h={6} />
      <div className={styles.tagSkeleton} style={{ background: tagColor }} />
    </div>
  </motion.div>
);

// 1. Update the InteractiveCandidateCard to include a floating Tooltip
const InteractiveCandidateCard = ({ isHired, handleDragEnd }) => (
  <motion.div
    layout
    layoutId="hero-candidate"
    className={styles.kanbanCardInteractive}
    style={{ touchAction: "none", userSelect: "none" }}
    drag
    dragSnapToOrigin={true}
    onDragEnd={handleDragEnd}
    animate={{
      borderColor: isHired ? "#10b981" : "#cbd5e1",
      boxShadow: isHired
        ? "0 4px 6px -1px rgba(16, 185, 129, 0.1)"
        : "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      rotate: isHired ? 0 : [0, -2, 2, -1, 1, 0],
      y: isHired ? 0 : [0, -4, 0, -2, 0]
    }}
    whileHover={{ scale: 1.05, y: -4 }} // Increased hover lift to make it feel "light"
    whileDrag={{
      scale: 1.08,
      rotate: isHired ? 2 : -2,
      cursor: "grabbing",
      boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.3)",
      zIndex: 50
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 25,
      rotate: isHired ? { type: "spring" } : { repeat: Infinity, repeatDelay: 1, duration: 0.6, ease: "easeInOut" },
      y: isHired ? { type: "spring" } : { repeat: Infinity, repeatDelay: 1, duration: 0.6, ease: "easeInOut" }
    }}
  >
    {/* NEW: The Floating "Try Me" Tooltip */}
    {/* {!isHired && (
      <motion.div
        className={styles.actionTooltip}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Try it yourself 👇
      </motion.div>
    )} */}

    <div className={styles.cardInner}>
      {!isHired && (
        <div className={styles.dragHint}>
          <GripHorizontal size={12} /> Drag to Hire
        </div>
      )}

      {isHired && <div className={styles.shimmerEffectActive} />}

      <div className={styles.cardHeader}>
        <div className={styles.avatarHighlight} />
        <div className={styles.cardLines}>
          <div style={{ width: '80%', height: 8, background: '#0f172a', borderRadius: 4 }} />
          <SkeletonLine w="50%" />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <SkeletonLine w="40%" h={6} />
        <div className={isHired ? styles.tagSkeletonActive : styles.tagSkeletonPending} />
      </div>
    </div>

    <motion.div
      className={styles.successBadge}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHired ? [0, 1.2, 1] : 0,
        opacity: isHired ? 1 : 0
      }}
      transition={{ duration: 0.4 }}
    >
      <CheckCircle2 size={24} color="#10b981" fill="#ecfdf5" />
    </motion.div>
  </motion.div>
);

export function Hero() {
  const [isHired, setIsHired] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 30) {
      setIsHired(true);
    } else if (info.offset.x < -30) {
      setIsHired(false);
      setIsSubmitted(false);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.badge}
          >
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>Premium Talent Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.title}
          >
            Hunt. Hire. <span className={styles.titleAccent}>Thrive.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.description}
          >
            We partner with visionary startups and product companies to secure elite engineering talent. Elevating your hiring strategy from initial search to final close.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.actions}
          >
            <a href="#contact" className={styles.primaryButton}>
              Book a Hiring Discussion
              <ArrowRight className={styles.buttonIcon} />
            </a>
            <a href={`https://wa.me/${config.company.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              <MessageCircle className={styles.buttonIcon} />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={styles.dashboardContainer}
          >
            <div className={styles.dashboardWindow}>

              <div className={styles.sidebar}>
                <div className={styles.sidebarTop}>
                  <div className={styles.logoSkeleton} />
                  <div className={styles.sidebarIconActive}><LayoutGrid size={16} /></div>
                  <div className={styles.sidebarIcon}><Users size={16} /></div>
                  <div className={styles.sidebarIcon}><Search size={16} /></div>
                </div>
                <div className={styles.sidebarBottom}>
                  <div className={styles.sidebarIcon}><Settings size={16} /></div>
                </div>
              </div>

              <div className={styles.mainView}>

                <div className={styles.topBar}>
                  <div className={styles.breadcrumb}>
                    <span className={styles.darkText}>Engineering</span>
                    <span className={styles.lightText}>/</span>
                    <span className={styles.mutedText}>Backend</span>
                  </div>
                  <div className={styles.topActions}>
                    <div className={styles.searchSkeleton} />
                    <Bell size={16} className={styles.iconMuted} />
                    <div className={styles.avatarProfile} />
                  </div>
                </div>

                <div className={styles.kanbanBoard}>

                  <div className={`${styles.column} ${styles.hideMobile}`}>
                    <div className={styles.colHeader}>
                      <div className={styles.colTitle}><div className={styles.dot} style={{ background: '#94a3b8' }} /> Sourced</div>
                      <span className={styles.colCount}>24</span>
                    </div>
                    <div className={styles.colBody}>
                      <KanbanCard delay={0.6} avatarColor="#cbd5e1" tagColor="#e2e8f0" />
                      <KanbanCard delay={0.7} avatarColor="#fbcfe8" tagColor="#fce7f3" />
                      <KanbanCard delay={0.8} avatarColor="#bae6fd" tagColor="#e0f2fe" />
                    </div>
                  </div>

                  <div className={`${styles.column} ${styles.hideMobile}`}>
                    <div className={styles.colHeader}>
                      <div className={styles.colTitle}><div className={styles.dot} style={{ background: '#3b82f6' }} /> Screening</div>
                      <span className={styles.colCount}>12</span>
                    </div>
                    <div className={styles.colBody}>
                      <KanbanCard delay={0.9} avatarColor="#fed7aa" tagColor="#ffedd5" />
                      <KanbanCard delay={1.0} avatarColor="#a7f3d0" tagColor="#d1fae5" />
                    </div>
                  </div>

                  <div className={styles.column}>
                    <div className={styles.colHeader}>
                      <div className={styles.colTitle}><div className={styles.dot} style={{ background: '#8b5cf6' }} /> Interview</div>
                      <span className={styles.colCount}>{isHired ? "3" : "4"}</span>
                    </div>
                    <div className={styles.colBodyTrack}>
                      <KanbanCard delay={1.1} avatarColor="#e9d5ff" tagColor="#f3e8ff" />
                      {!isHired && <InteractiveCandidateCard isHired={isHired} handleDragEnd={handleDragEnd} />}
                    </div>
                  </div>

                  {/* HIRED COLUMN */}
                  <div className={styles.column}>
                    <div className={styles.colHeader}>
                      <div className={styles.colTitle}><div className={styles.dot} style={{ background: '#10b981' }} /> Hired</div>
                      <motion.span
                        className={styles.colCount}
                        animate={{
                          background: isHired ? "#d1fae5" : "#e2e8f0",
                          color: isHired ? "#059669" : "#94a3b8",
                          scale: isHired ? [1, 1.2, 1] : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {isHired ? "2" : "1"}
                      </motion.span>
                    </div>
                    <div className={styles.colBodyTrack}>
                      {isHired ? (
                        <InteractiveCandidateCard isHired={isHired} handleDragEnd={handleDragEnd} />
                      ) : (
                        /* NEW: The Magnetic Drop Zone */
                        <motion.div
                          className={styles.magneticDropZone}
                          animate={{ borderColor: ["#cbd5e1", "#10b981", "#cbd5e1"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className={styles.dropZoneIconWrap}>
                            <ArrowRight size={16} className={styles.dropZoneArrow} />
                          </div>
                          <span>Drop Here</span>
                        </motion.div>
                      )}
                    </div>
                  </div>

                </div>

                {/* The Premium Pop-Up Overlay */}
                <AnimatePresence>
                  {isHired && (
                    <motion.div
                      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className={styles.easterEggOverlay}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.7 }}
                        className={styles.popupCard}
                      >
                        {!isSubmitted ? (
                          <>
                            <div className={styles.popupHeader}>
                              <div className={styles.popupIconWrap}>
                                <Sparkles size={24} className={styles.popupIcon} />
                              </div>
                              <h3 className={styles.popupTitle}>Want hiring to feel this easy?</h3>
                              <p className={styles.popupDesc}>
                                Enter your email and we'll show you how we build elite talent pipelines.
                              </p>
                            </div>
                            <form onSubmit={handleEmailSubmit} className={styles.popupForm}>
                              <input
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.popupInput}
                                required
                              />
                              <button type="submit" className={styles.popupSubmit}>
                                Build My Pipeline <ArrowRight size={16} />
                              </button>
                            </form>
                          </>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={styles.popupSuccess}
                          >
                            <div className={styles.successIconWrap}>
                              <CheckCircle2 size={36} color="#10b981" />
                            </div>
                            <h3 className={styles.popupTitle}>Request Received</h3>
                            <p className={styles.popupDesc}>
                              We'll be in touch shortly to transform your hiring process. 🚀
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}