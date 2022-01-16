import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header userName={'Akash Patel'} />
      <LandingPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
