import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {

    const commentNodes = comments.map(comment => {
        <Comment key={comment.id} id={comment.id} author={comment.author}>{comment.text}</Comment>
    })

    return(
    <>
        {commentNodes}
    </>
    )
}

export default CommentList