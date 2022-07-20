import React from 'react';
import "../stylessheets/explore.scss";

const quotes = [
  {
    quote: "I would like to die on Mars. Just not on impact.",
    author: "Elon Musk"
  },
  {
    quote: "That's one small step for a man, one giant leap for mankind.",
    author: "Neil Armstrong"
  },
  {
    quote: "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
    author: "Konstantin Tsiolkovsky"
  },
  {
    quote: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
    author: "Stephen Hawking"
  },
  {
    quote: "Space is to place as eternity is to time.",
    author: "Joseph Joubert"
  },
  {
    quote: "For the wise man looks into space and he knows there is no limited dimensions.",
    author: "Zhuangzi"
  },
  {
    quote: "I would rather be a superb meteor, every atom of me in magnificent glow, than a sleepy and permanent planet.",
    author: "Jack London"
  },
  {
    quote: "The dinosaurs became extinct because they didn't have a space program.",
    author: "Larry Niven"
  }
]

export default function Explore() {

  let randomIndex = Math.floor(Math.random() * quotes.length);

  return (
    <div className="explore">
      <h3 className="quote-title">FAMOUS QUOTES</h3>
      <div className="quote-wrapper">
        <p className="quote-para"><span className="quote-mark">🙶</span>{quotes[randomIndex].quote}<span className="quote-mark">🙷</span></p>
        <p className="quote-author">{quotes[randomIndex].author}</p>
      </div>
    </div>
  )
}
