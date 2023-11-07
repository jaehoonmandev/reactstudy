import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagreph, setShowParagreph] = useState(false)
    const [allowToggle, setAllowToggle] = useState(false)
    /*useCallback을 사용하여 첫 번쨰 인자로 함수를 준다면 JS 사이클에 따른 새로운 생성 객체가 아니라
    이전과 동일한 위치에 저장된 함수를 반환해준다.(React.memo()를 사용하게 해준다.*/
    const toggleParagraph = useCallback(() => {

        // JS는 클로저 함수이기 때문에 함수 외부에서 사용되는 변수는 잠기게된다.
        // useCallback 을 사용하여 함수의 재생성을 하지 않게되면서 함수를 사용하기 위해 저장한
        // allowToggle의 값은 최신 값이 아니고 App 컴포넌트가 처음 실행된 시점의 값을 가지고 있다.
        // 즉, 함수 재생성을 필요로 하는 떄가 있을 수 있다.
        if(allowToggle) {
            console.log('Toggle Running')
            setShowParagreph(prevShowParagraph => !prevShowParagraph);
        }
    }
    /* 두 번째 인자는 배열이며, useCallback 호출에 대한 의존성 배열이다.
    * 현재는 setShowParagreph를 입력할 수도 잇지만 이미 이전과 동일한 객체임을 보장하기에 넣지 않아도된다.
    * 하지만 JS의 클로저 개념으로 잠긴 변수를 종속성으로 추가하게되면 필요에 따라 함수 재생성이 이루어진다.*/
    , [allowToggle] );

    const allowToggleHandler = () =>{
            setAllowToggle(true);
    }

  return (
    <div className="app">
      <h1>Hi there!</h1>
        {/*부모 컴포넌트가 재실행되면 이의 모든 자식 컴포넌트 역시 재실행, 재평가된다.*/}
        <DemoOutput show={showParagreph}/>
        {/*<DemoOutput show={false}/>*/}
        <Button onClick={allowToggleHandler}>Allow toggling</Button>
        <Button onClick={toggleParagraph}>Toggle Paragreph</Button>
    </div>
  );
}

export default App;
