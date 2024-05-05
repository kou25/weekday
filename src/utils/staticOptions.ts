export interface drowdownInterface {
  id: string;
  value: string;
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
