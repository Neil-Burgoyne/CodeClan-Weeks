import React, {useState} from 'react'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

const CommentBox = () => {

    const [comments, setComments] = useState([
        {
          id: 1,
          author: "Neil",
          text: "Coding"
        },
        {
          id: 2,
          author: "Prime",
          text: "Best AI"
        }
      ])
    return (
    <>
        <h1>Comments!</h1>
        <CommentList comments={comments}></CommentList>
        <CommentForm/>
    </>
    )
}

export default CommentBox