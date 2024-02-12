import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from './Components/MainPage';
import { PageOne } from './components/Pages';
import { PageTwo } from './components/Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
            <Route index element={<div>No page is selected.</div> } />
            <Route path="one" element={<PageOne />} />
            <Route path="two" element={<PageTwo />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;