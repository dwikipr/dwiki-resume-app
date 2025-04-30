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

interface TechUsed {
  icon: string;
  text: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  linkText: string;
  description: string;
  techUsed: TechUsed[];
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

interface Project {
  title: string;
  description: string;
  media: string;
}

interface ResumeData {
  profile: Profile;
  actions: Actions;
  summary: string;
  experiences: Experience[];
  quoteOfTheDay: QuoteOfTheDay[];
  stacks: Stacks;
  projects: Project[];
}
