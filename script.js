document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Kelvin's Nail Studio Website Loaded Successfully");

  const bookBtn = document.getElementById("bookBtn");

  if (bookBtn) {
    bookBtn.addEventListener("click", (event) => {
      event.preventDefault(); // stop default <a> action

      alert("🎉 Thank you for choosing Kelvin's Nail Studio!");

      console.log("📌 Book Now button clicked");

      // Phone & WhatsApp setup
      const phoneNumber = "2349039599507"; // no + sign
      const message = "Hello Kelvin! I’d like to book an appointment.";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Ask client what they prefer
      if (confirm("📞 Do you want to Call Kelvin?\nClick Cancel to chat on WhatsApp instead.")) {
        // ✅ Call
        window.location.href = `tel:+${phoneNumber}`;
      } else {
        // ✅ WhatsApp
        window.open(whatsappURL, "_blank");
      }
    });
  }
});
