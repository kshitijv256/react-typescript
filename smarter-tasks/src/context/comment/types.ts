export type Comment = {
  id: number;
  description: string;
  task_id: number;
  owner: number;
};

export type CommentListState = {
  commentData: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

export type CommentPayload = Omit<Comment, "id" | "task_id">;

export enum CommentActionTypes {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FALIURE = "FETCH_COMMENTS_FALIURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FALIURE = "CREATE_COMMENT_FALIURE",
}

export type CommentActions =
  | { type: CommentActionTypes.FETCH_COMMENTS_REQUEST }
  | { type: CommentActionTypes.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: CommentActionTypes.FETCH_COMMENTS_FALIURE; payload: string }
  | { type: CommentActionTypes.CREATE_COMMENT_REQUEST }
  | { type: CommentActionTypes.CREATE_COMMENT_SUCCESS }
  | { type: CommentActionTypes.CREATE_COMMENT_FALIURE; payload: string };

export type CommentDispatch = React.Dispatch<CommentActions>;
