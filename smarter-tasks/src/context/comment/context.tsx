import React, { createContext, useContext, useReducer } from "react";
import { CommentDispatch, CommentListState } from "./types";
import { commentReducer, initialState } from "./reducer";

const CommentStateContext = createContext<CommentListState>(initialState);
const CommentDispatchContext = createContext<CommentDispatch>(() => {
  null;
});

export const CommntProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Create a state and dispatch with `useReducer` passing in the `taskReducer` and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(commentReducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);
