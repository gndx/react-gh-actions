import React from 'react';
import '../styles/components/App.styl';
import useCharacters from '../hooks/useCharacters';

const App = () => {
  const characters = useCharacters(
    'https://rickandmortyapi.com/api/character/'
  );
  return (
    <div className="App">
      {characters.map(character => (
        <div className="App-content">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default App;
