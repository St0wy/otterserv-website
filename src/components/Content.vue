<template>
  <section class="section" id="view">
    <div class="container dm-b">
      <players-list />
    </div>
  </section>
</template>

<script>
import PlayersList from "./PlayersList.vue";

export default {
  components: {
    PlayersList,
  },
}
</script>
