<script setup>

</script>

<template>
  <section id="contact" class="contact">
    <div class="container_contact">
      <h1>CONTACT US FOR MORE INFORMATION</h1>
      <h4>Do you have any questions or want to know more about SecureBag?</h4>
      <p>Send us an email and we'll get back to you as soon as possible.</p>
      <Button class="button" label="Contact" text plain onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=wilver.ar.dev@gmail.com&su=INQUIRY%20ABOUT%20SECUREBAG', 'target_blank');">
        <i class="pi pi-envelope"></i>
        <a class="contact-button">Contact</a>
      </Button>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: url('../assets/images/fondo_sub.png') no-repeat center;
  background-size: 150% 75%;
  height: 75vh;
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