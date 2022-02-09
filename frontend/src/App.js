import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/notes" element={<MyNotes />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
      {/* <Header userName={'Akash Patel'} /> */}
    </BrowserRouter>
  );
}

export default App;
