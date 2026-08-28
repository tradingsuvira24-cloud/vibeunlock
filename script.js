// VibeUnlock JavaScript

const modal = document.getElementById("paymentModal");
const selectedContent = document.getElementById("selectedContent");
const selectedPrice = document.getElementById("selectedPrice");


// Open unlock window

function unlockContent(contentName, price) {

  selectedContent.textContent =
    "You are unlocking: " + contentName;

  selectedPrice.textContent =
    "₹" + price;

  modal.style.display = "flex";

  document.body.style.overflow = "hidden";
}


// Close unlock window

function closeModal() {

  modal.style.display = "none";

  document.body.style.overflow = "auto";
}


// Close when clicking outside the box

window.("click", function(event) {

  if (event.target === modal) {
    closeModal();
  }

});


// Demo payment

function demoPayment() {

  alert(
    "Payment system is not connected yet.\n\n" +
    "Next step: connect a real payment gateway such as Razorpay."
  );

}


// Mobile menu

function toggleMenu() {

  const nav = document.querySelector(".navbar nav");

  if (nav.style.display === "flex") {

    nav.style.display = "none";

  } else {

    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "20px";
    nav.style.background = "#151515";
    nav.style.padding = "20px";
    nav.style.borderRadius = "12px";

  }

}