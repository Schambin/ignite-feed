import style from './Post.module.css';

export function Post(props) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img src="" alt="" />
                    <span>Jane Cooper</span>
                    <p>Dev Front-End</p>
                </div>

                <span>Publicado à 1h</span>
            </header>

            <main>
                <div>
                    Fala galeraa 👋
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    👉 jane.design/doctorcare
                    #novoprojeto #nlw #rocketseat
                </div>
            </main>

            <footer>
                <span>Deixe seu feedback</span>
                <input type="text" />
                <button>Publicar</button>
            </footer>
        </article>
    )
}