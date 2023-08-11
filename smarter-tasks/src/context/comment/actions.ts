import { API_ENDPOINT } from "../../config/constants";
import { CommentActionTypes, CommentDispatch, CommentPayload } from "./types";

export const addComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
  comment: CommentPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentActionTypes.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    dispatch({ type: CommentActionTypes.CREATE_COMMENT_SUCCESS });
    refreshComment(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentActionTypes.CREATE_COMMENT_FALIURE,
      payload: "Unable to Create comment",
    });
  }
};

export const refreshComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentActionTypes.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    dispatch({
      type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
    console.dir(data);
  } catch (error) {
    console.error("Operation Failed:", error);
    dispatch({
      type: CommentActionTypes.FETCH_COMMENTS_FALIURE,
      payload: "Unable to fetch comments",
    });
  }
};
