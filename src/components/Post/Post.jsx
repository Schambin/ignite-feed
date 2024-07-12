import style from './Post.module.css';
import ptBR from 'date-fns/locale/pt-BR';


import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { useState } from 'react';


export function Post(properties, ) {
    const [comments, setComments] = useState([
    ])

    const publishedDate = format(properties.publishedAt, "dd 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(properties.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function createNewComment() {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        
        setNewCommentText('');
        
    }
    
    function handleNewCommentChange(event) {
        setNewCommentText(event.target.value);
        event.target.setCustomValidity('');
    }
    
    function handleInvalidComment(event) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }
    
    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment!== commentToDelete;
        })
        
        setComments(commentsWithoutDeletedOne);
    }

    const [newCommentText, setNewCommentText] = useState('');

    const isNewCommentEmpty = newCommentText.length === 0


    
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    
                       <Avatar src={properties.author.avatarUrl}/>
                    <div className={style.authorData}>
                        <span>{properties.author.name}</span>
                        <p>{properties.author.role}</p>    
                    </div>
                </div>

                    <time title={publishedDate} dateTime={properties.publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={style.postContent}>
                {properties.content.map( line => {
                    if( line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if ( line.type === 'link' ) {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={createNewComment} className={style.commentForm}>

                <div className={style.bottomContent}>
                    <div className={style.border} />
                    <span>Deixe seu feedback</span>
                
                <textarea 
                    onChange={handleNewCommentChange} 
                    value={newCommentText} 
                    name='formSubmit' 
                    placeholder='Adicionar Comentário'
                    onInvalid={handleInvalidComment}
                    required
                />

                </div>

                <footer>
                    <button
                        type='submit'
                        className={style.formSubmit}
                        disabled={isNewCommentEmpty}
                        > Publicar </button>
                </footer>

            </form>

            <div className={style.commentSection}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />;
                })}
            </div>
        </article>
    )
}

