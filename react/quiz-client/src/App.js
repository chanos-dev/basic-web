import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Quiz from './component/Quiz'
import Result from './component/Result'
import Layout from './component/Layout';
import Authenticate from './component/Authenticate';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route element={<Authenticate />}>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}