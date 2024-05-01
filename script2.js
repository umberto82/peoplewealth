const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')



// FUNZIONI

function getRandomUser(data) {
  const randomIndex = Math.floor(Math.random() * data.length); // Genera un indice casuale
  return data[randomIndex]; // Restituisce l'oggetto corrispondente all'indice casuale
}

function generateRandomNumber() {
  const min = 10000;
  const max = 1000000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = generateRandomNumber()


function createUserObject(user) {
  const userObj = {
    title: user.name.title,
    name: user.name.first,
    lastname: user.name.last,
    wealth: generateRandomNumber()
  }
  console.log(userObj);
}

function displayUser() {
  const div_El = document.createElement('div')

}


function fetchUsers() {
  fetch("https://randomuser.me/api/?results=100")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      // console.log(data);
      const people = data.results
      // console.log(people);
      const randomUser = getRandomUser(people)
      // console.log(randomUser);
      createUserObject(randomUser)
      displayUser()
    });
}

fetchUsers();












// PROTOTIPO API FETCH

const peopleData2 = [
  {
    email: 'blabla@gmail.com',
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Sara',
      last: 'Mccoy'
    }
  },
  {
    email: 'vvv@gmail.com',
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Paul',
      last: 'Mcguigan'
    }
  }
];

// console.log(peopleData2);
// console.log(peopleData2[1].name.first);