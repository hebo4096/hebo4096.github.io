<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="https://avatars.githubusercontent.com/u/49871045" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Shogo Shimahara">
          Shogo Shimahara
        </h1>
        <LangSwitcher2 />
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-twitter" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              X (Twitter)
            </p>

            <a href="https://twitter.com/boboboboheaa" class="contact-link" target="_blank">hebo</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/hebo4096" class="contact-link" target="_blank">hebo4096</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://id.linkedin.com/in/shogo-s-49000a1b7" class="contact-link" target="_blank">Shogo Shimahara</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Japan</address>
          </div>
        </li>
      </ul>

      <div class="separator" />
    </div>
  </aside>
</template>
