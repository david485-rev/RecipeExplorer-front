import React, { useState } from 'react'

export type CommentViewType = {
    description: string,
    rating: number
}

function LoginView(props: any) {

    const [userInput, setUserInput] = useState<CommentViewType>({ description: "", rating: 0 });

    function handleSubmit(event: any) {
        event.preventDefault();
        props.post(userInput);
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="rating" className="commentForm">Rating</label>
            <input type="range" className="form-range" min="1" max="10" step="1" id="ratingRange" 
                onChange={(e: any) => setUserInput({ ...userInput, rating: e.target.value })}></input>
            <label htmlFor="Comment" className="commentForm" >Example textarea</label>
            <textarea className="form-text" id="descriptionTextBox" rows={3} 
                onChange={(e: any) => setUserInput({ ...userInput, description: e.target.value })}></textarea>
            
            <button type="submit">Post</button>
        </form>
    )
}

export default LoginView