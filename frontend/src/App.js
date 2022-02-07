import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/notes" element={<MyNotes />} />
      </Routes>
      {/* <Header userName={'Akash Patel'} /> */}
    </BrowserRouter>
  );
}

export default App;
