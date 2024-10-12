import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer'
import { HomePage } from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
