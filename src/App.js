import "./App.css";
import Home from "components/Home/Home";
import { ErrorBoundary } from "react-error-boundary";
import Error from "components/Error/Error";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
