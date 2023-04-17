import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 0,
    author: {
      avatarUrl: "https://github.com/Jairotsb.png",
      name: "Jairo Tunisse",
      role: "Desenvolvedor full stack",
    },
    content: [
      { type: "paragraph", content: "bem-vindo(a) ao meu projeto incrível! " },
      {
        type: "paragraph",
        content: "olá, esse aqui é meu projeto",
      },

      { type: "link", content: "jairotunisse.dev" },
    ],

    publishedAt: new Date("2023-04-12 23:29"),
  },

  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "bem-vindo(a) ao meu projeto incrível! " },
      {
        type: "paragraph",
        content: "olá, esse aqui é meu projeto",
      },
      { type: "link", content: "jairotunisse.dev" },
    ],

    publishedAt: new Date("2023-04-17 19:34:40"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
