import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const router = useRoutes(routes);
  return (
    <>
    <Header></Header>
      {router}
      <Footer></Footer>
    </>
  );
}

export default App;
