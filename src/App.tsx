import './App.css';
import { ToDoList } from './pages/ToDoList';
import { CommonTemplates } from './templates/commonTemplates';

function App() {
  return (
    <div className="App">
      <CommonTemplates>
        <ToDoList />
      </CommonTemplates>
    </div>
  );
}

export default App;
