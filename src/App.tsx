import { Provider } from "react-redux";
import { store } from "./store";
import Search from "./components/Search";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="ui container">
        <h1>New York Times Article</h1>
        <Search />
      </div>
    </Provider>
  );
};

export default App;
