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


  return (
    <div >
      <Cardform />
    <Cardscontainer cards={cards}/>
    <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus} />
    </div>
  );
}

export default App;
