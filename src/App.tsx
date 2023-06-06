import { BrowserRouter } from 'react-router-dom';
import { RoutesNav } from "./Routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesNav />
      </BrowserRouter>
    </>
  );
}

export default App;