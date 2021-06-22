import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:issueNumber" component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
