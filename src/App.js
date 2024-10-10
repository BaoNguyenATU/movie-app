import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
{/**Importing necesssery components */}

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/*Displaying Home page*/}
        <Route path="/home" element={<Content />} />
        {/*Displaying Read page*/}
        <Route path="/read" element={<h1>Read Component</h1>} />
        {/*Displaying Create page*/}
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;