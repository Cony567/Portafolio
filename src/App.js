
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='adaptacion'>
        <Main/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
