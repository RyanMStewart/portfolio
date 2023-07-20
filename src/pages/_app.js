import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

import "@/styles/globals.css";
import { useResize } from "@/hooks";

function App({ Component, pageProps }) {
  useResize({
    callBack: () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    },
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return <Component {...pageProps} />;
}

export default App;
