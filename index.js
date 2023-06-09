function login() {
  const username = document.getElementById("username_inp").value;
  const password = document.getElementById("password_inp").value;
  if (username && password === "admin") {
    window.location.assign("HomePage.html");
    alert("Welcome Admin!");
  }
}
