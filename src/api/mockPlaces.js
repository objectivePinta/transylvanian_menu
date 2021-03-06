import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const places = [
  {
    id: 'casa-sfatului',
    name: 'Casa Sfatului',
    address: 'Piata Sfatului nr. 5',
    img: 'http://media.cautalafix.ro/2014/09/Casa-Sfatului-22.jpg',
    description: 'Casa cea mai mare din Brasov, unde a locuit Donald Duck in 1965. ',
    coordinates:{long:'',lang:''},
    time:10,
    price:10
  },
  {
    id: 'biserica-neagra',
    name: 'Biserica Neagra',
    address: 'Piata Sfatului nr. 12',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Brasov,_chiesa_nera_06.JPG',
    description: 'Biserica Neagra,Biserica NeagraBiserica NeagraBiserica NeagraBiserica NeagraBiserica NeagraBiserica Neagra',
    coordinates:{long:'',lang:''},
    time:20,
    price:10
  },
  {
    id: 'turnu-alb',
    name: 'Turnu alb',
    address: 'Piata Sfatului nr. 5',
    img: 'http://adevarul.ro/assets/adevarul.ro/MRImage/2014/07/11/53bfbdc60d133766a853bbfc/978x0.jpg',
    description: 'Un turn alb si frumos.. ',
    coordinates:{long:'',lang:''},
    time:30,
    price:10
  },
  {
    id: 'turnu-negru',
    name: 'Turnu negru',
    address: 'Piata Sfatului nr. 5',
    img: 'http://adevarul.ro/assets/adevarul.ro/MRImage/2014/07/11/53bfbdc60d133766a853bbfc/978x0.jpg',
    description: 'Un turn negru si frumos.. ',
    coordinates:{long:'',lang:''},
    time:30,
    price:10
  }

];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (place) => {
  return place.name.toLowerCase();
};

class PlacesApi {
  static getAllPlaces() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], places));
      }, delay);
    });
  }

  // static saveAuthor(author) {
	// author = Object.assign({}, author); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minAuthorNameLength = 3;
  //       if (author.firstName.length < minAuthorNameLength) {
  //         reject(`First Name must be at least ${minAuthorNameLength} characters.`);
  //       }
  //
  //       if (author.lastName.length < minAuthorNameLength) {
  //         reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
  //       }
  //
  //       if (author.id) {
  //         const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
  //         authors.splice(existingAuthorIndex, 1, author);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids for new authors in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         author.id = generateId(author);
  //         authors.push(author);
  //       }
  //
  //       resolve(author);
  //     }, delay);
  //   });
  // }

  // static deleteAuthor(authorId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfAuthorToDelete = authors.findIndex(author => {
  //         author.authorId == authorId;
  //       });
  //       authors.splice(indexOfAuthorToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default PlacesApi;
