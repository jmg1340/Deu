<template>
  <div class="q-pa-sm">
		
		<div class="text-h5 text-center text-weight-light q-my-md">Pregàries</div>


		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Oferiment de Vida (sor Natalia Magdolna)"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
				<jmg_oferimentVida></jmg_oferimentVida>
		</q-expansion-item>


		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Consagració a l'Esperit"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
			<jmg_consagracioEsperitSant></jmg_consagracioEsperitSant>
		</q-expansion-item>



		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Oració per salvar 1000 ànimes del Purgatori"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
				<jmg_oracioAnimesPurgatori></jmg_oracioAnimesPurgatori>
		</q-expansion-item>



		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Sant Rosari"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
				<jmg_santRosari></jmg_santRosari>
		</q-expansion-item>


		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Jesus et necessito"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
				<jmg_jesusEtNecessito></jmg_jesusEtNecessito>
		</q-expansion-item>

		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Oració de guariment"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
				<jmg_sanacio></jmg_sanacio>
		</q-expansion-item>

		<q-expansion-item 
			group="somegroup" 
			icon="explore" 
			label="Novena a St. Josep"
			:header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
			class="q-mb-xs"
			dense
			popup
			>
				<jmg_novenaStJosep></jmg_novenaStJosep>
		</q-expansion-item>



  </div>
</template>





<script>
import jmg_oferimentVida from "components/pregaries/OferimentVida";
import jmg_consagracioEsperitSant from "components/pregaries/consagracioEsperitSant";
import jmg_oracioAnimesPurgatori from "components/pregaries/oracioAnimesPurgatori";
import jmg_santRosari from "components/pregaries/santRosari";
import jmg_jesusEtNecessito from "components/pregaries/jesusEtNecessito";
import jmg_sanacio from "components/pregaries/sanacio";
import jmg_novenaStJosep from "components/pregaries/novenaStJosep";

export default {
  // name: 'PageName',
  
  components: {
  	jmg_oferimentVida,
  	jmg_consagracioEsperitSant,
  	jmg_oracioAnimesPurgatori,
  	jmg_santRosari,
  	jmg_jesusEtNecessito,
  	jmg_sanacio,
    jmg_novenaStJosep
  },
  		

  data(){
  	return{
  	}
  },

  methods:{
  }
}
</script>




<style>
	li{
		padding-bottom: 10px;
	}


</style>
