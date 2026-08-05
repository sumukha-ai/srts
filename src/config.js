import { Target, Briefcase, TrendingUp } from "lucide-react";

export const config = {
  company: {
    name: "Shree Rama Talent Solutions",
    tagline: "Hunt. Hire. Thrive.",
    email: "founder@srts.com",
    whatsapp: "+91 9999999999",
    linkedinRama: "https://linkedin.com/company/shree-rama-talent-solutions",
    linkedinSumukha: "https://sumukha.ai"
  },
  metrics: [
    { value: 120, suffix: "+", label: "Positions Closed" },
    { value: 35, suffix: "", label: "Hiring Partners" },
    { value: 15, suffix: "k", label: "Candidate Network" },
    { value: 82, suffix: "%", label: "Offer-to-Join" },
    { value: 68, suffix: "%", label: "Repeat Clients" },
  ],
  philosophy: [
    { title: "Hunt", description: "Identifying and engaging with elite passive talent that drives organizational transformation.", icon: Target },
    { title: "Hire", description: "Streamlining the acquisition process to secure top-tier professionals seamlessly.", icon: Briefcase },
    { title: "Thrive", description: "Ensuring long-term mutual success for both exceptional candidates and visionary companies.", icon: TrendingUp }
  ],
  whyUs: [
    { title: "Innovative Recruitment", description: "Forward-thinking methodologies to source beyond traditional talent pools, uncovering hidden gems in the tech landscape." },
    { title: "Tech Mastery", description: "Deep domain expertise allowing us to evaluate product and engineering roles with precise accuracy." },
    { title: "Integrated Chatbot", description: "AI-enabled workflows for rapid candidate screening, ensuring zero drop-offs and higher engagement." },
    { title: "Industry Pioneers", description: "Setting new benchmarks in executive search by combining data-driven insights with human intuition." },
    { title: "Strategic Alliances", description: "We don't just fill roles; we build long-term talent pipelines tailored to your organizational scaling." },
    { title: "Diversity Dynamo", description: "Deeply committed to helping companies build inclusive, high-performing, and diverse technical teams." }
  ],
  services: [
    { title: "End-to-End Recruitment", description: "Comprehensive talent acquisition from initial market mapping and sourcing to final offer negotiation and onboarding.", features: ["Leadership & Executive Search", "Product & Engineering Roles", "Custom Hiring Campaigns"] },
    { title: "Employee Engagement", description: "Data-backed strategies to retain top talent, build a thriving workplace culture, and reduce early attrition.", features: ["Culture Alignment", "Retention Consulting", "Performance Frameworks"] },
    { title: "Vendor-On-Premise (VOP)", description: "Dedicated on-site recruitment partners integrating directly with your HR to manage high-volume scaling.", features: ["Process Coordination", "Startup Scaling Support", "Seamless HR Integration"] }
  ],
  clients: [
    { name: "Client 01" }, { name: "Client 02" }, { name: "Client 03" }, { name: "Client 04" }, { name: "Client 05" },
    { name: "Client 06" }, { name: "Client 07" }, { name: "Client 08" }, { name: "Client 09" }, { name: "Client 10" }
  ],
  process: [
    { title: "Understand", description: "Deep-dive into your culture, technical stack, and strategic goals to align our search." },
    { title: "Source", description: "Targeted, discreet outreach to our curated network of passive and active top-tier talent." },
    { title: "Shortlist", description: "Rigorous technical and cultural screening to present only the most exceptional candidates." },
    { title: "Close", description: "Expert offer negotiation, onboarding support, and continuous follow-up to ensure retention." }
  ]
};
