<template>
  <div class="column is-half-tablet is-one-quarter-desktop">
    <div class="block">
      <div class="player">
        <p class="title t-n is-6 nm" v-if="playerData != null">
          {{ playerData.name }}
        </p>
      </div>
      <span>
        <p>
          Temps de jeu :
          <!-- {{ tick(player.data.stats.minecraft_custom.minecraft_play_time) }} -->
          3h
        </p>
        <p>
          Nombre de morts :
          <!-- {{ player.data.stats.minecraft_custom.minecraft_deaths }} -->
          3
        </p>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

@Options({
  data() {
    return {
      playerData: null,
    };
  },
  components: {},
  props: {
    uuid: String,
  },
  methods: {
    getPlayerData() {
      axios
        .get(
          "http://webproxy.stowy.ch/?url=https://sessionserver.mojang.com/session/minecraft/profile/" +
            this.uuid
        )
        .then((response) => (this.playerData = response.data));
    },
  },
  mounted() {
    this.getPlayerData();
  },
})
export default class Banner extends Vue {
  uuid!: string;
}
</script>

<style scoped>
.block {
  background-color: #313342;
  padding: 5px 10px 5px 10px;
  border-radius: 2.5px;
  margin-bottom: 10px;
}

.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
}

.player span {
  display: flex;
}
</style>
