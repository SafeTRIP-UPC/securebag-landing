<script setup>

</script>

<template>
  <section id="about-us" class="about-us">
    <div class="container_about-us">
      <h1 style="font-size: 2rem;">ABOUT US</h1>
      <p>Mira el video acerca de SecureBag</p>
      <Button class="button" label="GitHub" text plain>
        <i class="pi pi-github"></i>
        <a href="https://github.com/WilverAR" class="contact-button">GitHub</a>
      </Button>
      <iframe width="1000" height="500" src="https://www.youtube.com/embed/RwU7YY6emYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container_profiles">
        <div class="profile">
          <img src="../assets/images/profile_wilver.png" alt="Wilver Arana R." width="100" height="100"/>
          <span>Wilver Arana R.</span>
          <p>@WilverAR</p>
        </div>
        <div class="profile">
          <img src="../assets/images/profile_wilver.png" alt="Alejandro" width="100" height="100"/>
          <span>Alejandro Nolasco M.</span>
          <p>@AlejandroNM</p>
        </div>
        <div class="profile">
          <img src="../assets/images/profile_wilver.png" alt="Luis" width="100" height="100"/>
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
  margin-top: 10rem;

  h1 {
    color: midnightblue;
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
    }
    p {
      color: midnightblue;
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