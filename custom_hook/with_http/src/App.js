import React, {useCallback, useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";
function App() {
    const [tasks, setTasks] = useState([]);

    // 디스트럭처링 및 alias
    const {isLoading, error, sendRequest: fetchTasks } = useHttp();


    useEffect(() => {
        // 전달할 부가 함수.
        const transformTasks = tasksObj => {
            const loadedTasks = [];

            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            }

            setTasks(loadedTasks);
        };

        fetchTasks({
            url: 'https://react-http-9004e-default-rtdb.firebaseio.com/tasks.json',
        }, transformTasks);
    }, []);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  //
  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-9004e-default-rtdb.firebaseio.com/tasks.json'
  //     );
  //
  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }
  //
  //     const data = await response.json();
  //
  //     const loadedTasks = [];
  //
  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }
  //
  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };
  //


  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
