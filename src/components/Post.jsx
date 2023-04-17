import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({author, publishedAt }) {


  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', 
    month: 'long', 
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="10 de abril ás 22:20" dateTime="2023-04-17 01:08:50">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        <p>fdp</p>

        <p>
          Nosso objetivo principal é [insira aqui o objetivo principal do
          projeto], e estamos animados para trabalhar duro e alcançá-lo.
          Agradecemos a todos que nos apoiaram até aqui, e convidamos você a
          colaborar conosco. Envie suas ideias e sugestões, e juntos, faremos a
          diferença!
        </p>
        <p>
          <a href="">jairotunisse.dev</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Enviar comentário</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
