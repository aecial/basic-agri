function login() {
  const username = document.getElementById("username_inp").value;
  const password = document.getElementById("password_inp").value;
  if (username && password === "admin") {
    window.location.assign("AuctionPage.html");
    alert("Welcome Admin!");
  }
}

function display(name) {
  alert(`You clicked ${name}`);
  window.location.assign(`${name}.html`);
}
