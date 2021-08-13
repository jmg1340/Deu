<template>
  <q-page padding>

      <q-expansion-item group="somegroup" icon="explore" label="Oferiment de Vida (sor Natalia Magdolna)">
      	<jmg_oferimentVida></jmg_oferimentVida>
      </q-expansion-item>


      <q-expansion-item group="somegroup" icon="explore" label="Consagració a l'Esperit Sant">
		<jmg_consagracioEsperitSant></jmg_consagracioEsperitSant>
      </q-expansion-item>



      <q-expansion-item group="somegroup" icon="explore" label="Oració per salvar 1000 ànimes del Purgatori">
      	<jmg_oracioAnimesPurgatori></jmg_oracioAnimesPurgatori>
      </q-expansion-item>



      <q-expansion-item group="somegroup" icon="explore" label="Sant Rosari">
      	<jmg_santRosari></jmg_santRosari>
      </q-expansion-item>


      <q-expansion-item group="somegroup" icon="explore" label="Jesus et necessito">
      	<jmg_jesusEtNecessito></jmg_jesusEtNecessito>
      </q-expansion-item>

      <q-expansion-item group="somegroup" icon="explore" label="Oració de guariment">
      	<jmg_sanacio></jmg_sanacio>
      </q-expansion-item>



  </q-page>
</template>





<script>
import jmg_oferimentVida from "components/pregaries/OferimentVida";
import jmg_consagracioEsperitSant from "components/pregaries/consagracioEsperitSant";
import jmg_oracioAnimesPurgatori from "components/pregaries/oracioAnimesPurgatori";
import jmg_santRosari from "components/pregaries/santRosari";
import jmg_jesusEtNecessito from "components/pregaries/jesusEtNecessito";
import jmg_sanacio from "components/pregaries/sanacio";

export default {
  // name: 'PageName',
  
  components: {
  	jmg_oferimentVida,
  	jmg_consagracioEsperitSant,
  	jmg_oracioAnimesPurgatori,
  	jmg_santRosari,
  	jmg_jesusEtNecessito,
  	jmg_sanacio
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
