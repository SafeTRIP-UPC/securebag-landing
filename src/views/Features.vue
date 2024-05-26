<script setup>

</script>

<template>
  <section id="features" class="features">
    <div class="container_features">
      <div class="container_image">
        <img src="../assets/images/cell.png" alt="Logo" height="550" />
      </div>
      <div class="container_content">
        <div class="container_feature">
          <div class="title">
            <i class="pi pi-check-circle"></i>
            <span>Comparación de Planes de Seguro</span>
          </div>
          <div class="description">
            <p>Compara rápidamente entre diferentes planes de seguro para encontrar el que mejor se adapte a tus necesidades y presupuesto.</p>
          </div>
        </div>
        <div class="container_feature">
          <div class="title">
            <i class="pi pi-check-circle"></i>
            <span>Escaneo y Reconocimiento de Objetos</span>
          </div>
          <div class="description">
            <p>La tecnología de escaneo y reconocimiento de objetos permite a los usuarios capturar y evaluar automáticamente el contenido de su equipaje.</p>
          </div>
        </div>
        <div class="container_feature">
          <div class="title">
            <i class="pi pi-check-circle"></i>
            <span>Valoración Automática del Equipaje</span>
          </div>
          <div class="description">
            <p>La valoración del contenido de tu equipaje se realiza automáticamente, eliminando la necesidad de realizar declaraciones manuales.</p>
          </div>
        </div>
        <div class="container_feature">
          <div class="title">
            <i class="pi pi-check-circle"></i>
            <span>Gestión Personalizada de Pólizas</span>
          </div>
          <div class="description">
            <p>Ofrece una gestión personalizada de pólizas, adaptada a tus necesidades específicas. Puedes ajustar fácilmente tus coberturas y límites de seguro según tus preferencias.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="video">
    <div class="video_title">
      <span>¿HOW DOES SECUREBAG WORK?</span>
      <h4>Watch the video about our product</h4>
    </div>
    <iframe width="1000" height="500" src="https://www.youtube.com/embed/RwU7YY6emYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section>
</template>

<style scoped>
.features {
  background: url('../assets/images/fondo_feature.png') no-repeat left top;
}
.container_features {
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_image {
  margin-top: 10rem;
  width: 50%;

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
  margin-top: 5rem;
  padding: 5rem;
  width: 60%;
}
.container_feature {
  margin: 1rem 0;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  color: midnightblue;
  background-color: rgba(255, 255, 255, 0.75);

  i {
    margin-right: 0.5rem;
  }
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    margin-top: 0.5rem;
    color: black;
  }
}
.container_feature:hover {
  background-color: midnightblue;

  span, p, i {
    color: whitesmoke;
  }
}
.container_image {
  display: flex;
  justify-content: center;
  width: 40%;
}
.about_of_the_product iframe {
  width: 50%;
  height: auto;
  aspect-ratio: 16 / 9;
}
.video, .video_title {
  display: flex;
  flex-direction: column;
}
.video_title {
  align-items: center;
  margin-bottom: 3rem;
  gap: 1rem;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: midnightblue;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .container_features {
    width: 1024px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container_image {
    display: none;
  }
  .container_content {
    width: 768px;
  }
  iframe {
    width: 768px;
  }
}
@media screen and (max-width: 768px) {
  .container_image {
    display: none;
  }
  .container_content {
    width: 500px;
  }
  iframe {
    width: 480px;
  }
}
@media screen and (max-width: 500px) {
  iframe {
    width: 400px;
  }
}
</style>