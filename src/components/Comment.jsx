import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

export function Comments() {
  return (
    <div className={style.comment}>
      <Avatar hasBorder = {false} src="https://avatars.githubusercontent.com/u/26482927?v=4" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Guilherme Mendes</strong>
              <time
                title="05 de janeiro de 2023"
                dataTime="2023-01-05 10:57:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentários">
                <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
