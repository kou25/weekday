export interface drowdownInterface {
  id: string;
  value: string;
  disabled?: boolean;
}

export const remoteOptions: drowdownInterface[] = [
  { id: "remote", value: "Remote" },
  { id: "on-site", value: "On-site" }
];

export const techStackOptions: drowdownInterface[] = [
  { id: "python", value: "Python" },
  { id: "java", value: "Java" },
  { id: "golang", value: "GoLang" },
  { id: "ruby", value: "Ruby/rails" },
  { id: "cpp", value: "C++" },
  { id: "kotlin", value: "Kotlin" },
  { id: "django", value: "Django" },
  { id: "csharp", value: "C#" },
  { id: "graphql", value: "GraphQl" },
  { id: "flask", value: "Flask" },
  { id: "typescript", value: "Typescript" },
  { id: "aws", value: "AWS" },
  { id: "javascript", value: "Javascript" },
  { id: "node", value: "Node" },
  { id: "rust", value: "Rust" },
  { id: "react", value: "React" }
];

export const minBasePayOptions: drowdownInterface[] = Array.from(
  { length: 8 },
  (_, i) => {
    return { id: i.toString(), value: `${i * 10}L` };
  }
);

export const experiences: drowdownInterface[] = Array.from(
  { length: 10 },
  (_, i) => {
    return { id: (i + 1).toString(), value: (i + 1).toString() };
  }
);

export const roles: drowdownInterface[] = [
  // Engineering:
  { id: "engineering", value: "Engineering", disabled: true },
  { id: "backend", value: "Backend" },
  { id: "frontend", value: "Frontend" },
  { id: "fullstack", value: "Fullstack" },
  { id: "iOS", value: "iOS" },
  { id: "flutter", value: "Flutter" },
  { id: "react-native", value: "React Native" },
  { id: "android", value: "Android" },
  { id: "frontend", value: "Frontend" },
  { id: "tech-lead", value: "Tech Lead" },
  { id: "dev-ops", value: "DevOps" },
  { id: "data-engineer", value: "Data Engineer" },
  { id: "data-science", value: "Data Science" },
  { id: "computer-vision", value: "Computer Vision" },
  { id: "nlp", value: "NLP" },
  { id: "deep-learning", value: "Deep Learning" },
  { id: "test-qa", value: "Test / QA" },
  { id: "web3", value: "Web3" },
  { id: "sre", value: "SRE" },
  { id: "data-infrastructure", value: "Data Infrastructure" },
  // Design:
  { id: "design", value: "Design", disabled: true },
  { id: "designer", value: "Designer" },
  { id: "design-manager", value: "Design Manager" },
  { id: "graphic-designer", value: "Graphic Designer" },
  { id: "product-designer", value: "Product Designer" },
  // Product:
  { id: "product", value: "Product", disabled: true },
  { id: "product-manager", value: "Product Manager" },
  // Operations:
  { id: "operations", value: "Operations", disabled: true },
  { id: "operations-manager", value: "Operations Manager" },
  { id: "founders-office", value: "Founder’s Office/Chief Of Staff" },
  // Sales:
  { id: "sales", value: "Sales", disabled: true },
  {
    id: "sales-development-representative",
    value: "Sales Development Representative"
  },
  { id: "account-executive", value: "Account Executive" },
  { id: "account-manager", value: "Account Manager" },
  // Marketing:
  { id: "marketing", value: "Marketing", disabled: true },
  { id: "digital-marketing-manager", value: "Digital Marketing Manager" },
  { id: "growth-hacker", value: "Growth Hacker" },
  { id: "product-marketing-manager", value: "Product Marketing Manager" },
  // Other Engineering:
  { id: "other-engineering", value: "Other Engineering", disabled: true },
  { id: "hardware", value: "Hardware" },
  { id: "mechanical", value: "Mechanical" },
  { id: "systems", value: "Systems" },
  // Business Analyst:
  { id: "ba", value: "Business Analyst", disabled: true },
  { id: "business-analyst", value: "Business Analyst" },
  // Data Analyst:
  { id: "da", value: "Data Analyst", disabled: true },

  { id: "data-analyst", value: "Data Analyst" },
  // Project Manager:
  { id: "pm", value: "Project Manager", disabled: true },
  { id: "project-manager", value: "Project Manager" },
  // Management:
  { id: "Mngnt", value: "Management", disabled: true },
  { id: "management", value: "Management" },
  // Legal:
  { id: "Legal-1", value: "Legal", disabled: true },
  { id: "legal", value: "Legal" },
  // HR:
  { id: "HR-1", value: "HR", disabled: true },
  { id: "hr", value: "HR" },
  // Finance:
  { id: "Fin-1", value: "Finance", disabled: true },
  { id: "finance", value: "Finance" }
];
