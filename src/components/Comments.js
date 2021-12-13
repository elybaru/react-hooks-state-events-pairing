import React, { useState } from "react";
import CommentItem from "./CommentItem";

function Comments({ video }) {
    const [toggleDetails, setToggleDetails] = useState(false)

    function handleClick() {
        setToggleDetails(!toggleDetails);
    }

    const commentsToDisplay = video.comments.map(comment =>
        <CommentItem key={comment.id} comment={comment} />
    )

    {/* // <h2>{video.comments.length} Comments</h2> */ }

    return (
        <>
            <div>
                <button onClick={handleClick}>{toggleDetails ? "Hide Comments" : "Show Comments"}</button>
            </div>
            <div>{toggleDetails ? commentsToDisplay : null}

            </div>
        </>



    )
}

export default Comments;