import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className="font-inter500">
        <Header></Header>
        {router}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
