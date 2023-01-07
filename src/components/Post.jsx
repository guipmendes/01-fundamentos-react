import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React, { useState } from "react";

import { Avatar } from "./Avatar";
import { Comments } from "./Comment";

import style from "./Post.module.css";

export function Post(props) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h' ",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete){

    const commentWithoutDeleteOn = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentWithoutDeleteOn);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={style.post}>
      <header className={style.postHeader}>
        <div className={style.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{props.author.name}</strong>
            <span> {props.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {props.content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />

        <footer>
          <button type="submit" disabled= {isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return <Comments key={comment} content={comment} onDeleteComment = {deleteComment} />;
        })}
      </div>
    </article>
  );
}
