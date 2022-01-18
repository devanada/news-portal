import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Card from "./Card";

const Search = () => {
  const [term, setTerm] = useState<string>("");
  const { searchArticles } = useActions();
  const { data, loading, error } = useTypedSelector((state) => state.articles);

  const onSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event
  ) => {
    event.preventDefault();

    searchArticles(term);
  };

  return (
    <div className="ui form">
      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="ui button">Submit</button>
        </div>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <div className="ui celled list">
          {data.map((article) => (
            <Card key={article}>{article}</Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
