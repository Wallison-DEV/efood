import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardapioItem } from '../../Components/Product';

interface CartItem {
    item: CardapioItem;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardapioItem>) => {
            const existingItemIndex = state.items.findIndex(item => item.item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({ item: action.payload, quantity: 1 });
            }
        },
        open: (state)=>{
            state.isOpen = true;
        },
        close: (state)=>{
            state.isOpen = false;
        },
        remove: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex((item) => item.item.id === action.payload);
            if (itemIndex !== -1) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity -= 1;
                } else {
                    state.items.splice(itemIndex, 1);
                }
            }
        },
    },
});

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;
