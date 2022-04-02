import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import MainBody from './Component/MainBody/MainBody';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Component/OrderReview/OrderReview';





function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/order' element={<MainBody></MainBody>}></Route>
       <Route path='/OrderReview' element={<OrderReview></OrderReview>}></Route>

     </Routes>
      
     
    </div>
  );
}

export default App;
