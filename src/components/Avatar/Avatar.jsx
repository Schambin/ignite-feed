import style from './Avatar.module.css';

//this component have border as a default property, if you want to dont have a border set the prop on the component to false (hasBorder = false)
export function Avatar({ hasBorder = true, src}) {
    return (
        <img className={ hasBorder ? style.avatarWithBorder : style.avatar } src={src} />
    )
}