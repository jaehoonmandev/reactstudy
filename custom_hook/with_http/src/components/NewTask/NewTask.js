import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {

  const{isLoading,error,sendRequest} = useHttp();


  const createTask = (taskText, taskdata) => {
    const generatedId = taskdata.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    sendRequest({
      url: 'https://react-http-9004e-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: JSON.stringify({ text: taskText }),
      headers: {
        'Content-Type': 'application/json',
      },
    }, createTask.bind(null, taskText)); // taskText를 실행 전 사전에 구성하기 위해 bind를 설정하고 인자를 넘겨준다.
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
