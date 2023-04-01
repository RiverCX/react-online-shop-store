import { Footer, Navbar, Sidebar } from "components";
import { useAppRoutes } from "./routes/index";

function App() {
  const routes = useAppRoutes();
  return (
    <div className="App">
      <Navbar />
      {routes}
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
