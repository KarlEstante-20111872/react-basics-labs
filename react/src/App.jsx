import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <div className="description">
      <Task title="Dishes" deadline="Today" >
        Empty dishwasher </Task>
      <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
        </Task>
      <Task title="Tidy" deadline="Today" />
      </div>
    </div>
  );
}

export default App;

