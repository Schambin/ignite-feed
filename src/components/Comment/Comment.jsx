import { PiTrash, PiThumbsUpBold } from "react-icons/pi";

import styles from './Comment.module.css';

export function Comment() {
    return (
        <section className={styles.comment}>
            <img src="https://github.com/Schambin.png" />

            <header className={styles.commentBox}>
                <div className={styles.userData}>

                    <strong>John Doe (você)</strong> 
                    <time title="03 de Julho às 09:04h" datetime="">Cerca de 2h</time>

                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna sed vulputate ullamcorper, nunc velit fringilla felis, in consectetur risus felis vel diam.</p>
                <button title="Deletar">
                    <PiTrash size={20}/>
                </button>
            </header>
            <footer className={styles.applausePart}>
                <button title="Aplaudir">
                    <PiThumbsUpBold />
                </button>
                Aplaudir <span>20</span>
            </footer>
        </section>
    )
}