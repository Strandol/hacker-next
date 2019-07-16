import Comment from './Comment'

const CommentList = ({ comments }) => (
    <React.Fragment>
        {comments.map(c => 
            <Comment key={c.id} comment={c} />
        )}
    </React.Fragment>
)

export default CommentList
