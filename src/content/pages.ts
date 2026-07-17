export const pageContent = {
  home: {
    hero: {
      eyebrow: "Premium Software & Digital Solutions",
      title: "We Build Digital Solutions That",
      accent: "Elevate Businesses.",
      description: "Qorvexa Innovations designs and engineers custom software, high-performance web applications, commerce platforms, hospitality systems, mobile experiences, and scalable digital products around real business needs.",
    },
    solutionAreas: ["Commerce", "Hospitality", "Pet Care", "Booking", "Business Sites", "Operations"],
  },
  about: {
    hero: {
      eyebrow: "About Qorvexa",
      title: "Engineering Digital Growth With Clarity, Craft, and",
      accent: "Commitment.",
      description: "Qorvexa Innovations brings product thinking, experience design, and software engineering together to create useful, dependable digital products.",
    },
  },
  services: {
    hero: {
      eyebrow: "Our Services",
      title: "End-to-End Digital Services Built for",
      accent: "Performance.",
      description: "From discovery and product design through engineering, validation, deployment, and support, each engagement is shaped around a clear business outcome.",
    },
  },
  solutions: {
    hero: {
      eyebrow: "Industry Solutions",
      title: "Digital Solutions Tailored to",
      accent: "Real Business Models.",
      description: "We adapt product strategy and technology to the way each business serves customers, manages operations, and plans for growth.",
    },
  },
  products: {
    hero: {
      eyebrow: "Our Products",
      title: "Products and Platforms Designed to",
      accent: "Scale.",
      description: "Explore Qorvexa product concepts and configurable platform foundations for commerce, hospitality, bookings, and business operations.",
    },
  },
  process: {
    hero: {
      eyebrow: "How We Work",
      title: "A Clear, Collaborative Process From",
      accent: "Idea to Launch.",
      description: "A transparent delivery model connects discovery, strategy, design, engineering, testing, launch, and continued improvement.",
    },
  },
  portfolio: {
    hero: {
      eyebrow: "Our Work",
      title: "Selected Work That Delivers",
      accent: "Meaningful Impact.",
      description: "A structured case-study library prepared for verified Qorvexa projects, product decisions, technology choices, and approved outcomes.",
    },
  },
  team: {
    hero: {
      eyebrow: "Our Team",
      title: "Designers, Engineers, and Builders Behind",
      accent: "Qorvexa.",
      description: "Our delivery model brings product strategy, design, engineering, quality, and project coordination together around one shared goal.",
    },
  },
  careers: {
    hero: {
      eyebrow: "Careers",
      title: "Build Digital Products With a Team That Cares About",
      accent: "Craft.",
      description: "Qorvexa is creating a thoughtful product culture for people who care about clear thinking, responsible delivery, and continuous learning.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact Us",
      title: "Let’s Build Something Meaningful",
      accent: "Together.",
      description: "Share the product, platform, or business challenge you would like to discuss. We’ll use that context to shape a useful first conversation.",
    },
  },
} as const;

export const whyQorvexa = [
  { title: "Business-Focused", description: "Product decisions connect to a real user need, operational requirement, or business outcome." },
  { title: "Engineering-Led", description: "Architecture, security, maintainability, and performance are considered from the start." },
  { title: "Design-Conscious", description: "Clear journeys and consistent interfaces make complex products easier to understand." },
  { title: "Transparent Delivery", description: "Scope, trade-offs, decisions, and next steps remain visible throughout the work." },
] as const;

export const deliveryPhases = [
  { title: "Discovery", description: "Understand the business, users, constraints, and desired outcomes.", deliverables: ["Stakeholder context", "Problem definition"] },
  { title: "Strategy", description: "Prioritize scope, architecture, milestones, and delivery decisions.", deliverables: ["Solution direction", "Delivery roadmap"] },
  { title: "UX & UI Design", description: "Shape user flows, wireframes, prototypes, and the interface system.", deliverables: ["User journeys", "Validated interface"] },
  { title: "Development", description: "Build the product in reliable, reviewable increments.", deliverables: ["Working software", "Integrated modules"] },
  { title: "Testing", description: "Validate functionality, usability, responsiveness, and release quality.", deliverables: ["Quality review", "Release readiness"] },
  { title: "Deployment", description: "Prepare environments, release safely, and verify production behavior.", deliverables: ["Production release", "Operational checks"] },
  { title: "Support & Growth", description: "Maintain, learn, and improve the product after launch.", deliverables: ["Enhancement plan", "Ongoing support"] },
] as const;

export const deliveryPrinciples = [
  { title: "Collaborative", description: "Key decisions are made with the right people involved." },
  { title: "Transparent", description: "Progress, risks, and trade-offs are communicated clearly." },
  { title: "Iterative", description: "Useful increments create faster feedback and lower delivery risk." },
  { title: "Outcome-Led", description: "Work is prioritized around user and business value." },
] as const;

export const teamDisciplines = [
  { title: "Product & Strategy", description: "Problem framing, scope, roadmaps, and product decisions." },
  { title: "Experience Design", description: "Research, flows, interface systems, and prototypes." },
  { title: "Frontend Engineering", description: "Responsive, accessible, and high-performance interfaces." },
  { title: "Backend Engineering", description: "APIs, data, integrations, permissions, and business logic." },
  { title: "Quality Assurance", description: "Functional, responsive, regression, and release validation." },
  { title: "Cloud & Delivery", description: "Environments, deployment, monitoring, and operational readiness." },
] as const;

export const cultureBenefits = [
  { title: "Learning Culture", description: "Time and support for improving product and engineering craft." },
  { title: "Flexible Collaboration", description: "Remote and hybrid collaboration designed around clear outcomes." },
  { title: "Meaningful Work", description: "Products are approached through real problems and user needs." },
  { title: "Supportive Practice", description: "Reviews, feedback, documentation, and shared ownership." },
] as const;

export const technologyPrinciples = [
  { title: "Fit Before Fashion", description: "Choose technology for the product and operating context, not for novelty." },
  { title: "Modular Foundations", description: "Separate concerns so products can evolve without unnecessary rewrites." },
  { title: "Secure by Design", description: "Treat access, data, validation, and safe defaults as architectural concerns." },
  { title: "Observable Delivery", description: "Plan for environments, monitoring, maintenance, and clear operational ownership." },
] as const;

export const serviceFaqs = [
  { question: "How is the right service scope selected?", answer: "The first step is to understand the business problem, users, constraints, and intended outcome. The service mix and delivery scope can then be shaped around that context." },
  { question: "Can Qorvexa work with an existing product?", answer: "Yes. An initial review can establish the current architecture, product risks, priorities, and the safest path for improving or extending it." },
  { question: "Is design included with development?", answer: "Design can be included when the product needs research, user flows, interface design, prototyping, or a reusable design system. The required design depth is defined during planning." },
  { question: "What happens after launch?", answer: "Maintenance, issue resolution, monitoring, and enhancement work can be scoped as part of the delivery plan when the product requires continued support." },
] as const;

export const contactFaqs = [
  { question: "What information is useful for a first conversation?", answer: "A short description of the problem, intended users, current process, desired outcome, preferred timeline, and any known constraints is enough to begin." },
  { question: "Do I need a finished specification?", answer: "No. Qorvexa can begin with an idea, an existing workflow, or a partially defined product and use discovery to clarify the next practical step." },
  { question: "Can collaboration happen remotely?", answer: "Yes. Qorvexa's verified working model includes remote and hybrid collaboration from India." },
  { question: "How should confidential information be shared?", answer: "Use the enquiry form for non-sensitive context only. Confidential materials and access details should be shared later through an agreed secure channel." },
] as const;
