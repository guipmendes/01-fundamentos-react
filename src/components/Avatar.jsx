import style from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
    return (
        <img
            className={hasBorder ? style.avatarHasBorder : style.avatar }
            src={src}
          />
    );
}