import { Reducer } from "react";
import { CommentActionTypes, CommentActions, CommentListState } from "./types";

export const initialState: CommentListState = {
  commentData: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CommentActionTypes.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, commentData: action.payload };
    case CommentActionTypes.FETCH_COMMENTS_FALIURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentActionTypes.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };

    case CommentActionTypes.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false };
    case CommentActionTypes.CREATE_COMMENT_FALIURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
