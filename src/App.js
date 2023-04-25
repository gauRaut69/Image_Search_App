import './App.css';
// import Image from './components/Image';
import Main from './components/Main';
import Bookmarks from './components/Bookmarks'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Main/>
    //   {/* <Image/> */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/bookmark' element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
