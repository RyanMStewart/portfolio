import { useResize } from "@/hooks";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  useResize({
    callBack: () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    },
  });

  return <Component {...pageProps} />;
}

export default App;
