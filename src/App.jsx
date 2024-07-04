import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/header";
import { Sidebar } from "./components/Sidebar/sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

        <div className={styles.wrapper}>

          <Sidebar>
            <h1>Sidebar</h1>
          </Sidebar>

          <main>
            <Post />
            {/* <Post /> */}
          </main>

        </div>

    </div>
  )
}