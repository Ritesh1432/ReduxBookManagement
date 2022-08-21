import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        'id':1,
        'imgsrc':'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        'title':'Story Book',
        'author':'Ritesh',
        'price':'$50',
        'desc':'This is a story book',
        'userid':13456
    },
    {
        'id':2,
        'imgsrc':'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80',
        'title':'Timepass Book',
        'author':'ABC',
        'price':'$40',
        'desc':'This is a dummy book',
        'userid':13355
    },
    {
        'id':3,
        'imgsrc':'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'title':'Book',
        'author':'XYZ',
        'price':'$80',
        'desc':'This is a text book',
        'userid':98777
    }

]


const bookSlice = createSlice({
    name:'book',
    initialState,
    reducers:{
        addBook:(state,action) => {state.push(action.payload)}
    }
})

export const {addBook} = bookSlice.actions

export default bookSlice.reducer