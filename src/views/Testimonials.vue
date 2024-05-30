<script setup>

</script>

<template>
  <section style="background: rgb(5, 40, 64, 0.1);" id="testimonials" class="testimonials">
    <div class="container_testimony">
      <div class="container_title">TESTIMONIALS</div>
      <div class="testimony">
          <i class="pi pi-comments icon"></i>
          <img src="../assets/images/user_1.png" alt="" width="100" height="100">
          <h3>Carlos Ramirez P.</h3>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="comments">
            "I had an issue with my luggage on my last trip, and thanks to SecureBag,
            I was able to resolve it quickly. The app is super easy to use and gave me the peace of mind I needed.
            I highly recommend it to all travelers!."
          </div>
      </div>
      <div class="testimony">
        <i class="pi pi-comments icon"></i>
        <img src="../assets/images/user_3.png" alt="" width="100" height="100">
        <h3>Alejandro Medina T.</h3>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="comments">
          "I've never found such an effective solution for insuring my luggage.
          SecureBag uses advanced technology that makes the whole process quick and accurate.
          It's an app that every traveler should have on their phone."
        </div>
      </div>
      <div class="testimony">
        <i class="pi pi-comments icon"></i>
        <img src="../assets/images/user_4.jpg" alt="" width="100" height="100">
        <h3>Maria Lana R.</h3>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="comments">
          "I've never found such an effective solution for insuring my luggage.
          SecureBag uses advanced technology that makes the whole process quick and accurate.
          It's an app that every traveler should have on their phone."
        </div>
      </div>
    </div>
  </section>
  <section id="download" class="downloads">
    <div class="container_downloads">
      <div class="container_image">
        <img src="../assets/images/cell.png" alt="Logo" height="550" />
      </div>
      <div class="container_content">
        <div class="content_title">
          <span style="font-weight: bold">DOWNLOAD SECUREBAG</span>
        </div>
        <div class="content_info">
          <p>Download <span style="color: rgb(44, 131, 141); font-weight: bold;">SecureBag</span> travel with peace of mind knowing that your belongings are protected. Our mobile app allows you to quickly and easily quote and manage baggage loss insurance, with automatic item scanning and instant personalized quotes.</p>
        </div>
        <div class="content_buttons">
          <Button class="button" label="Google Play" text plain>
            <img src="../assets/images/play_store.png" alt="Google Play" height="30" />
            <span>Google Play</span>
          </Button>
          <Button class="button" label="App Store" text plain>
            <img src="../assets/images/app_store.png" alt="App Store" height="30" />
            <span>App Store</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.downloads {
  background: url("../assets/images/fondo_download.png") no-repeat left top;
  background-position: 250px -80px;
  background-size: 550px;
}
.container_image {
  width: 40%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  img {
    animation: float 3s linear infinite;
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0rem);
  }
  50% {
    transform: translateY(-3.5rem);
  }
}
.container_content {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.content_title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: rgb(44, 131, 141);
}
.content_info {
  font-size: 1.25rem;
}
.content_buttons {
  margin-top: 2rem;
}
.container_downloads {
  width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(5, 40, 64);
}
.button {
  width: 155px;
  height: 50px;
  background: black;
  color: whitesmoke;
  margin: 2rem 1rem 0 1rem;
  place-content: center;
  border-radius: 5rem;
  cursor: pointer;
  transition: all .3s linear;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.5);

  img {
    border-radius: 50%;
    object-fit: cover;
  }
}
.button:hover {
  transform: scale(1.1);
}
.container_testimony {
  width: 1280px;
  display: flex;
  align-items: center;
  color: black;
  flex-wrap: wrap;
  max-width: 100%;
}
.container_title {
  display: flex;
  margin-bottom: 5rem;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(44, 131, 141);
}
.testimony {
  flex: 1 1 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  gap: 1rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  transition: all .3s linear;
  color: rgb(5, 40, 64);
  background: rgba(255, 255, 255, 0.7);

  h3 {
    color: rgb(44, 131, 141);
  }
  img {
    border-radius: 50%;
  }
}
.testimony:hover {
  transform: scale(0.9);
}
.icon {
  margin-left: auto;
  font-size: 2rem;
  color: rgb(44, 131, 141);
}
.stars {
  color: gold;
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .downloads {
    background-position: 0 -25px;
    background-size: 600px;
  }
  .container_downloads {
    width: 1024px;
    gap: 5rem;
  }
  .container_content {
    width: 50%;
  }
}
@media screen and (max-width: 1024px) {
  .downloads {
    background: url("../assets/images/fondo_download.png") no-repeat center;
    background-size: 650px;
    height: 100%;
  }
  .container_downloads {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5rem;
  }
  .container_image img {
    height: 350px;
  }
  .content_buttons {
    margin-bottom: 5rem;
  }
  .testimonials {
    height: 100%;
  }
  .content_title {
    color: rgb(5, 40, 64);
  }
  .content_info span {
    color: rgb(5, 40, 64) !important;
  }
  .container_title {
    margin-top: 5rem;
  }
}
</style>
