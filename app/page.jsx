//import { ArgentinaMap } from "./components/ArgentinaMap/ArgentinaMapLoader";

import dynamic from "next/dynamic";

const ArgentinaMap = dynamic(() => import("./components/ArgentinaMap/ArgentinaMap"), {
  ssr: false
});

import styles from "./page.module.css";

export default function Home() {



  return (<main className={styles.Main}>
      
    <div className="container mx-0">

      <h3 className="text-center text-light">Elige tu provincia</h3>

      <ArgentinaMap width="100%" height="75svh" />

    </div>

  </main>);
}
