<script setup>
useHead({
  title: "Love Time",
});
</script>

<template>
  <header>
    <div id="counting" class="container">
      <div class="header-image">
        <div class="header-image-content">
          <img class="images-main" src="~/assets/img/main/image8.jpg" />
        </div>
        <div class="chimmy">
          <img class="image-chimmy" src="~/assets/img/main/chimmy.png" />
        </div>
        <div class="header-image-content">
          <img class="images-main" src="~/assets/img/main/image7.jpg" />
        </div>
      </div>
      <div class="time-countting">
        <ul>
          <li><span id="days"></span> days</li>
          <li><span id="hours"></span> Hours</li>
          <li><span id="minutes"></span> Minutes</li>
          <li><span id="seconds"></span> Seconds</li>
        </ul>
      </div>
    </div>
  </header>
</template>
