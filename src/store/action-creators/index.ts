import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchArticles = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_ARTICLES,
    });

    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        {
          params: {
            q: term,
            "api-key": "AqNm41Iz7YKcr7pP8zZGAziCEQMY4EeW",
          },
        }
      );

      //   console.log("res ", res);
      const articles = data.response.docs.map((doc: any) => {
        return doc.abstract;
      });

      dispatch({
        type: ActionType.SEARCH_ARTICLES_SUCCESS,
        payload: articles,
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log("error bor ", err);
        dispatch({
          type: ActionType.SEARCH_ARTICLES_ERROR,
          payload: err.message,
        });
      } else {
        console.log("bukan instance dari error");
      }
    }
  };
};
