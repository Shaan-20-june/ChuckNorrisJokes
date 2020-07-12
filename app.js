document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const text = JSON.parse(this.responseText);
      let output = "";
      if (text.type === "success") {
        output += `<li class="list-group-item"><h3 class="text-primary">JOKES</h3></li>`;
        text.value.forEach(function (joke) {
          output += `<li class="list-group-item">${joke.joke}</li>`;
        });
      } else {
        output += `<li class="list-group-item">Somthing went wrong</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}
