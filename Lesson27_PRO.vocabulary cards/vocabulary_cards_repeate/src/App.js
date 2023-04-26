import { useState, useEffect } from "react";
import CardsContainer from "./components/CardsContainer";
import Triggers from "./components/Triggers";
import { words } from "./data/words";
import AddCardForm from "./AddCardForm";
import { Context } from "./context";

function App() {

  const [cards, setCards] = useState(words);

  useEffect(() => {
      setCards(JSON.parse(localStorage.getItem('cards')) || cards)
  }, []);

  useEffect(() => {
      localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]);


  const change_to_eng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng'
      return el;
    }))
  }

  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus'
      return el;
    }))
  }

  const add_card = card => setCards([...cards, card]);
  // const add_card = card => setCards(cards.concat(card));

  const change_lang = id => {
    setCards(cards.map(el => {
      if(el.id ===id){
        el.lang = el.lang === 'eng' ? 'rus' : 'eng';
      }
      return el;
    }))
  }

  const delete_card = id => setCards(cards.filter(el => el.id !== id));


  return (
    <div>
      <Context.Provider value={{add_card, cards, change_lang, delete_card, change_to_eng, change_to_rus}}>
        <AddCardForm />
        <CardsContainer />
        <Triggers />
      </Context.Provider>  
    </div>
  );
}

export default App;
