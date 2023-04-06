import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego fernandes" content="Hello world" />
        </main>
      </div>
    </div>
  );
}

export default App;
