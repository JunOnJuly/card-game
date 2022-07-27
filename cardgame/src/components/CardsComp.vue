<template>
  <div>

    <v-app>
      <v-btn
      class="white--text"
      color="purple darken-2"
      @click="createCards"
      >
        create Cards
      </v-btn>
      <div v-if="this.selectedCards.length > 0">
        <div style="width: 100%; display: flex;">
            
              <v-card
              @click="reserve(index)"
              :loading="loading[index]"
              class="mx-auto my-12"
              max-width="374"
              v-for="(card, index) in selectedCards"
              :key="index"
              >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="auto"
                  width="30vw"
                  :src="require(`${selectedCards[index]}`)"
                ></v-img>

                <v-divider class="mx-4"></v-divider>

              </v-card>

        </div>  
      </div>

    </v-app>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      selectedCards: [],
      loading: [false, false, false],
      selection: 1,
      solution: null,
    }
  },
  methods: {
    createCards () {
      console.log(`올바른 카드를 고르세요`)
      this.$store.commit('sampleCards')
      this.solution = this.$store.state.solutionCard
      console.log(this.solution);
      setTimeout(() => this.selectedCards = this.$store.state.selectedCards, 1000)
    },

    reserve (index) {
      this.loading[index] = true
 
      if (index === this.solution[1]) {
        console.log('정답입니다!');
      }
      setTimeout(() => (this.loading[index] = false), 2000)
    },
  }
}
</script>

<style>

</style>
