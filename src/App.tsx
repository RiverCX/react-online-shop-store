import { Footer, Navbar, Sidebar } from "components";
import { AuthWrapper } from "pages";
import { useAppRoutes } from "./routes/index";

function App() {
  const routes = useAppRoutes();
  return (
    <div className="App">
      <AuthWrapper>
        <Navbar />
        {routes}
        <Sidebar />
        <Footer />
      </AuthWrapper>
    </div>
  );
}

export default App;
