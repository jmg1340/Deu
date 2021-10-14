<template>
    <div class="q-pa-md">

		<!-- <div class="q-ml-xl"> -->
        	<p>Per la senyal de la santa creu ...</p>
        	

			<ul>
				<li>V.  Obriu-me els llavis, Senyor.</li>
				<li>R.  I proclamaré la vostra lloança.</li>
			</ul>
		<!-- </div> -->
    	<q-card>
				<q-card-section class="q-mb-md"> ACTE DE CONTRICIÓ <br>
				Déu meu, em penedeixo de tot cor de tots els meus pecats i els avorreixo, perquè al pecar, no només mereixo les penes establertes per tu justament, sinó principalment perquè et vaig ofendre, a tu summe Bé i digne d'amor per sobre de totes les coses. <br>
				Per això proposo fermament, amb ajuda de la teva gràcia, no pecar més en endavant i fugir de tota ocasió de pecat.
				Amén.	
				</q-card-section>
    	</q-card>

    	<p class="q-mt-md">Glòria...</p>
    	
		<q-card class="q-mb-md">
			<q-card-section>OFERIMENT:<br> Senyor Déu nostre, dirigiu i encamineu tots els nostres pensaments, paraules i obres a major honra i glòria vostra. I vós, Verge Santíssima, obtingueu-nos del vostre Fill que amb tota atenció i devoció puguem dir el vostre Santíssim Rosari, el qual us oferim per l'exaltació de la santa Fe catòlica, per les nostres necessitats espirituals i temporals, i pel bé i sufragi dels vius i difunts que siguin més del vostre grat i de la nostra principal obligació.
			</q-card-section>	
		</q-card>
		
		<q-expansion-item 
			v-for="(dada, index) in dades" :key="'d'+index"
			group="somegroup3" 
			:label="dada.dies" 
			:header-class="{'text-indigo bg-brown-1 q-mb-xs': !$q.dark.isActive, 'text-orange-2 bg-grey-10 q-mb-xs': $q.dark.isActive}"
			>
		
			<cmp_misteris :misteris="dada.misteris" />
		</q-expansion-item>




		<q-expansion-item 
			group="somegroup" 
			label="LETANIES"
			:header-class="{'text-indigo bg-brown-1 q-mb-xs': !$q.dark.isActive, 'text-orange-2 bg-grey-10 q-mb-xs': $q.dark.isActive}"
			>
			<ul>
				<li>V. Senyor, tingueu pietat.   <br>  R.  Senyor tingueu pietat.</li>
				<li>V. Crist, tingueu pietat.    <br>  R. Crist, tingueu pietat.</li>
				<li>V. Senyor, tingueu pietat.   <br>  R. Senyor, tingueu pietat.</li>
				<li>V. Crist, oïu-nos.   <br>  R. Crist, oïu-nos.</li>
				<li>V. Crist, escolteu-nos.   <br>  R. Crist, escolteu-nos.</li>
				<li>V. Déu, Pare celestial   <br>  R. Tingueu pietat de nosaltres.</li>
				<li>V. Déu, Fill redemptor del món   <br>  R. Tingueu pietat de nosaltres.</li>
				<li>V. Déu, Esperit Sant   <br>  R. Tingueu pietat de nosaltres.</li>
				<li>V. Trinitat Santa, un sol Déu   <br>  R. Tingueu pietat de nosaltres. </li>
			</ul>

			<ul>
				<li>Santa Maria  <br> R. Pregueu per nosaltres</li>
				<li>Santa Mare de Déu</li>
				<li>Santa Verge de les Verges</li>
				<li>Mare del Crist</li>
				<li>Mare de l’Església</li>
				<li>Mare de la divina gràcia</li>
				<li>Mare puríssima</li>
				<li>Mare castíssima</li>
				<li>Mare virginal</li>
				<li>Mare sense corrupció</li>
				<li>Mare immaculada</li>
				<li>Mare amable</li>
				<li>Mare admirable</li>
				<li>Mare del bon consell</li>
				<li>Mare del Creador</li>
				<li>Mare del Salvador</li>
				<li>Verge prudentíssima</li>
				<li>Verge venerable</li>
				<li>Verge predicable</li>
				<li>Verge potent</li>
				<li>Verge clement</li>
				<li>Verge fidel</li>
				<li>Mirall de justícia</li>
				<li>Seu de la saviesa</li>
				<li>Causa de la nostra alegria</li>
				<li>Vas espiritual</li>
				<li>Vas honorable</li>
				<li>Vas insigne de devoció</li>
				<li>Rosa mística</li>
				<li>Torre de David</li>
				<li>Torre de marfil</li>
				<li>Casa daurada</li>
				<li>Arca de l’aliança</li>
				<li>Porta del cel</li>
				<li>Estel del matí</li>
				<li>Salut dels malalts</li>
				<li>Refugi dels pecadors</li>
				<li>Consoladora dels afligits</li>
				<li>Auxili dels cristians</li>
				<li>Reina dels àngels</li>
				<li>Reina dels patriarques</li>
				<li>Reina dels profetes</li>
				<li>Reina dels apòstols</li>
				<li>Reina dels màrtirs</li>
				<li>Reina dels confessors</li>
				<li>Reina de les verges</li>
				<li>Reina de tots els sants</li>
				<li>Reina concebuda sens pecat original</li>
				<li>Reina al cel assumpta</li>
				<li>Reina del sacratíssim Rosari</li>
				<li>Reina de les famílies</li>
				<li>Reina de la pau</li>
			</ul>


			<ul>
				<li>Anyell de Déu que lleveu el pecat del món.  <br> R. Perdoneu-nos, Senyor.</li>
				<li>Anyell de Déu que lleveu el pecat del món. <br> R. Escolteu-nos, Senyor.</li>
				<li>Anyell de Déu que lleveu el pecat del món. <br>R. Tingueu pietat de nosaltres.</li>
			</ul>

		</q-expansion-item>

			<p>Déu et saluda, Reina i mare de misericòrdia, vida dolçura i esperança nostra. Déu et saluda.<br/>
				A tu ens dirigim els desterrats fills d'Eva. A tú suspirem gemint i plorant en aquesta vall de llàgrimes.<br/>
				Sigues doncs advocada nostra i gira cap a nosaltres els teus ulls misericordiosos, i després d'aquest desterrament mostra'ns a Jesús, fruït beneït del teu ventre.<br/>
				Oh clementíssima, oh pietosa, oh dolça sempre Verge Maria.<br />
				Prega per nosaltres, santa Mare de Déu Per a que siguem dignes de les promeses de nostre Senyor Jesucrist.
			</p>


    </div>


