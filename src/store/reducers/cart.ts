import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SidebarType {
    CART = 'cart',
    CHECKOUT = 'checkout',
    ADDRESS = 'ADDRESS',
}

export interface CartItem {
    item: CardapioItem
    quantity: number
}

interface CartState {
    items: CartItem[]
    isOpen: boolean
    activeSidebar?: SidebarType
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    activeSidebar: SidebarType.CART,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardapioItem>) => {
            const { items } = state
            const { id } = action.payload
            const existingItem = items.find((item) => item.item.id === id)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items = [...items, { item: action.payload, quantity: 1 }]
            }
        },
        decrement: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.item.id === action.payload
            )
            if (itemIndex !== -1) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity -= 1
                } else {
                    state.items.splice(itemIndex, 1)
                }
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.item.id !== action.payload
            )
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        changeSidebar: (state, action: PayloadAction<SidebarType>) => {
            state.activeSidebar = action.payload
        },
        clear: (state) => {
            state.items = []
        },
    },
})

export const { add, open, close, remove, decrement, changeSidebar, clear } =
    cartSlice.actions
export default cartSlice.reducer
