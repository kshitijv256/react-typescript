import React, { useEffect, useState } from "react";
import { addComment, refreshComment } from "../../context/comment/actions";
import {
  useCommentDispatch,
  useCommentState,
} from "../../context/comment/context";

interface CommentProps {
  projectID?: string;
  taskID?: string;
}
export const Comments = (props: CommentProps) => {
  const [value, setValue] = useState("");
  const commentDispatch = useCommentDispatch();
  const commentState = useCommentState();
  const comments = commentState.commentData;

  useEffect(() => {
    if (props.taskID && props.projectID) {
      refreshComment(commentDispatch, props.projectID, props.taskID);
    }
  }, [commentDispatch, props.projectID, props.taskID]);

  const onSubmit = async () => {
    const userJson = localStorage.getItem("userData") || "";
    const user = JSON.parse(userJson);
    addComment(commentDispatch, props.projectID ?? "", props.taskID ?? "", {
      description: value,
      owner: user.id,
    });
  };
  return (
    <div>
      <label htmlFor="newComment">Comment</label>
      <input
        id="newComment"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onSubmit}>Add</button>
      {comments.map((item) => {
        return <p>{item.description}</p>;
      })}
    </div>
  );
};
