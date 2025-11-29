export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details?: string;
  grade?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Language {
  name: string;
  level: string; // e.g., "Native", "Fluent", "C2"
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  socials?: {
    linkedin?: string;
  };
}

export interface Project {
  title: string;
  role: string;
  type: string;
  description: string;
  year: string;
  color: string;
}