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
    <div className="mt-4">
      <h3 className="text-lg font-medium my-2">Comments</h3>
      <label htmlFor="commentBox" className="text-base">
        Comment something?
      </label>
      <div className="flex w-full justify-between items-center">
        <input
          id="commentBox"
          type="text"
          value={value}
          placeholder="New Comment"
          className="w-4/5 border rounded-md py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          id="addCommentBtn"
          className="h-min rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={onSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
      {comments.map((item) => {
        const time = item.createdAt.split("T");

        const timestamp = `${time[0]} - ${time[1].slice(0, 8)}`;
        return (
          <div
            key={item.id}
            className="comment p-2 rounded-md bg-gray-50 border-2 my-1"
          >
            <h4 className="flex w-full justify-between text-sm text-gray-700">
              <span>{item.User.name}</span>
              <span>{timestamp}</span>
            </h4>
            <p className="p-2">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
