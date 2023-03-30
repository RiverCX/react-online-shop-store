import { Footer, Nav, Sidebar } from "components";
import { useAppRoutes } from "./routes/index";

function App() {
  const routes = useAppRoutes();
  return (
    <div className="App">
      <Nav />
      {routes}
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
