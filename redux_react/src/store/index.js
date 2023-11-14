import {configureStore} from '@reduxjs/toolkit'

import counterReducer from "./counter";
import authReducer from "./auth"

const store = configureStore({
    //reducer:counterSlice.reducer
    reducer: {
        counter : counterReducer, // 여러개 일때는 각각 키를 설정하여 병합할 수 있다.
        auth : authReducer
    }
})

export default store;