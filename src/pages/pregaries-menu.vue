<template>
  <div class="q-pa-lg">
		
		<div class="text-h5 text-center text-weight-light q-my-md">Pregàries</div>

		<div class="column q-gutter-y-xl">

			<q-list  
				separator 
				dense		
				>
				<q-item 
					v-for="(pregaria, index) in aPregaries1" :key="'P1-' + index"
					:to="'/pregaria/' + pregaria.numero"
					clickable
					:class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
					class="q-mb-xs"
					v-ripple>
						<q-item-section>{{pregaria.nom}}</q-item-section>
				</q-item>
			</q-list>
			<q-list  
				separator 
				dense		
				>
				<q-item 
					v-for="(pregaria, index) in aPregaries2" :key="'P2-' + index"
					:to="'/pregaria/' + pregaria.numero"
					clickable
					:class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
					class="q-mb-xs"
					v-ripple>
						<q-item-section>{{pregaria.nom}}</q-item-section>
				</q-item>
			</q-list>


		</div>
		
		
		



  </div>
</template>





<script>
export default {
  // name: 'PageName',
  
  		

  data(){
  	return{
			aPregaries1: [
				{numero: 4, nom: "El Rosari"},
				{numero: 7, nom: "Novena a St. Josep"},
			],
			aPregaries2: [
				{numero: 1, nom: "Oferiment de Vida (sor Natalia Magdolna)"},
				{numero: 2, nom: "Consagració a l'Esperit"},
				{numero: 3, nom: "Oració per salvar 1000 ànimes del Purgatori"},
				{numero: 5, nom: "Jesus et necessito"},
				{numero: 6, nom: "Oració de guariment"},
			],
  	}
  },

  methods:{
  }
}
</script>




<style>

</style>
