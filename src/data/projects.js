/**
 * Portfolio projects — add a new project by copying an entry below.
 * Set demoUrl or codeUrl to null to hide that button.
 * Replace placeholder images with your own project screenshots when ready.
 */
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";

const projects = [
  {
    id: 1,
    title: "User Management REST API",
    description:
      "Spring Boot microservice with JWT authentication, role-based access control, and CRUD operations backed by MySQL.",
    image: reactWeather,
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    demoUrl: null,
    codeUrl: "https://github.com/omkarmali",
  },
  {
    id: 2,
    title: "Order Processing Microservice",
    description:
      "Event-driven order service handling order lifecycle, validation, and inter-service communication in a microservices setup.",
    image: reactSmooth,
    tags: ["Java", "Spring Boot", "Microservices"],
    demoUrl: null,
    codeUrl: "https://github.com/omkarmali",
  },
  {
    id: 3,
    title: "Product Catalog Service",
    description:
      "Scalable catalog API with MongoDB for flexible product storage, pagination, filtering, and search endpoints.",
    image: reactParallax,
    tags: ["Java", "Spring Boot", "MongoDB"],
    demoUrl: null,
    codeUrl: "https://github.com/omkarmali",
  },
  {
    id: 4,
    title: "Employee Management System",
    description:
      "Backend system for managing employee records with layered architecture, DTO mapping, and optimized SQL queries.",
    image: navbar,
    tags: ["Java", "Spring Boot", "MySQL"],
    demoUrl: null,
    codeUrl: "https://github.com/omkarmali",
  },
  {
    id: 5,
    title: "API Gateway & Service Integration",
    description:
      "Centralized API gateway routing requests to downstream microservices with authentication and request validation.",
    image: arrayDestruct,
    tags: ["Java", "Spring Boot", "REST API"],
    demoUrl: null,
    codeUrl: "https://github.com/omkarmali",
  },
  {
    id: 6,
    title: "Database Migration & Seeding Tool",
    description:
      "CLI utility for managing database migrations, seed data, and schema versioning across development environments.",
    image: installNode,
    tags: ["Java", "MySQL", "CLI"],
    demoUrl: null,
    codeUrl: "https://github.com/omkarmali",
  },
];

export default projects;
