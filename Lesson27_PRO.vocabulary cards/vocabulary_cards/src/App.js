import Cardscontainer from "./components/Cardscontainer";
import { useState } from "react";
import Triggers from "./components/Triggers";
import { words } from "./data/words";
import Cardform from "./components/CardForm";


function App() {

  const [cards, setCards ] = useState(words);

  const change_to_eng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng'
      return el
    }))
  }

  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus'
      return el
    }))
  }

  const add_card = card => setCards([...cards, card]);
  // const add_card = card => setCards(cards.concat(card));

  const change_lang = id =>{
     setCards( cards.map (el => {
      if(el.id === id){
        el.lang = el.lang === 'eng' ? 'rus' : 'eng'
      }
      return el;
    }))
  }

  const delete_card = id => setCards(cards.filter(el => el.id !== id));


  return (
    <div >
    <Cardform add_card = {add_card} />
    <Cardscontainer cards={cards} change_lang={change_lang} delete_card={delete_card} />
    <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus} />
    </div>
  );
}

export default App;
