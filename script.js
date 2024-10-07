// Menangani interaksi, animasi, dan efek visual
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const emailInput = document.querySelector("#email");
    const feedbackMessage = document.querySelector(".feedback-message");
    const navbar = document.querySelector("nav");
    const scrollButton = document.querySelector(".scroll-top-button");
    const heroSection = document.querySelector(".hero");
    const floatingElements = document.querySelectorAll(".floating");

    // Efek Partikel Mengambang di Hero Section
    createFloatingParticles();

    // Menangani pengiriman formulir
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir standar

        const emailValue = emailInput.value.trim();

        // Validasi email
        if (validateEmail(emailValue)) {
            feedbackMessage.textContent = `Terima kasih telah mendaftar, ${emailValue}!`;
            feedbackMessage.style.color = "green"; // Menampilkan pesan sukses
            feedbackMessage.style.opacity = "1";
            feedbackMessage.classList.add("fade-in-out"); // Efek fade-in dan fade-out
            emailInput.value = ""; // Mengosongkan input setelah pengiriman berhasil

            // Efek visual setelah berhasil mendaftar
            triggerSuccessEffect();
        } else {
            feedbackMessage.textContent = "Silakan masukkan alamat email yang valid.";
            feedbackMessage.style.color = "red"; // Menampilkan pesan kesalahan
            feedbackMessage.classList.add("shake"); // Efek getar untuk kesalahan
            setTimeout(() => feedbackMessage.classList.remove("shake"), 1000);
        }
    });

    // Fungsi untuk memvalidasi format email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Efek sukses setelah pendaftaran
    function triggerSuccessEffect() {
        const confettiCount = 50;
        for (let i = 0; i < confettiCount; i++) {
            createConfettiParticle();
        }
    }

    // Membuat partikel confetti
    function createConfettiParticle() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000); // Menghapus confetti setelah 3 detik
    }

    // Membuat efek partikel mengambang
    function createFloatingParticles() {
        const particleCount = 10;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("floating");
            particle.style.left = `${Math.random() * window.innerWidth}px`;
            particle.style.animationDuration = `${5 + Math.random() * 5}s`; // Durasi animasi acak
            heroSection.appendChild(particle);
        }
    }

    // Menambahkan efek transparansi pada navbar saat scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Menambahkan fungsi scroll to top
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Menampilkan tombol scroll to top jika pengguna menggulir ke bawah
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });
});
