import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">

      <h1>Tasky</h1>
      <Task title="Laundry" deadline="Tomorrow" description= "urgent">
        Fold laundry and put away
    </Task>
      <Task title="Dishes" deadline="Tomorrow" description= " not urgent" />
      <Task title="Tidy" deadline="Today" description= "urgent" />
    </div>
  );
}

export default App;
