import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">

      <h1>Tasky</h1>
      <Task title="Laundry" deadline="Tomorrow" description= "urgent please do it immediately">
        Fold laundry and put away
    </Task>
      <Task title="Dishes" deadline="Tomorrow" description= " not urgent leave it for another time" />
      <Task title="Tidy" deadline="Today" description= " do it in next 40 mins" />
    </div>
  );
}

export default App;
