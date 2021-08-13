<template>
	<div class="row justify-center items-center gutter-sm q-my-sm">
		<div v-for="(element, index) in rosari" :key="index" class="casella shadow-2 round-borders q-ma-sm " :class="{clFet: element.valor}" @click="element.valor = !element.valor">
			{{index + 1}}
			<!-- <q-tooltip>{{element.valor}}</q-tooltip> -->
		</div>
	</div>
</template>

<script>
export default {
  name: 'jmg-rosari',
  
  created (){
  	for(var i=0; i<10 ; i++){
  		this.rosari.push({valor: false});
  		//console.log(JSON.stringify(this.rosari[i]));
  	}
  	//console.log("matriu rosari omplert: " + this.rosari);
  },

  data(){
  	return{
 		rosari: [],
  	}
  },


}
</script>




<style>

	.casella{
		border: 1px solid black;
		height: 50px;
		width: 50px;
		/*text-align: center;*/
	}

	.clFet{
		background-color: lightgreen;
	}

</style>
