<template>
  <p class="title t-n is-5">Liste des joueurs</p>
  <div class="columns is-multiline">
    <player v-for="uuid in uuids" v-bind:key="uuid" v-bind:uuid="uuid">
    </player>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Player from "./Player.vue";

@Options({
  components: {
    Player,
  },
  data() {
    return {
      uuids: [
        "1038ea49-8b8a-4392-8801-e746df031c8d",
        "2268e844-5772-48c7-a903-6026598e09f5",
        "3532b37f-ee03-4ec1-b3f6-9f823b559210",
        "4a8f4421-fbab-49fb-a746-1cc19171c2e1",
        "5e4fa152-795b-4686-a556-f0db831781e4",
        "6e7ca6e7-9948-46b3-9050-9b29f5b919da",
        "776b2d8a-a506-4e76-94ed-a73617eceb79",
        "8c8b4d2f-0178-4a27-9719-3d1dc0a3da48",
        "8d2857e0-5eb0-4ce0-a5b5-f7e9e07902ba",
        "addc6468-d97c-40fe-8f44-26907c673e66",
        "b4498d9c-5399-480f-bd8b-3f6c8bf52fb6",
        "c152a660-21e6-458a-b79b-6a9cdd1403f2",
        "d7656ed1-dee6-4454-84c5-b57d355f1391",
        "de85c523-b744-4d29-869e-e256d0e0eb55",
        "ecafd402-6d1e-465a-b706-4795f9e50677",
      ],
    };
  },
  props: {},
  // mounted() {},
})
export default class Banner extends Vue {}
</script>
