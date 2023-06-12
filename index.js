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
  const crop_category = document.getElementById("crop_category").value;
  const crop_price = document.getElementById("crop_price").value;
  const crop_volume = document.getElementById("crop_volume").value;
  if (
    confirm(
      `Crop Category: ${crop_category}\nCrop Price per Kg: ${crop_price}\nCrop Volume: ${crop_volume} kg\nTotal Price: ₱${
        crop_price * crop_volume
      } `
    )
  ) {
    window.location.assign("AuctionPage.html");
    alert("created new listing");
  } else {
    alert("Sadge");
  }
}

function btnDis() {
  const crop_category = document.getElementById("crop_category").value;
  const crop_price = document.getElementById("crop_price").value;
  const crop_volume = document.getElementById("crop_volume").value;
  const btn = document.getElementById("form-btn");
  if (crop_category === !null && crop_price === !"" && crop_volume === !"") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function radioChange(val) {
  const form = document.getElementById("credentials_inp");
  if (val === "Farmer") {
    form.innerText = `Upload RSBSA: `;
  } else {
    form.innerText = "Upload Valid Id: ";
  }
}
