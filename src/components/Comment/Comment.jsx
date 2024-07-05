import { PiTrash, PiThumbsUpBold } from "react-icons/pi";

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.commentSection}>
            <img src="https://github.com/Schambin.png" />
            <div>
                <header className={styles.commentBox}>
                    <div className={styles.commentBoxUser}>
                        <div className={styles.userData}>
                            <strong>John Doe <span>(você)</span></strong>
                            <time title="03 de Julho às 09:04h">Cerca de 2h</time>
                        </div>
                            <button title="Deletar">
                                <PiTrash size={24}/>
                            </button>
                    </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna sed vulputate ullamcorper, nunc velit fringilla felis, in consectetur risus felis vel diam.</p>
                </header>
                <footer className={styles.applauseSection}>
                    <button title="Aplaudir">
                        <PiThumbsUpBold size={20}/>
                        Aplaudir <span>20</span>
                    </button> 
                </footer>
            </div>
        </div>
    )
}