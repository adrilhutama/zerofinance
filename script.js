// JavaScript code

// Mengambil referensi elemen-elemen HTML
const navLinks = document.querySelectorAll('nav ul li a');
const applyButton = document.querySelector('.btn');
const contactForm = document.getElementById('contactForm');

// Menambahkan event listener pada setiap link navigasi
navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Menambahkan event listener pada tombol "Apply Now"
applyButton.addEventListener('click', smoothScroll);

// Menambahkan event listener pada form kontak
contactForm.addEventListener('submit', submitForm);

// Fungsi untuk melakukan smooth scroll ke elemen target
function smoothScroll(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

// Fungsi untuk mengirim data formulir ke Discord melalui Webhook
function sendToDiscord(data) {
  const webhookUrl = "https://discord.com/api/webhooks/1111126270105886760/0dqFkJNKBvdu4YC0LIomU8HcUi4X5O5YN6IJuTMctWygPG2m--kSyakAJljzZKB-SYyx";

  const payload = {
    content: "New contact form submission:",
    embeds: [
      {
        title: "Contact Form",
        fields: [
          {
            name: "Name",
            value: data.name
          },
          {
            name: "Email",
            value: data.email
          },
          {
            name: "Message",
            value: data.message
          }
        ]
      }
    ]
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        console.log("Form submission sent to Discord.");
        // Lakukan tindakan setelah pengiriman berhasil
      } else {
        console.error("Failed to send form submission to Discord.");
        // Lakukan tindakan jika pengiriman gagal
      }
    })
    .catch(error => {
      console.error("Error occurred while sending form submission to Discord:", error);
      // Lakukan tindakan jika terjadi kesalahan
    });
}

// Fungsi untuk mengirim formulir kontak
function submitForm(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const formData = {
    name: name,
    email: email,
    message: message
  };

  sendToDiscord(formData);

  // Reset form setelah pengiriman
  contactForm.reset();
}
