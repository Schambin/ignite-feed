import style from './sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            <img className="banner" src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            
            <div className={style.profile}>
                <strong> Kauan Arthur </strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}