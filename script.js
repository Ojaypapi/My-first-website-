document.addEventListener("DOMContentLoaded", () => {
console.log("✅Kelvin's  Nail Studio Website Loaded Successfully");

const bookBtn=
document.getElementById("bookBtn");

if (bookBtn) {
 bookBtn.addEventListener("click", () 
=> { 
alert("🎉 Thank you for choosing Kelvin's Nail Studio! We'll contact you shortly.");
console.log("📌 Book Now button clicked");
});
}
});
