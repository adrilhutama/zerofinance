// Add any desired JavaScript functionality here
// Example: Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  }
});

// Example: Form submission confirmation
document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");
  form.addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    // Perform any desired operations with the form data

    // Example: Display confirmation message
    var thankYouSection = document.querySelector("#thank-you");
    thankYouSection.style.display = "block";

    // Example: Clear form fields
    form.reset();

    // Example: Redirect to home page after 5 seconds
    setTimeout(function() {
      window.location.href = "index.html";
    }, 5000);
  }
});
