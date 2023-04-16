import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time title="10 de abril ás 22:20" dateTime={props.publishedAt}>
          Publica há mais ou menos duas horas
        </time>
      </header>

      <div className={styles.content}>
        <p>{props.content}</p>

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
