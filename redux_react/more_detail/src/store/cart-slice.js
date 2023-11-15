import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    change: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            if(!existingItem){ //있을 때는 새로운 객체를 배열에 넣는다.
                state.items.push({
                    id : newItem.id,
                    name: newItem.title,
                    price : newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }else{ // 이미 있는 항목이 추가된다면 수량과 가격만 수정.
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id ===id);
            state.totalQuantity--
            state.change = true

            if (existingItem.quantity === 1){
                state.items = state.items.find((item) => item.id !== id);
            }else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;