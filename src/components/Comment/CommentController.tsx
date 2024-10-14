import React from 'react'
import CommentView, { CommentViewType } from "./CommentView"
import axios from 'axios';

function CommentController(props: any) {
    
    //function must get recipeUuid from props to function correctly
    type StructuredComment = {
        description: string,
        rating: number,
        recipeUuid: string
    }
    
    async function post(comment: CommentViewType){
        let recipeUuid = "Add recipe id here";
        if(props.recipeUuid){
            recipeUuid = props.recipeUuid
        }
        try {
            let response: any = await postComment({...comment, recipeUuid});
            if(!response.ok){
                throw new Error("Comment not created due to response error");
            } 
            else{
                console.log("comment posted sucessfully");
            }
            //call page update here
        } catch (error) {
            console.error(error);
        }
    }

    async function postComment(comment: StructuredComment){
        try{
            let response = await axios.post(`${URL}/users/login`, comment);
            //console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    return (
    <>
        <CommentView post={post}/>
    </>
  )
}

export default CommentController