import 'App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Play from 'pages/Play';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path='/' element={
            <Main titleText={'타조'}/>
          }/>
          <Route exact path='/:date' element={
            <Play/>
          }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;
