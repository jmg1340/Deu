<template>
  <div class="q-pa-lg">
		
		<div class="text-h5 text-center text-weight-light q-my-md">Pregàries</div>

		<q-list  
			separator 
			dense		
			>
      <q-item 
				v-for="(pregaria, index) in aPregaries" :key="index"
				:to="'/pregaria/' + pregaria.numero"
				clickable
				:class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
				class="q-mb-xs"
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
