const getRandomDadJokeAPI = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://icanhazdadjoke.com/',
      headers: {
        accept: 'application/json'
      }
    })
      .done(randomJoke => {
        resolve(randomJoke);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const getRandomDadJoke = () => {
  getRandomDadJokeAPI()
    .then(joke => {
      $('#joke-goes-here').append(`<h2 style="color: tomato;">${joke.joke}</h2>`);
    })
    .catch(error => {
      console.error(error);
    });
};

getRandomDadJoke();
