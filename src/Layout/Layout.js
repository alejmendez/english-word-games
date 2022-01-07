import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Menu } from './Menu';
import { Memory } from '../Games/Memory/Memory';
import { WordPairs } from '../Games/WordPairs/WordPairs';

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/memory" element={<Memory />} />
          <Route path="/word-pairs" element={<WordPairs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export {
  Layout,
}
