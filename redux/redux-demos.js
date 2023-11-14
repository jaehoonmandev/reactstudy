const redux = require('redux');

/* 2. 저장소 데이터 관리 함수 만들기.
    리듀서 함수는 리덕스 라이브러리에 의해 실행된다.
    기존 상태와 발송된 액션 2개의 입력을 받는다.
    내부엔 부수적인 기능이 들어가선 안된다.*/
const counterReducer = (state = {counter: 0}, action) => {

    if(action.type === 'increment'){
        return {
            counter : state.counter + 1 // 기존 상태를 참조하여 값을 변환.
        };
    }

    if(action.type === 'dcrement'){
        return {
            counter : state.counter - 1 // 기존 상태를 참조하여 값을 변환.
        };
    }

    //입력을 받고 리턴한다.
    return state;
}


const store = redux.createStore(counterReducer) // 1. 저장소 만들기 / 3. 함수 저장소 생성

console.log(store.getState());

// 4. 구독 트리거 등록.
const conterSubscriber = () => {
    /* createStore() 로 생성된 저장소를 사용할 수 있는 메소드로
    * 업데이트 후에는 트리거 되어 최신 상태 스냅샷을 제공한다.*/
    const lateState = store.getState();
    console.log(lateState)
}

// 5. 구독.
store.subscribe(conterSubscriber)

// 6. 액션을 발송하여 리듀서 함수를 다시 실행시킬 수 있다.
store.dispatch({
    type : 'increment'
})

store.dispatch({
    type : 'decrement'
})
