<template>
  <div class="q-pa-sm">
		

			<jmg_oferimentVida v-if="numero == '1'"/>
			<jmg_consagracioEsperitSant v-if="numero == '2'"/>
			<jmg_oracioAnimesPurgatori v-if="numero == '3'"/>
			<jmg_santRosari v-if="numero == '4'"/>
			<jmg_jesusEtNecessito v-if="numero == '5'"/>
			<jmg_sanacio v-if="numero == '6'"/>
			<jmg_novenaStJosep v-if="numero == '7'"/>


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

	props: ["numero"],
  
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
