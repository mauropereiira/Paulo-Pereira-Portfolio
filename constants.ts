import { Experience, Education, Skill, Language, ProfileData, Project } from './types';

// Image served from public folder - will be available at /profile.jpg
export const PROFILE_IMAGE_URL = '/profile.jpg';

export const PROFILE: ProfileData = {
  name: "Paulo Pereira",
  title: "Senior Interpreter and Translator",
  summary: "Senior Interpreter and Translator with 6+ years of professional interpretation experience and more than 5,000 hours of audio and video interpreting across healthcare, legal, and corporate sectors. Awarded the Senior Interpreter Certificate in 2023. Fluent in Portuguese, English, and French. Skilled in accurate, culturally sensitive communication, translation, and proofreading, with a background in teaching and editorial work.",
  contact: {
    location: "Lisbon, Portugal",
    phone: "+351 967915402",
    email: "paulojorge_pereira@yahoo.com"
  }
};

export const SKILLS: Skill[] = [
  { name: "Audio/Video Interpretation", level: 98 },
  { name: "Translation & Proofreading", level: 95 },
  { name: "Cultural Adaptation", level: 95 },
  { name: "Training & Mentoring", level: 85 },
  { name: "Crisis Communication", level: 90 },
  { name: "Technical Terminology", level: 92 }
];

export const LANGUAGES: Language[] = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent (C2)" },
  { name: "French", level: "Fluent (C2)" }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Teleperformance",
    role: "Customer Service Representative (Interpreter)",
    period: "Feb 2019 – Present",
    location: "Lisbon, Portugal",
    description: [
      "Deliver professional audio and video interpretation services in English and Portuguese across healthcare, legal, and corporate sectors.",
      "Completed more than 5,000 hours of interpretation, earning the Senior Interpreter Certificate in 2023.",
      "Consistently recognized for accuracy, cultural sensitivity, and clear communication in high-pressure environments.",
      "Supported international clients by bridging language gaps, improving customer satisfaction."
    ]
  },
  {
    company: "Fujitsu",
    role: "Helpdesk Agent",
    period: "Jun 2015 – Jun 2017",
    location: "Lisbon, Portugal",
    description: [
      "Provided remote IT support to corporate users of TOTAL, diagnosing and resolving software and hardware issues.",
      "Acted as first point of contact for international clients, delivering clear guidance and technical solutions in English and French.",
      "Participated in six company-sponsored volunteering projects with Entreajuda."
    ]
  },
  {
    company: "Timekeepers",
    role: "English Teacher",
    period: "2006 – 2014",
    location: "Amora, Portugal",
    description: [
      "Taught English to elementary school students at E.B. Paivas and E.B. Fogueteiro.",
      "Adapted lesson plans to different student needs and learning levels.",
      "Helped students build confidence in English communication."
    ]
  },
  {
    company: "Centro Europeu de Línguas",
    role: "English Teacher",
    period: "2002 – 2006",
    location: "Lisbon, Portugal",
    description: [
      "Taught English to groups and individuals across all ages and levels.",
      "Tailored lessons to different learning goals, from beginners to advanced."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master's Degree in Modern Languages and Literatures",
    institution: "University of Lisbon, Faculty of Liberal Arts",
    grade: "13/20",
    details: "Specialized in French & English. Developed fluency in both languages and strong academic writing skills."
  },
  {
    degree: "Pass Degree in French Language",
    institution: "Alliance Française",
    grade: "13.5/20",
    details: "Completed advanced French studies, focusing on linguistic nuances and literature."
  },
  {
    degree: "First Certificate & Proficiency in English",
    institution: "Cambridge School",
    grade: "Grade B",
    details: "Demonstrated advanced fluency in English, both written and spoken."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "The Capuchos' Convent",
    role: "Translator & Reviser",
    type: "Book Translation",
    description: "Translated and revised the historic course and interpretative guide 'The Capuchos' Convent of the Sierra of Sintra' by Nuno Miguel Gaspar. Ensured the translation matched the author's academic tone.",
    year: "2008",
    color: "from-amber-700 to-amber-900"
  },
  {
    title: "Essential London",
    role: "Translator",
    type: "Tourist Guide",
    description: "Full translation and cultural adaptation of the 'Essential London' tourist guide for Arte Plural Edições. Focused on clarity and engagement for an international Portuguese-speaking audience.",
    year: "2007",
    color: "from-blue-700 to-blue-900"
  },
  {
    title: "NÚMERO MAGAZINE",
    role: "Critic & Translator",
    type: "Editorial",
    description: "Produced translations, retroversions, record reviews, and opinion pieces from issue 0 through issue 16. A key contributor to the magazine's cultural coverage.",
    year: "2001-2003",
    color: "from-red-700 to-red-900"
  },
  {
    title: "Dance Cartography",
    role: "Proofreader",
    type: "Academic Document",
    description: "Final text revision of '(Documento) - Contributo para uma cartografia da dança contemporânea em Portugal' for RE.AL. Ensured precision and consistency in language and style.",
    year: "2002",
    color: "from-slate-600 to-slate-800"
  }
];

export const CERTIFICATES: string[] = [
  "Senior Interpreter Certificate (5,000+ hours), Teleperformance"
];