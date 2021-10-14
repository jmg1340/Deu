<template>
	<q-card>
		<div class="text-right q-mr-md q-mt-sm">
			<q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn>
		</div>

		<q-card-section v-for="(misteri, indexMisteri) in misteris" :key="misteri">
			<div :class="{'text-negative': !$q.dark.isActive, 'text-orange': $q.dark.isActive}"> {{ misteri }} </div>

      <div class="text-grey-6">Pare nostre...</div>
      <div class="text-grey-6">10 Avemaries...</div>
			<div class="text-center">
				<q-img
					src="~assets/maria.jpg"
					spinner-color="white"
					style="max-width: 200px"
					class="q-mb-md"
				/>
			</div>

			<div class="row q-gutter-md q-mb-sm justify-center" >
				<cmp_unitat v-for="n in 10" :numero="n" :key="n" :ref="'m'+indexMisteri+'u'+n" />
			</div>
			<div class="text-grey-6">Gloria...</div>
			<div>Maria, mare de gràcia i mare de misericòrdia, defensa'ns dels nostres enemics i ampara'ns ara i en la hora de la nostra mort. Amén.</div>
			<div>Oh Jesús, perdona els nostres pecats, allibera'ns del foc de l'infern i porta atotes les ànimes al cel especialment les més necessitades de la teva misericòrdia</div>
		</q-card-section>
	</q-card>
</template>

<script>
import cmp_unitat from "./santRosari_unitat"
export default {
  name: 'santRosari_misteris',
  props: ["misteris"],
  components: {cmp_unitat},
  data() {
    return {
    };
  },
  methods: {
  	resetAll: function() {
		console.log("this.$refs['m0']:");
		console.log(this.$refs['m0'])
		console.log("this:");
		console.log(this)
		
  		for (let m=0; m < 5; m++) {
				for (var n=1; n <= 10; n++){
					console.log(`unitat ${n} del misteri`)
  				this.$refs['m'+ m +'u' + n].reset()
  			}
  		}
  	}
  }
};
</script>

<style lang="css" scoped>
</style>