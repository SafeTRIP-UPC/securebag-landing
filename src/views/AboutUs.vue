<script setup>

</script>

<template>
  <section id="about-us" class="about-us">
    <div class="container_about-us">
      <h1 style="font-size: 2rem;">ABOUT US</h1>
      <h3 style="margin-bottom: 1rem;">Mira el video acerca de SafeTRIP</h3>
      <Button class="button" label="GitHub" text plain onclick="window.open('https://github.com/SafeTRIP-UPC', 'target_blank');">
        <i class="pi pi-github"></i>
        <a class="contact-button">GitHub</a>
      </Button>
      <iframe width="1000" height="500" src="https://www.youtube.com/embed/RwU7YY6emYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container_profiles">
        <div class="profile" onclick="window.open('https://github.com/WilverAR', 'target_blank');">
          <img src="../assets/images/profile_wilver.png" alt="Wilver Arana R." width="125" height="125"/>
          <span>Wilver Arana R.</span>
          <p>@WilverAR</p>
        </div>
        <div class="profile" onclick="window.open('https://github.com/WilverAR', 'target_blank');">
          <img src="../assets/images/profile_wilver.png" alt="Alejandro" width="125" height="125"/>
          <span>Alejandro Nolasco M.</span>
          <p>@AlejandroNM</p>
        </div>
        <div class="profile" onclick="window.open('https://github.com/WilverAR', 'target_blank');">
          <img src="../assets/images/profile_wilver.png" alt="Luis" width="125" height="125"/>
          <span>Luis Prado V.</span>
          <p>@LuisPV</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  height: 100%;
}
.container_about-us {
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-top: 5rem;
  color: rgb(5, 40, 64);

  h1 {
    color: rgb(44, 131, 141);
  }
  Button {
    display: flex;
    justify-content: center;
    width: 125px;
    height: 50px;
    border-radius: 1rem;
    border: 2px solid black;
    background-color: darkslategray;
    margin-bottom: 2rem;

    i {
      margin-right: 0.5rem;
      color: whitesmoke;
    }
    a {
      text-decoration: none;
      color: whitesmoke;
    }
  }
  Button:hover {
    background: black;
  }
}
.container_profiles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding: 5rem;

  div {
    display: flex;
    flex-direction: column;

    img {
      border-radius: 50%;
    }
    span {
      font-size: 1.25rem;
      color: rgb(44, 131, 141);
    }
    p {
      color: rgb(5, 40, 64);
      font-weight: bold;
    }
  }
}
.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all .3s linear;
}
.profile:hover {
  transform: scale(0.9);
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  iframe {
    width: 750px;
  }
}
@media screen and (max-width: 768px) {
  iframe {
    width: 550px;
  }
  .container_profiles {
    gap: 3rem;
  }
}
@media screen and (max-width: 600px) {
  iframe {
    width: 400px;
  }
  .container_profiles {
    display: flex;
    flex-direction: column;
  }
}
</style>