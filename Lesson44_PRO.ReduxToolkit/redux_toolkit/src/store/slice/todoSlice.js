import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=30');
        const json = await res.json();
        return json
    }
)

export const todoSlice =  createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        state: null
    },
    reducers:{
        add_todo(state, action){
            state.todos.push(action.payload)
        },
        delete_todo(state, action){
           state.todos = state.todos.filter(el => 
            el.id !== action.payload);
        },
        toggle_todo(state, action){
            const target_todo = state.todos.find(el => 
                el.id === action.payload);
                target_todo.completed = !target_todo.completed
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state) => {state.status = 'loading'})
        .addCase(fetchTodos.fulfilled, (state,action) =>{
        state.status = 'ready';
        state.todos = action.payload
    })
        .addCase(fetchTodos.rejected, (state) => {state.status = 'rejected'})
    }
});

export const {add_todo, delete_todo, toggle_todo} = todoSlice.actions;

export default todoSlice.reducer;