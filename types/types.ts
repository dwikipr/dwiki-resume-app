interface Profile {
  name: string;
  email: string;
  title: string;
  company: string;
  status: string;
}

interface Actions {
  resume: string;
  welcome: string;
  connect: string;
  getInTouch: string;
}

interface Technology {
  icon: string;
  name: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  models: string;
  linkText: string;
  description: string;
  responsibilities: string[];
  technologies: Technology[];
}

interface QuoteOfTheDay {
  text: string;
  author: string;
}

interface Stack {
  icon: string;
  text: string;
  level: string;
}

interface Stacks {
  languages: Stack[];
  frameworks: Stack[];
}

interface ProjectTechnology {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  period: string;
  summary: string;
  goals: string;
  takeaways: string;
  media: string;
  technologies: ProjectTechnology[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ResumeData {
  profile: Profile;
  actions: Actions;
  summary: string;
  experiences: Experience[];
  quoteOfTheDay: QuoteOfTheDay[];
  stacks: Stacks;
  projects: Project[];
}
