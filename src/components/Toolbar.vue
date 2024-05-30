<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeLink = ref('main');

const setActiveLink = (link) => {
  activeLink.value = link;
};

const handleScroll = () => {
  const sections = ['main', 'features', 'testimonials', 'about-us'];
  let currentSection = '';

  for (let section of sections) {
    const element = document.getElementById(section);
    const rect = element.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section;
      break;
    }
  }

  activeLink.value = currentSection;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <div class="toolbar">
    <div class="header">
      <Toolbar style="border-radius: 3rem; padding: 1.5rem;" class="edit">
        <template #start>
          <img src="../assets/images/logo_securebag.png" alt="logo" height="50"/>
          <div class="container_title">
            Secure<span class="bordered-text" style="color: rgb(44, 131, 141);">BAG</span>
          </div>
        </template>
        <template #center>
          <div class="container_links">
            <div class="flex align-items-center gap-5">
              <a href="#main" :class="{ active: activeLink === 'main' }" @click="setActiveLink('main')">
                <Button label="Home" text plain />
              </a>
              <a href="#features" :class="{ active: activeLink === 'features' }" @click="setActiveLink('features')">
                <Button label="Features" text plain />
              </a>
              <a href="#testimonials" :class="{ active: activeLink === 'testimonials' }" @click="setActiveLink('testimonials')">
                <Button label="Testimonials" text plain />
              </a>
              <a href="#about-us" :class="{ active: activeLink === 'about-us' }" @click="setActiveLink('about-us')">
                <Button label="About Us" text plain />
              </a>
            </div>
          </div>
        </template>
        <template #end>
          <Button class="container_icon_download" label="Icon Download" text plain>
            <i class="pi pi-download"></i>
          </Button>
          <Button class="container_download" label="Download" text plain>
            <span>Download</span>
            <i class="pi pi-download"></i>
          </Button>
          <Button class="button_menu" label="Menu" text plain @click="toggleMenu()">
            <i v-if="!menuOpen" class="pi pi-bars" style="font-size: 1.5rem"></i>
            <i v-if="menuOpen" class="pi pi-times" style="font-size: 1.5rem"></i>
          </Button>
        </template>
      </Toolbar>
    </div>
  </div>
  <div class="container_menu" :class="{ 'menu-open': menuOpen }">
    <a href="#main" @click="closeMenu()">
      <Button label="Home" text plain />
    </a>
    <a href="#features" @click="closeMenu()">
      <Button label="Features" text plain />
    </a>
    <a href="#testimonials" @click="closeMenu()">
      <Button label="Testimonials" text plain />
    </a>
    <a href="#about-us" @click="closeMenu()">
      <Button label="About Us" text plain />
    </a>
  </div>
</template>

<style scoped>
a.active Button {
  color: rgb(44, 131, 141);
  font-weight: bold;
}
.edit {
  backdrop-filter: blur(15px);
  box-shadow: 0 5px 10px 1px rgb(0, 0, 0, 0.25);
}
.header {
  position: fixed;
  width: 1280px;
  margin-top: 1.5rem;
  z-index: 100;
}
.toolbar {
  display: flex;
  justify-content: center;

  img {
    margin: 0 0.5rem;
  }
}
Button {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: black;
}
Button:hover {
  color: rgb(44, 131, 141);
}
.container_download, .container_icon_download {
  justify-content: center;
  border: 2px solid rgb(44, 131, 141);
  margin-right: 0.5rem;
  font-weight: bold;

  span {
    margin-right: 0.5rem;
    color: rgb(44, 131, 141);
  }
  i {
    color: rgb(44, 131, 141);
  }
}
.container_download:hover {
  background-color: rgb(44, 131, 141);

  span, i {
    color: whitesmoke;
  }
}
.container_title {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
.container_menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1rem;
}
.container_menu.menu-open {
  display: flex;
}
.button_menu {
  display: none;
}
.container_icon_download {
  display: none;
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .header {
    width: 1000px;
  }
}
@media screen and (max-width: 1024px) {
  .header {
    width: 750px;
  }
  .container_links {
    display: none;
  }
  .button_menu {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .header {
    width: 95%;
  }
}
@media screen and (max-width: 515px) {
  .container_download {
    display: none;
  }
  .container_icon_download {
    display: flex;
  }
}
</style>