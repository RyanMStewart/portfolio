import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    raf();
  }, []);

  return <Component {...pageProps} />;
}

export default App;
