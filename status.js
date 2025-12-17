const checkBtn = document.getElementById("checkBtn");
const bookingIdInput = document.getElementById("bookingId");
const resultBox = document.getElementById("statusResult");

checkBtn.addEventListener("click", () => {
  const bookingId = bookingIdInput.value.trim();

  if (!bookingId) {
    showError("Please enter a valid Booking ID");
    return;
  }

  // Fake loading
  resultBox.style.display = "block";
  resultBox.className = "status-result";
  resultBox.innerHTML = "Checking status... ⏳";

  setTimeout(() => {
    // MOCK RESPONSE (replace with API later)
    if (bookingId.startsWith("CRY")) {
      resultBox.classList.add("success");
      resultBox.innerHTML = `
        <h3>Status: Confirmed ✅</h3>
        <p>Your booking is confirmed.</p>
        <p><b>Next Step:</b> Our team will contact you shortly.</p>
      `;
    } else {
      showError("Booking ID not found. Please check again.");
    }
  }, 1200);
});

function showError(message) {
  resultBox.style.display = "block";
  resultBox.className = "status-result error";
  resultBox.innerHTML = `<p>${message}</p>`;
}
