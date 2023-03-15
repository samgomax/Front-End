import UsersContainer from "./components/UsersContainer";
import ProductContainer from "./components/ProductsContainer";
import PostsContainer from "./components/PostsContainer";

function App() {

  return (
    <div>
        <UsersContainer />
        <ProductContainer />
        <PostsContainer />                  
    </div>
  );
}

export default App;


// Создать компонент UsersContainer, переместить в него все данные по созданию карточек пользователей
// UsersContainer добавить в App
