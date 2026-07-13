import ShoppingForm from "./components/ShoppingForm";
import useAction from "./hooks/useAction"
import ShoppingList from "./components/ShopingList";

function App() {
  const {state, add, remove, edit} = useAction();

  return (
    <>
      <ShoppingForm add={add}/>
      <hr/>
      <ShoppingList list={state.list} remove={remove} edit={edit}/>
    </>
  )
}

export default App
