import { Avatar } from "./Avatar";
import { Comments } from "./Comment";
import style from "./Post.module.css";
export function Post() {
  return (
    <article className={style.post}>
      <header className={style.postHeader}>
        <div className={style.author}>
          <Avatar
            src="https://github.com/guipmendes.png"
          />
          <div className={style.authorInfo}>
            <strong>Guilherme Mendes</strong>
            <span> Developer</span>
          </div>
        </div>
        <time title="05 de janeiro de 2023" dataTime="2023-01-05 10:57:00">
          Publicado à 1h.
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a> <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comments />
      </div>
    </article>
  );
}
