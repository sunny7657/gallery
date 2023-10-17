// export class UnsplashAPI {
//   #BASE_URL = 'https://api.unsplash.com/search/photos';
//   #KEY = 'gcevo001ZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';

//   getPopularImages(page) {
//     const url = `${
//       this.#BASE_URL
//     }?query=popular&page=${page}&per_page=12&orientation=portrait&client_id=${
//       this.#KEY
//     }`;
//     fetch(url).then();
//   }
// }

import pokemonCardTpl from '../templates/pokemon-card.hbs';

const refs = {
  cardContainer: document.querySelector('.container'),
};

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
