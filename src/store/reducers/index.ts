import { type } from "os";
import { combineReducers } from "redux";
import articlesReducers from "./ArticlesReducer";

const reducers = combineReducers({
  articles: articlesReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
