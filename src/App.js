import './App.css'
import Main from './components/Main'
import { TaskProvider } from './components/TaskContext';
import { DoneProvider } from './components/DoneContext';

function App() {
  return (
    <TaskProvider>
      <DoneProvider>
        <Main />
      </DoneProvider>
    </TaskProvider>
  );
}

export default App;
