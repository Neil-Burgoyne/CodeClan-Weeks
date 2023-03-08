import React, {useState} from'react'

const CommentForm = ({ handleSubmit }) => {
    const [author, setAuthor] = useState('')
    const [comment, setComment] = useState('')

    function onSubmit() {
        console.log(author);
        console.log(comment);
        
    }

   

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='author'>Author:</label>
            <input id='author' type="text" onChange={(event) => setAuthor(event.target.value)} />

            <label htmlFor='comment'>Comment:</label>
            <input id='comment' type="text" onChange={(event) => setComment(event.target.value)} />

            <input type="submit" />
        </form>
    )

}

export default CommentForm