import { useState } from 'react';

const Shouter = () => {
  const [text, setText] = useState('');

  const handleInput = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleInput}></input>
      <output>{text.toUpperCase()}</output>
    </>
  );
};

export default Shouter;
