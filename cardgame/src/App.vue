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
              @click="reserve1(index)"
              :loading="loading[index]"
              class="mx-auto my-12"
              max-width="374"
              v-for="(card, index) in selectedCards"
              :key="index"
              >
                <v-img
                  height="auto"
                  width="30vw"
                  :src="require(`${Object.values(selectedCards[index])[0]}`)"
                ></v-img>

              </v-card>

        </div>  
      </div>
      
      
      <div>
        <v-dialog
        v-model="dialog1"
        hide-overlay
        persistent
        width= "50%"
        >
        <img v-if="dialog1==='success'" src="./assets/success.jpg" style="width: 100%; height: 100%;">
        <img v-else src="./assets/fail.jpg" style="width: 100%; height: 100%;">
        </v-dialog>
      </div>


      <div>
        <v-dialog
        v-model="dialog0"
        hide-overlay
        persistent
        width= "50%"
        >
        <h1 v-if="this.solution.length > 0">
          {{this.solution[0]}}
        </h1>
        </v-dialog>
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
      solution: [],
      dialog1: false,
      dialog0: false,
    }
  },
  methods: {
    createCards () {
      console.log(`올바른 카드를 고르세요`)
      this.$store.commit('sampleCards')
      this.solution = this.$store.state.solutionCard[0]
      this.solution = Object.keys(this.solution)
      console.log(this.solution);
      setTimeout(() => {
        this.selectedCards = this.$store.state.selectedCards
        }
      , 1000)
      this.dialog0 = true
    },
    reserve1 (index) {
      this.loading[index] = true
      console.log(this.solution);
      console.log(Object.keys(this.selectedCards[index]));
      if (Object.keys(this.selectedCards[index]) === this.solution[1]) {
        setTimeout(() => this.dialog1 = 'success')
        console.log('정답입니다!');
        this.dialog1 = 'false'

      } else {
        setTimeout(() => this.dialog1 = 'fail')
        console.log('다시 골라보세요')
        this.dialog1 = 'false'
      }
      setTimeout(() => (this.loading[index] = false), 2000)
    },
  },
  watch: {
    dialog0 (val) {
      if (!val) return

      setTimeout(() => (this.dialog0 = false), 1000)
    },

    dialog1 (val) {
      if (!val) return

      setTimeout(() => (this.dialog1 = false), 2000)
    },
    
  }
}
</script>

<style>

</style>
