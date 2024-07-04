import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img 
                        src="https://github.com/Schambin.png" 
                        alt="" 
                        className={style.authorImage}
                    />
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

            <footer>
                <div className={style.bottomContent}>
                    <div className={style.border} />
                    <span>Deixe seu feedback</span>
                    <textarea />
                    <button>Publicar</button>
                </div>
            </footer>
        </article>
    )
}