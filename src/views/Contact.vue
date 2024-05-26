<script setup>

</script>

<template>
  <section id="contact" class="contact">
    <div class="container_contact">
      <h1>CONTACT US FOR MORE NEWS</h1>
      <h4>Do you have any questions or want to know more about SecureBag?</h4>
      <p>Send us an email and we will respond as soon as possible.</p>
      <Button class="button" label="Contact" text plain>
        <i class="pi pi-envelope"></i>
        <a href="mailto:wilver.ar.dev@gmail.com" class="contact-button">Contact</a>
      </Button>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: url('../assets/images/fondo_sub.png') no-repeat center;
  height: 55vh;
}
.container_contact {
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  gap: 1.5rem;

  Button {
    display: flex;
    justify-content: center;
    width: 125px;
    height: 50px;
    border-radius: 1rem;
    border: 2px solid whitesmoke;
    background-color: rgb(0, 0, 0, 0.50);

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

@media screen and (max-width: 768px) {
  .container_contact {
    display: flex;
    text-align: center;
    width: 80%;
  }
}
</style>