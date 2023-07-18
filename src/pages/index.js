import { Header } from "@/components/elements";
import {
  About,
  Experiences,
  Introduction,
  Skills,
  Education,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Experiences />
      <Education />
    </div>
  );
}
