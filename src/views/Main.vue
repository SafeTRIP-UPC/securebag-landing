<script setup>
import Features from '../views/Features.vue';
import Testimonials from '../views/Testimonials.vue';
import Contact from '../views/Contact.vue';
import AboutUs from '../views/AboutUs.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <section id="main" class="main">
      <div class="container_main">
        <div class="container_content">
          <h1 class="container_title">Travel Worry Free with SecureBag</h1>
          <div class="container_info">
            The easiest way to insure your luggage and enjoy peace of mind while traveling.
            Secure your luggage with SafeTrip. <span>Instant quotes and easy management through our app for stress-free travel.</span>
          </div>
          <div class="container_buttons">
            <Button class="button" label="Google Play" text plain>
            <i class="fa-brands fa-google-play"></i>
            <span>Google Play</span>
          </Button>
            <Button class="button" label="Google Play" text plain>
              <i class="pi pi-apple"></i>
              <span>App Store</span>
            </Button>
          </div>
        </div>
        <div class="container_image">
          <img src="../assets/images/cell.png" alt="Logo" height="550" />
        </div>
      </div>
      <div class="container_scroll flex flex-column align-items-center">
        <p>Scroll down</p>
        <i class="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style="font-size: 2rem"></i>
        <ScrollTop />
      </div>
  </section>

  <Divider align="center" type="solid"><img src="../assets/images/logo_securebag.png" alt="Logo" height="50" /></Divider>
  <Features></Features>
  <Divider style="background: rgb(5, 40, 64, 0.1);" align="center" type="solid"><img src="../assets/images/logo_securebag.png" alt="Logo" height="50" /></Divider>
  <Testimonials></Testimonials>
  <Divider align="center" type="solid"><img src="../assets/images/logo_securebag.png" alt="Logo" height="50" /></Divider>
  <Contact></Contact>
  <Divider align="center" type="solid"><img src="../assets/images/logo_securebag.png" alt="Logo" height="50" /></Divider>
  <AboutUs></AboutUs>
  <Footer></Footer>
</template>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  background: url('../assets/images/inicio_fondo.png') no-repeat right top;
}
.container_main {
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  margin-top: 5rem;
}
.container_content {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 2rem;
  padding: 2rem;
  z-index: 1;
}
.container_title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: rgb(44, 131, 141);
}
.container_info {
  font-size: 1.5rem;
  color: rgb(5, 40, 64);
}
.container_buttons {
  justify-content: center;
}
.button {
  margin: 2rem 1rem 0 1rem;
  background: linear-gradient(90deg, #24c6a9, #052e27);
  border-radius: 5rem;
  width: 150px;
  cursor: pointer;
  transition: all .3s linear;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.5);

  span {
    color: whitesmoke;
  }
  i {
    margin: 1rem;
    color: whitesmoke;
  }
}
.button:hover {
  transform: scale(1.1);
}
.container_image {
  margin-top: 10rem;

  img {
    animation: float 3s linear infinite;
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0rem);
  }
  50% {
    transform: translateY(-2.5rem);
  }
}
.container_scroll {
  padding: 2rem;
  color: rgb(5, 40, 64);
  font-weight: bold;
}

@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .container_main {
    width: 1024px;
  }
  .container_scroll {
    margin-bottom: 2rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container_main {
    width: 768px;
  }
  .container_content {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .container_title {
    color: black;
    font-size: 2.5rem;
  }
  .container_info span {
    display: none;
  }
  .container_image {
    padding: 0;

    img {
      height: 450px;
    }
  }
}
@media screen and (max-width: 768px) {
  .container_title {
    font-size: 2rem;
    color: whitesmoke;
    padding-top: 5rem;
  }
  .container_info {
    font-size: 1rem;
    color: black;

    span {
      display: none;
    }
  }
  .container_main {
    width: 100%;
    flex-direction: column;
    padding: 0;
  }
  .container_content {
    width: 100%;
    height: 25%;
    text-align: center;
  }
  .container_buttons {
    width: 100%;
  }
  .container_image img {
    height: 300px;
    margin-top: 1rem;
  }
  .container_image {
    margin-top: 7.5rem;
  }
}
@media screen and (max-width: 500px) {
  .container_scroll {
    display: flex;
    position: absolute;
    bottom: 0;
    padding: 0;
  }
  .container_buttons {
    display: flex;
    align-items: center;
  }
  .container_title {
    padding-top: 2.5rem;
    color: whitesmoke;
  }
  .container_content {
    margin: 0;
    padding: 0;
  }
  .container_info span {
    display: none;
  }
  .container_image img {
    height: 275px;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  .container_image {
    margin-top: 5rem;
  }
}
</style>