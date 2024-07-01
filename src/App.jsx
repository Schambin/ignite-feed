import { Post } from "./Post";
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
              <Post
                author="Kauan Arthur"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi quam temporibus repellat iste. Sed minus, consequuntur accusantium suscipit labore fugit similique alias, est nemo atque eos eveniet odio nihil."
                />
              <Post
                author="Sacudo da Silva"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi quam temporibus repellat iste. Sed minus, consequuntur accusantium suscipit labore fugit similique alias, est nemo atque eos eveniet odio nihil."
                />  
            </main>
      </div>

    </div>
  )
}