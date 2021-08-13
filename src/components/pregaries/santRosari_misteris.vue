<template>
	<q-card>
		<div class="text-right q-mr-md q-mt-sm">
			<q-btn noCaps dense color="negative" @click="resetAll">Reset</q-btn>
		</div>

		<q-card-section v-for="(misteri, index) in misteris" :key="misteri">
			<div class="q-mb-xs"> {{ misteri }} </div>
			<div class="row q-gutter-md">
				<cmp_unitat v-for="n in 10" :numero="n" :key="n" :ref="'m'+index" />
			</div>
			<div>
				Maria, mare de gràcia i mare de misericòrdia, defensa'ns dels nostres enemics i ampara'ns ara i en la hora de la nostra mort. Amén.</div>
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
		console.log("this.refs$:");
		console.log(this.refs$)
		console.log("this:");
		console.log(this)
		
  		this.misteris.forEach( function (misteri, index) {
  			this.refs$["m" + index].forEach( function( unitat ){
				console.log(`unitat ${index} del misteri M-${index}`)
  				unitat.reset()
  			})
  		}, this)
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
