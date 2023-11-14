import { createStore } from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter:true
}

const INCREMENT = 'increment'


//전역 상태의 Slice 만들어두기.(직접적인 관계가 아닌 여러 상태로 나눠졌다면.)
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { // 객체 혹은 맵을 지정한다. 이는 자동으로 리덕스에 의해 호출되어 최근 값을 받아온다.
        /*if문을 사용하지 않아도 어떤 액션에 따라 메서드가 자동으로 호출괸다.*/
        increment(state) {
            state.counter++; // redux toolkit을 사용한다면 자동으로 이전 상태를 원래 상태를 복제한다.
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }

    }

})
//
// const conterReducer = (state = initialState, action) => {
//     if(action.type === INCREMENT){
//         return{
//             //state.count++ 는 redux에서 작업할 때는 절대 state를 변형하면 안된다.
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if(action.type === 'increse'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//
//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if(action.type === 'toggle'){
//         return{
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

//const store = createStore(conterReducer);
//const store = createStore(counterSlice.reducer);
const store = configureStore({
    reducer:counterSlice.reducer
    // reducer: {
    //     counter : counterSlice.reducer // 여러개 일때는 각각 키를 설정하여 병합할 수 있다.
    // }
})

export default store;