import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/category/Category";
import Cook from "./components/cook/cook";

function App() {
  return (
    <div className="body">
      <Header />
      <Home />
      <Cook />
      <Category />
    </div>
  );
}

export default App;
