const API_URL = 'https://www.superheroapi.com/api.php/4192484924171229/720';

const getSuperHero = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(hero =>
      document.getElementById('jokeContainer').innerText = hero.appearance.gender
    );
}  

window.onload = () => getSuperHero();

  // module.exports = getSuperHero;