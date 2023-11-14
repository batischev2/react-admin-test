import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='container'>
            <Home />
        </div>
        <Footer />
    </div>
  );
}

export default App;
