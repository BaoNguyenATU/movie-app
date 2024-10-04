import './App.css';
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar';

function App() {
  let x = 5;
  return (
    <div className="App">
        asdf{}
        <h2>It is {new Date().toLocaleDateString()}</h2>
        <Content/>
        <Header/>
        <Footer/>
        <NavigationBar/>
    </div>
  );
}

export default App;
