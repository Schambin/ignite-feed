import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment'

import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    
                       <Avatar src="https://github.com/Schambin.png"/>
                    <div className={style.authorData}>
                        <span>Jane Cooper</span>
                        <p>Dev Front-End</p>    
                    </div>
                </div>

                    <time title='03 de Julho às 09:04h' dateTime="">Publicado à 1h</time>
            </header>

            <div className={style.postContent}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                👉
                </p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a></p><p><a href="#">#nlw</a></p> <p><a href="#">#rocketseat</a></p>
            </div>

            <form className={style.commentForm}>
                <div className={style.bottomContent}>
                    <div className={style.border} />
                    <span>Deixe seu feedback</span>
                    <textarea placeholder='Adicionar Comentário'/>
                </div>
                    <footer>
                        <button
                            type='submit'
                            className={style.formSubmit}
                            > Publicar </button>
                    </footer>

            </form>

            <div className={style.commentSection}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

