let currentStep = 1;
let selectedPackage = {};
const steps = document.querySelectorAll(".step");
const contents = document.querySelectorAll(".step-content");

const showStep = (step) => {
  contents.forEach(c => c.classList.remove("active"));
  document.getElementById(`step-${step}`).classList.add("active");

  steps.forEach((s, i) => {
    s.classList.toggle("active", i < step);
  });

  currentStep = step;
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    selectedPackage = {
      name: card.dataset.package,
      price: card.dataset.price
    };
  });
});

document.querySelectorAll(".btn-next").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep === 1 && !selectedPackage.name) {
      alert("Please select a package");
      return;
    }
    if (currentStep === 2) {
      document.getElementById("c-package").innerText = selectedPackage.name;
      document.getElementById("c-price").innerText = "$" + selectedPackage.price;
      document.getElementById("c-name").innerText = name.value;
      document.getElementById("c-email").innerText = email.value;
      document.getElementById("c-phone").innerText = phone.value;
    }
    showStep(currentStep + 1);
  });
});

document.querySelectorAll(".btn-back").forEach(btn => {
  btn.addEventListener("click", () => showStep(currentStep - 1));
});

document.querySelector(".btn-confirm").addEventListener("click", () => {
  alert("Booking confirmed! 🎉");
});
