import './App.css';
import FirstPage from './components/FirstPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <div>
        <FirstPage />
      </div>
      <div className='h-[653px]'>
        <AboutUs />
      </div>

    </div>
  );
}

export default App;
