import { useState } from 'react';
import Header from './header/header';
import Tasks from './Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Go to the Parking lot.',
        day: 'Now',
        reminder: true,
      },
      {
        id: 2,
        text: 'Go take some candy.',
        day: '2 days ago',
        reminder: false,
      }
    ]
  )

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
