import { ActionType } from '../action-types';

interface SearchArticlesAction {
  type: ActionType.SEARCH_ARTICLES;
}

interface SearchArticlesSuccessAction {
  type: ActionType.SEARCH_ARTICLES_SUCCESS;
  payload: string[];
}

interface SearchArticlesErrorAction {
  type: ActionType.SEARCH_ARTICLES_ERROR;
  payload: string;
}

export type Action =
  | SearchArticlesAction
  | SearchArticlesSuccessAction
  | SearchArticlesErrorAction;
