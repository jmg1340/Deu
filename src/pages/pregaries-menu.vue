<template>
  <div class="q-pa-sm q-ma-xl">
		
		<div class="text-h5 text-center text-weight-light q-my-md">Pregàries</div>

		<q-list 
			bordered 
			separator 
			:class="{'text-grey-10 bg-green-1': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			>
      <q-item 
				v-for="(pregaria, index) in aPregaries" :key="index"
				:to="'/pregaria/' + pregaria.numero"
				clickable 
				v-ripple>
        	<q-item-section>{{pregaria.nom}}</q-item-section>
      </q-item>
		</q-list>



  </div>
</template>





<script>
export default {
  // name: 'PageName',
  
  		

  data(){
  	return{
			aPregaries: [
				{numero: 1, nom: "Oferiment de Vida (sor Natalia Magdolna)"},
				{numero: 2, nom: "Consagració a l'Esperit"},
				{numero: 3, nom: "Oració per salvar 1000 ànimes del Purgatori"},
				{numero: 4, nom: "Sant Rosari"},
				{numero: 5, nom: "Jesus et necessito"},
				{numero: 6, nom: "Oració de guariment"},
				{numero: 7, nom: "Novena a St. Josep"},
				
			],
  	}
  },

  methods:{
  }
}
</script>




<style>

</style>