</template>

<script>
import cmp_misteris from "./santRosari_misteris";
export default {
  // name: 'ComponentName',
  components: {
  	cmp_misteris,
  },
  data () {
    return {
    	dades:
    	[ 
    		{
	    		dies: "Dilluns i dissabte: Miseteris de GOIG",
	    		misteris: [
	    			"1. L'encarnació del Fill de Déu",
	    			"2. Maria visita la seva cosina Elisabet",
	    			"3. El naixament de Jesús a Betlem",
	    			"4. La presentació de Jesús al temple",
	    			"5. Jesús perdut i trobat al temple"]
    		},
    		{
	    		dies: "Dimarts i divendres: Misteris de DOLOR",
	    		misteris: [
	    			"1. L'oració de Jesús a l'hort de Getsemaní",
	    			"2. Els assots a Jesús lligat a la columna",
	    			"3. La coronació d'espines",
	    			"4. Jesús, amb la creu al coll, camí del Calvari",
	    			"5. La curcifixió i mort del Senyor"]
    		},
    		{
	    		dies: "Dimecres i diumenge: miseteris de GLÒRIA",
	    		misteris: [
	    			"1. La ressurrecció del Fill de Déu",
	    			"2. L'ascensió de Jesús al Cel",
	    			"3. La vinguda de l'Esperit Sant",
	    			"4. L'assumpció de Maria al Cel",
	    			"5. La coronació de Maria com a reina i senyora de cels i terra"]
    		},
    		{
	    		dies: "Dijous: misteris de LLUM",
	    		misteris: [
	    			"1. El baptisme de Jesús al riu Jordà",
	    			"2. Jesús en les noces de Canà",
	    			"3. Anunci del Regne i invitació a la conversió",
	    			"4. La transfiguració del Senyor",
	    			"5. La institució de l’Eucaristia"]
    		}
    	]
    }
  }
}
</script>

<style>
</style>