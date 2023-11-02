import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      //ID 값을 넘겨줄 때는 하드코딩 된 부분을 확인하자.
      updatedGoals.unshift({ text: enteredText,
        //id: 'goal1'
        id: Math.random().toString()
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
      /*wrapped in an enclosing tag : 하나의 루트 태그 안에 요소들이 있어야한다.
  이는 React.createElement() 가 다른 라인에 나란히 호출될 수 없기 때문이다.(하나의 메서드 안에서 재귀적으로 호출되어야한다.)*/
      <div>
        <section id="goal-form">
          {/*is not defined : 정의 되지 않은 변수, 함수를 사용 했을 때 발생*/}
          <CourseInput onAddGoal={addGoalHandler} />
        </section>
        <section id="goals">
          {content}
        </section>
      </div>

  );
};

export default App;
