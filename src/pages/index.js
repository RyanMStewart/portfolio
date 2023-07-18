import { Header } from "@/components/elements";
import { About, Introduction } from "@/components/sections";

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <Introduction />
      <About />
    </div>
  );
}
