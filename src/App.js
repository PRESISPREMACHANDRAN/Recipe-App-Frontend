

import AddRecipe from './Components/AddRecipe';
import SearchRecipe from './Components/SearchRecipe';
import Delete from './Components/Delete';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<AddRecipe/>}/>
      <Route path='/search'  element={<SearchRecipe/>}/>
      <Route path='/delete'  element={<Delete/>}/>
      <Route path='/viewAll'  element={<ViewAll/>}/>
      <Route path='*'  element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
