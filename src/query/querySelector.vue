<template>
<div>
  <center>
  <div v-for="card in availableData" :key="card.id" >

<v-card style="width:300px;margin:0px;" >
          <v-card-title >

                <h2 class="song-name">{{card.song_name}}
              </h2>

              </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Artists:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ card.song_artists}}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Danceability:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ card.song_danceability }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Energy:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_energy }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Key:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ card.song_key }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Loudness:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_loudness }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Mode:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ card.song_mode}}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Speechiness:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_speechiness }}</v-list-tile-content>
            </v-list-tile>
              <v-list-tile>
              <v-list-tile-content>Acousticness:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_acousticness }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Instrumentalness:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_instrumentalness }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Liveness:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_liveness }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Valence:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_valence }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Tempo:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_tempo }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Duration_ms:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_duration_ms }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Time_Signature:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_time_signature }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Rank:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{card.song_rank }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
  </div>
  </center>
</div>
</template>


<script >

  export default {
    name: 'querySelector',
    props: ['id'],
    data () {

      return {
        song_id : this.$route.params.id
      }
    },
    computed : {
      availableData() {
      let songs = this.$store.state.datas
      return songs.filter( item => item.id == this.song_id)
    }
    }
  }
</script>

<style >
.song-name{
    max-width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
}
</style>

