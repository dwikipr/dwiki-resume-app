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

interface StackContent {
  icon: string;
  name: string;
  level: string;
}

interface Stack {
  type: string;
  content: StackContent[];
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
  mediaType: 'videos' | 'images';
  technologies: ProjectTechnology[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ResumeData {
  profile: Profile;
  actions: Actions;
  summary: string;
  experiences: Experience[];
  quoteOfTheDay: QuoteOfTheDay[];
  stacks: Stack[];
  projects: Project[];
}
