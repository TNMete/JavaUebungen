import TodoList from './components/TodoList';
import Calendar from './components/Calendar';
import VisionBoard from './components/VisionBoard';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import RecipeSearch from "./components/RecipeSearch";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/recipes" element={<RecipeSearch />} />
        <Route path="/visionboard" element={<VisionBoard />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;