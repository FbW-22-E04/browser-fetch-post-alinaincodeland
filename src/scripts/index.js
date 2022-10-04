// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// import "babel-polyfill";

// \/ All of your javascript should go here \/

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");
const button = document.querySelector("button");

form.addEventListener("submit", handleSubmit);
async function handleSubmit(e) {
  e.preventDefault();
  console.log(`Checkbox value ${checkbox.checked}`);
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    message: message.value,
  };
  const settings = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    if (checkbox.checked) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        settings
      );
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(`the error is ${error.message}`);
  }
}
