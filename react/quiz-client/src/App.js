import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Quiz from './component/Quiz'
import Result from './component/Result'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}