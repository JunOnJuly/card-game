<template>
  <div>
    <cards-comp></cards-comp>
  </div>
</template>

<script>
import CardsComp from '@/components/CardsComp.vue'

export default {
  components: {
<<<<<<< HEAD
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
      this.solution = Object.keys(this.solution).toString()
      console.log(this.solution)
      setTimeout(() => {
        this.selectedCards = this.$store.state.selectedCards
        }
      , 1000)
      this.dialog0 = true
    },
    reserve1 (index) {
      this.loading[index] = true
      console.log(Object.keys(this.selectedCards[index])[0])
      if (Object.keys(this.selectedCards[index])[0] === this.solution[1]) {
        setTimeout(() => this.dialog1 = 'success')
        console.log('정답입니다!')
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
    
=======
    CardsComp,
>>>>>>> b8c32b00b803829c17cc4e001f666932f5cde857
  }
}
</script>

<style>

</style>