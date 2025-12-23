import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="size-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero />
      <Summary />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}