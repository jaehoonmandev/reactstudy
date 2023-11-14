import { createStore } from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter:true
}
const INCREMENT = 'increment'

//전역 상태의 Slice 만들어두기.(직접적인 관계가 아닌 여러 상태로 나눠졌다면.)
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: { // 객체 혹은 맵을 지정한다. 이는 자동으로 리덕스에 의해 호출되어 최근 값을 받아온다.
        /*if문을 사용하지 않아도 어떤 액션에 따라 메서드가 자동으로 호출괸다.*/
        increment(state) {
            state.counter++; // redux toolkit을 사용한다면 자동으로 이전 상태를 원래 상태를 복제한다.
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload //디폴트 인식자 이름.
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }

    }

})


//역할에 따른 슬라이스 분리

const initialAuthState = {
    isAuthenticated : false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    //reducer:counterSlice.reducer
    reducer: {
        counter : counterSlice.reducer, // 여러개 일때는 각각 키를 설정하여 병합할 수 있다.
        auth : authSlice.reducer
    }
})

export const counterActions = counterSlice.actions; // 액션 객체 export
export const authActions = authSlice.actions;

export default store;