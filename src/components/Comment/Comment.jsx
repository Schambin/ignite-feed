import { PiTrash, PiThumbsUpBold } from "react-icons/pi";

import styles from './Comment.module.css';
import { Avatar } from "../Avatar/Avatar";

export function Comment(properties) {
    return (
        <div className={styles.commentSection}>
            <Avatar hasBorder={false} src="https://github.com/Schambin.png"/>
            <div className={styles.handleCommentBox}>
                <header className={styles.commentBox}>
                    <div className={styles.commentBoxUser}>
                        <div className={styles.userData}>
                            <strong>John Doe</strong>
                            <time title="03 de Julho às 09:04h">Cerca de 2h</time>
                        </div>
                            <button title="Deletar">
                                <PiTrash size={24}/>
                            </button>
                    </div>
                        <p>{properties.content}</p>
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