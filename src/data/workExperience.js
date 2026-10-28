/**
 * Work experience — add a new role by copying an entry below.
 * Set `current: true` for your present role.
 */
const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Your Company Name",
    period: "2022 – Present",
    location: "Remote",
    current: true,
    highlights: [
      "Designed and developed RESTful microservices using Java and Spring Boot",
      "Implemented business logic, validation, and exception handling across backend services",
      "Designed and optimized relational and NoSQL database schemas for MySQL and MongoDB",
      "Wrote unit and integration tests to ensure API reliability and code quality",
      "Collaborated in Agile teams on API contracts, code reviews, and sprint delivery",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "MySQL", "MongoDB"],
  },
  {
    id: 2,
    role: "Junior Software Engineer",
    company: "Previous Company Name",
    period: "2021 – 2022",
    location: "India",
    current: false,
    highlights: [
      "Built and maintained backend APIs with Java and Spring Boot",
      "Assisted in database query optimization and schema design",
      "Participated in code reviews, debugging, and sprint planning",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
];

export default workExperience;
