const userLoggedIn = "Teddy";

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

function newAuction() {
  window.location.assign("newAuction.html");
}
function newListing(category) {
  window.location.assign(`${category}.html`);
  const listings = document.getElementById("listings");
  let newBtn = document.createElement("button");
  newBtn.innerText = `${category} auction`;
  newBtn.className = `${category}-newBtn`;
  listings.appendChild(newBtn);
}

function confirmSubmit() {
  let crop_category = document.getElementById("crop_category").value;
  const crop_price = document.getElementById("crop_price").value;
  const crop_volume = document.getElementById("crop_volume").value;
  if (
    confirm(
      `Crop Category: ${crop_category}\nCrop Price per Kg: ${crop_price}\nCrop Volume: ${crop_volume}`
    )
  ) {
    newListing(crop_category);
    alert("created new listing");
  } else {
    alert("Sadge");
  }
}
