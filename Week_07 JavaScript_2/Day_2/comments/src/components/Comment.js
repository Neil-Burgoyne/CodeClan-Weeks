import React from 'react'

const Comment = ({id,children, author}) => {
    return(
        <>
        <h4>{id}. {children}</h4>
        <p>{author}</p>
        </>
    )
}

export default Comment