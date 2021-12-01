<template>
  <div class="column is-half-tablet is-one-quarter-desktop">
    <div class="block">
      <div class="player">
        <p class="title t-n is-6 nm" v-if="playerData">{{ playerData.name }}</p>
      </div>
      <!-- <pre>{{ counter }}</pre> -->
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

<script>
import { toRefs } from "vue";
import useSWRV from "swrv";

const API_URL =
  "http://webproxy.stowy.ch/?url=https://sessionserver.mojang.com/session/minecraft/profile/";

const fetcher = function (url) {
  return fetch(url).then(r => r.json())
}

export default {
  ts: {},
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  // methods: {},
  // mounted() {},
  setup(props) {
    const { uuid } = toRefs(props);
    const link = API_URL + uuid.value;
    console.log(link);
    const { data: playerData, error } = useSWRV(link, fetcher);
    return { playerData, error };
  },
};
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
