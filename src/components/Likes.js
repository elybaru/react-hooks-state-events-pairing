import React, { useState } from "react";

function Likes({ video }) {
    const [thumbsUp, setThumbsUp] = useState(video.upvotes);
    const [thumbsDown, setThumbsDown] = useState(video.downvotes)

    function handleThumbsUp(event) {
        setThumbsUp(thumbsUp + 1);

    }

    function handleThumbsDown(event) {
        setThumbsDown(thumbsDown + 1);
    }
    return (
        <div>
            <button onClick={handleThumbsUp}>{thumbsUp} 👍 </button>
            <button onClick={handleThumbsDown}>{thumbsDown} 👎</button>
        </div>

    )
}

export default Likes;