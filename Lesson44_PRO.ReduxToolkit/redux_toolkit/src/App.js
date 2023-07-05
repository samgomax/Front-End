import { useDispatch } from "react-redux";
import AddTodoForm from "./components/AddTodoForm";
import TodoContainer from "./components/TodoContainer";
import { useEffect } from "react";
import { fetchTodos } from "./store/slice/todoSlice";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  }, []);


  return (
    <div>
      <AddTodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
