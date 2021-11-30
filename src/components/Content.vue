<template>
  <section class="section" id="view">
    <div class="container dm-b">
      <players-list />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PlayersList from "./PlayersList.vue";

@Options({
  components: {
    PlayersList,
  },
})
export default class Banner extends Vue {}
</script>
