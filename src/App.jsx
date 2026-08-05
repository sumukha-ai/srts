/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Philosophy } from "./components/Philosophy";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Philosophy />
        <WhyUs />
        <Services />
        <Clients />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
