import style from './Comment.module.css'
import { PiTrash } from "react-icons/pi";

export function Comment() {
    return (
        <section className={style.comment}>
            <img src="https://github.com/Schambin.png" />

            <div className="commentBox">
                <div className="userData">

                    <span>John Doe</span> 
                    <span>(você)</span>
                    <time title="03 de Julho às 09:04h" datetime="">Cerca de 2h</time>
                    
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna sed vulputate ullamcorper, nunc velit fringilla felis, in consectetur risus felis vel diam.</p>
                <PiTrash />
            </div>
        </section>
    )
}