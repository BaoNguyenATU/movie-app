import './App.css';
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let x = 5;
  return (
    <div className="App">
        asdf{}
        <h2>It is {new Date().toLocaleDateString()}</h2>
        <Content></Content>
        <Header></Header>
        <Footer></Footer>
    </div>
  );
}

export default App;
