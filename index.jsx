const { useState } = React;

export const SuperheroForm = () => {
  const [heroName, setHeroName] = useState('');
  return <h2>Hola {heroName}</h2>;
};
