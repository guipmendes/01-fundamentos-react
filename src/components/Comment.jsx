import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

export function Comments({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleCountLike(){
    setLikeCount(likeCount + 1)
  }

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
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentários" >
                <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleCountLike}>
                <ThumbsUp />
                Aplaudir < span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
