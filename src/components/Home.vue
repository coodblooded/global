<template>
    <div class="home">
      <div style="width:300px; margin:2% 40%">
        <input class="form-control" type="text" v-model="search" placeholder="Search Songs or Artists.."/>
      </div>

  <div class="grid-container">
    <div id="demo" v-for="card in availableData.slice((page - 1)*50 , (50 * page))"
                v-bind="{ [`xs${card.flex}`]: true }"
                :key="card.id">
             <div class="card">
                  <div class="card-body song-name" >
                    <router-link :to="{
                        name: 'queryselector',
                        params: {id: card.id}
                      }" class="link">
                        <span data-toggle="tooltip" data-placement="top" v-bind:title="card.song_name">
                          {{card.song_name}}
                        </span>
                    </router-link><br>
                    <p class="artists-name"> <i class="fa fa-user" data-toggle="tooltip" data-placement="top" title="Artists"></i> {{card.song_artists}}</p>
                  </div>
                  <div class="card-footer"> <i class="fa fa-hashtag" data-toggle="tooltip" data-placement="top" title="Rank"></i> <span > {{card.song_rank}}</span></div>
             </div>

    </div>
    </div>
          <div class="text-xs-center">
              <v-pagination
                v-model="page"
                :length="2"
                circle
              ></v-pagination>
          </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
    data: () => ({
      cards: [],
      page: 1,
      search: ''
    }),
    created () {
      this.$store.dispatch('getsongsdata')
    },
  computed:{
    availableData() {
      const songsdata = this.$store.state.datas

      if (songsdata === null ){
        return []
      }
      else{

      return songsdata.filter( item => {
        return item.song_name.toLowerCase().includes(this.search.toLowerCase()) || item.song_artists.toLowerCase().includes(this.search.toLowerCase())
      })
      }

    },
    NestData() {
      var Findex = (this.page - 1) * 50;
      var toIndex= (this.page  * 50) + 1;
      return this.cards.slice(Findex,toIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  /* background-color: #2196F3; */
  padding: 5px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
}

.tool{
  cursor: pointer;
  margin: auto;
  text-align: center;

}
.toobar:hover{
  background-color: #275d44;
}
.link{
  text-decoration: none;
}
.test-ani{
  transition: .5s;

}
.test-ani:hover{
  font-weight: 400;
  transition: .5s;
  transform: scale(1.2)
}
#demo {
  padding: 0px;
  margin: 0px;
-webkit-transition:.15s all ease-in-out;
transition: .15s all ease-in-out;
-webkit-box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.63);
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
}
#demo:hover{
 -moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
-o-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
}
.song-name{
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
}
.link{
  text-decoration: none;
  color: black
}
.artists-name{
  margin-top: 5%;
  margin-bottom: -10%;
  color :rgb(60, 5, 105);
  font-size: 11px;
}
</style>
