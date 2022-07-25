import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import ViewAll from './components/allPirates';
import AddForm from './components/addPirate';
import ViewOne from './components/viewOne';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<ViewAll/>} />
          <Route path="/pirates/add" element={<AddForm/>} />
          <Route path='/pirates/:_id' element={<ViewOne/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
