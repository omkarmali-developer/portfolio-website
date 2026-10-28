/**
 * Skills / tech stack — add a new skill by copying an entry below.
 * Required: id, title, src (import the icon), shadow (Tailwind shadow color class).
 */
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import springboot from "../assets/springboot.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import docker from "../assets/docker.svg";
import kubernetes from "../assets/kubernetes.svg";
import kafka from "../assets/kafka.svg";
import elasticsearch from "../assets/elasticsearch.svg";
import aws from "../assets/aws.svg";
import redis from "../assets/redis.svg";

const skills = [
  { id: 1, title: "Java", src: java, shadow: "shadow-orange-800" },
  { id: 2, title: "Spring Boot", src: springboot, shadow: "shadow-green-500" },
  { id: 3, title: "MySQL", src: mysql, shadow: "shadow-sky-300" },
  { id: 4, title: "MongoDB", src: mongodb, shadow: "shadow-green-700" },
  { id: 5, title: "Docker", src: docker, shadow: "shadow-blue-400", iconClass: "invert opacity-90" },
  { id: 6, title: "Kubernetes", src: kubernetes, shadow: "shadow-blue-600", iconClass: "invert opacity-90" },
  { id: 7, title: "Kafka", src: kafka, shadow: "shadow-gray-400", iconClass: "invert opacity-90" },
  { id: 8, title: "ElasticSearch", src: elasticsearch, shadow: "shadow-yellow-500", iconClass: "invert opacity-90" },
  { id: 9, title: "AWS", src: aws, shadow: "shadow-orange-500", iconClass: "invert opacity-90" },
  { id: 10, title: "Redis", src: redis, shadow: "shadow-red-500", iconClass: "invert opacity-90" },
  { id: 11, title: "HTML", src: html, shadow: "shadow-orange-500" },
  { id: 12, title: "CSS", src: css, shadow: "shadow-blue-500" },
  { id: 13, title: "JavaScript", src: javascript, shadow: "shadow-yellow-500" },
  { id: 14, title: "Git", src: github, shadow: "shadow-gray-400" },
];

export default skills;
