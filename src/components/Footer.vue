<script setup>
import { ref, onMounted } from 'vue';

const links = ref([]);

onMounted(() => {
  links.value.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

</script>

<template>
  <section class="footer">
    <div class="container_footer">
      <div class="container_content">
        <div class="start">
          <h1>Secure<span style="color: mediumspringgreen;">BAG</span></h1>
          <p>SecureBag | Safe and Comfortable Trips | We innovate the travel experience with advanced technology so you can enjoy each adventure with comfort and safety.</p>
          <div class="social_networks">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-github"></i>
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-discord"></i>
            </a>
          </div>
        </div>
        <div class="center">
          <h1>Links</h1>
          <div class="links">
            <a href="#main">Home</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#download">Download</a>
            <a href="#contact">Contact</a>
            <a href="#about-us">About Us</a>
          </div>
        </div>
        <div class="end">
            <div class="address">
              <h1>Information</h1>
              <i class="pi pi-whatsapp"><span>922-529-107</span></i>
              <i class="pi pi-envelope"><span>wilver.ar.dev@gmail.com</span></i>
              <i class="pi pi-map-marker"><span>San Isidro, C. Audiencia 55</span></i>
            </div>
            <div class="logo">
              <img src="../assets/images/logo.png" alt="Logo" height="100" />
            </div>
        </div>
      </div>
      <hr style="width: 100%">
      <div class="container_copyright">
        <span>© 2024 SecureBag. All rights reserved.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer {
  background: url('../assets/images/footer-fondo.png') no-repeat bottom;
  height: 50vh;
}
.container_footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 100%;
  color: whitesmoke;
}
.container_content {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10rem;
  margin-top: 2.5rem;

  i {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
}
.start h1 {
  margin-bottom: 1rem;
}
.start {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 45%;

  div {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      color: inherit;

      i {
        transition: transform 0.5s ease;
      }
      i:hover {
        transform: scale(1.5);
        color: mediumspringgreen;
      }
    }
  }
}
.center {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20%;
  margin-top: 2.9rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: whitesmoke;
      text-decoration: none;
      transition: transform 0.5s ease;
    }
    a:hover {
      transform: scale(0.95);
      color: mediumspringgreen;
    }
  }
}
.end {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;

    i {
      color: mediumspringgreen;

      span {
        width: 100%;
        font-size: 1rem;
        margin-left: 1rem;
        color: whitesmoke;
      }
    }
  }
}
.container_copyright {
  margin: 2rem 0;
  text-align: center;
}

@media screen and (max-width: 1280px) {
  .footer {
    height: 100%;
    background-size: cover;
  }
  .container_footer {
    width: 768px;
  }
  .container_content {
    flex-direction: column;
    gap: 3.5rem;
    margin-top: 1rem;
  }
  .start {
    width: 100%;
    text-align: center;
    align-items: center;
    margin-top: 3rem;
  }
  .center {
    width: 100%;
    text-align: center;
  }
  .end {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }
  .logo {
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 768px) {
  .container_footer {
    width: 420px;
  }
}
@media screen and (max-width: 425px) {
  .container_footer {
    width: 300px;
  }
}
</style>