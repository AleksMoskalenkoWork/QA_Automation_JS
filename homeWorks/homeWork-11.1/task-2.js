// Завдання 2
// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

const fetchTodosData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
      console.log('Response Todos List:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// fetchTodosData();

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Функція повинна повертати як результат Promise що повертає об’єкт user

const fetchUsersData = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((data) => {
      console.log('Response Users List:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// fetchUsersData();

// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних

let urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/users/1',
];

let requests = urls.map((url) => fetch(url));

const allDataInArray = Promise.all(requests)
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .catch((error) => {
    console.error('Error:', error);
  });

allDataInArray.then((data) => {
  const allData = data;
  return console.log('All DATA', allData);
});

const todosData = fetch('https://jsonplaceholder.typicode.com/todos/1');
const usersData = fetch('https://jsonplaceholder.typicode.com/users/1');

const firstSucsessFetch = Promise.race([todosData, usersData])
  .then((sucsessFetchComplete) => {
    return sucsessFetchComplete.json();
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// firstSucsessFetch.then((data) => {
//   const raceData = data;
//   return console.log('Race Data', raceData);
// });
