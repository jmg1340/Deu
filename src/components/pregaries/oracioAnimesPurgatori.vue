<template>
    <div class="q-pa-md">

    	<p>Nostre Senyor va dir a la gran Santa Gertrudis que la següent oració salvaria 1000 ànimes del Purgatori cada vegada que es resés:</p>
    	
    	<code class="text-italic"><p>"Oh Pare Etern, us ofereixo la més preciosa Sang del vostre Diví Fill, Jesús, unit a les misses celebrades avui arreu del món, per totes les Santes Ànimes del Purgatori per tots els pecadors del mòn. Amen".</p>
		<p>Pels pecadors a l'esglesia universal, per aquells que estan a la propia casa i dintre de la meva familia. Amén</p>
    	</code>
    	<hr>
    	<br><br>
    	<p>En el nom del Pare, y del Fill y del Esperit Sant. Amén</p>
    	

			<p>DESENES (dir 10 vegades la següent pregària)</p>
			<div class="row q-gutter-md q-mb-sm" >
				<cmp_unitat v-for="n in 10" :numero="n" :key="n" :ref="'xxx'+ n" />
			</div>

			<div 
				class="text-italic q-pa-md text-weight-light" 
				:class="{'bg-grey-2': !$q.dark.isActive, 'bg-grey-10': $q.dark.isActive}"
				>

				<p>T'ofereixo, el meu adorat Jesús, en ajuda de les Ànimes del Purgatori, els mèrits dels teus patiments i dolors soferts, per la nostra redempció. I començo contemplant la Sang que trasuà del teu cos, per la tristesa i l'angoixa que et va assaltar a Getsemaní.</p>

				<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

				<div class="row q-gutter-md q-mb-sm" >
					<cmp_unitat v-for="n in 10" :numero="n" :key="n" :ref="'yyy'+n" />
				</div>

				<p class="q-mt-lg">Pare Nostre, Ave Maria, Glòria</p>

				<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

				<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
			</div>



<!-- 
    	<q-expansion-item ricon="explore" label="2a DESENA">
			<p>T'ofereixo, el meu adorable Jesús, per les Ànimes del Purgatori, la immensa aflicció que et va oprimir el cor en veure que Judes, deixeble Teu, per Tu estimat i afavorit, es va fer perseguidor, i amb petó sacríleg et va trair per lliurar-te en mans de cruels enemics</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="3a DESENA">
			<p>T'ofereixo, el meu adorat Jesús, en pro les Ànimes del Purgatori, l'admirable paciència amb la qual vas suportar tants ultratges d'aquesta vil soldadesca que et va conduir d'Anàs a Caifàs, de Pilat a Herodes, el qual per major menyspreu, et va imposar la vestidura dels bojos, entre les burles i els greuges del poble, i et va enviar al governador romà ...</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="4a DESENA">
			<p>T'ofereixo, el meu adorable Jesús, per les Ànimes del Purgatori, l'amargor que va pertorbar el teu Esperit, quan pels jueus vas ser posposat per Barrabàs, sediciós i homicida. Després lligat a la columna, Tu, l'Innocent i el Just, vas ser colpejat amb innombrables assots, sense pietat alguna ...</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="5a DESENA">
			<p>T'ofereixo, el meu adorat Jesús per les Ànimes del Purgatori, la humiliació que vas tolerar, quan, per tractar-te com fals rei, van posar sobre les espatlles un mantell de porpra, et van donar per ceptre una canya i havien teixit teu cap amb la corona d'espines, i així Pilat et va presentar al poble dient: "Heus aquí l'Home!"</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="6a DESENA">
			<p>T'ofereixo, el meu adorable Jesús, per les ànimes del Purgatori, la pietosa compassió i el dolor profund que vas sentir quan, amb tanta violència, vas ser separat de la teva estimadíssima mare, que havia vingut a trobar-te i abraçar-te.</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="7a DESENA">
			<p>T'ofereixo, adorat Jesús meu, per les ànimes del Purgatori, els inaudits turments patits quan, estès sobre la creu teu ensangonat cos, vas ser horriblement traspassat per claus a les mans i als peus, i elevat a l'ignominiós patíbul.</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="8a DESENA">
			<p>T'ofereixo, el meu adorat Jesús, per les ànimes del Purgatori, l'ardent set que vas patir en aquest temps de Calvari, set d'aigua, però també d'ànimes que calmin tan cruel agonia i per la qual reps tan sols vinagre i ingratituds.</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="9a DESENA">
			<p>T'ofereixo, el meu adorat Jesús, per les ànimes del Purgatori, les angoixes i les penes que durant tres hores contínues vas suportar suspès de la creu, i les contraccions que vas patir en tots els teus membres, augmentades per la presència de la teva adolorida mare, testimoni de semblant punyent agonia.</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item>

    	<q-expansion-item ricon="explore" label="10a DESENA">
			<p>T'ofereixo, el meu adorat Jesús, per les ànimes del Purgatori, la desolació que va oprimir a la Verge Santíssima assistint a la teva mort, i malgrat el seu tendre cor, acollint-te exànime entre els seus braços quan vas ser baixat de la creu.</p>

			<p>Concedeix Senyor el descans etern. I brilli per a elles la llum perpètua. (10 vegades)</p>

			<jmg_rosari></jmg_rosari>

			<p>Pare Nostre, Ave Maria, Glòria</p>

			<p>Ànimes santes, ànimes del purgatori, pregueu a Déu per mi i jo pregaré el Pare per a que us doni la glòria del paradís .. Amén</p>

			<p>Pare Etern us oferim la Sang, Passió i Mort de Nostre Senyor Jesucrist, els dolors de la Santíssima Verge i els de Sant Josep per la remissió dels nostres pecats, la llibertat de les Ànimes del Purgatori i la conversió dels pecadors. Amén</p>
		</q-expansion-item> -->


		<h6>Imploració DE LA DIVINA MISERICÒRDIA</h6>
		<p>Des de l'abisme Tu crit, Senyor; Senyor, escolta la meva veu;<br>
			Estigueu atent, escolteu a la veu de la meva súplica.<br>
			Si tinguéssiu en compte les culpes, Qui es podria sostenir?<br>
			Però de Tu procedeix el perdó, i això ens infon respecte.<br>
			El meu l'esperança en el Senyor, espera en la seva Paraula;<br>
			La meva ànima espera el Senyor, més que els sentinelles el matí.<br>
			Esperi Israel al Senyor, com els sentinelles el matí;<br>
			Perquè són del Senyor l'Misericòrdia, la redempció generosa<br>
I 				ell qui redimeix Israel de totes les seves culpes.</p>

		<p>Senyor Jesús: Pels mèrits de la teva Santíssima Passió i Mort, compadeix dels nostres germans difunts. Amén.</p>

		<h6>PREGÀRIA PER LES ÀNIMES DEL PURGATORI:</h6>
		<p>Déu omnipotent, Pare de bondat i de misericòrdia, Apiadau de les beneïdes ànimes del Purgatori i ajudeu als meus estimats pares i avantpassats.</p>

		<p>A cada invocació es contesta: <b>Jesús meu, misericòrdia!</b></p>

		<ul>
			<li>Ajudeu als meus germans i parents.</li>
			<li>Ajudeu a tots els meus benefactors espirituals i temporals.</li>
			<li>Ajudeu els que han estat els meus amics i súbdits.</li>
			<li>Ajudeu a quants he amor i oració.</li>
			<li>Ajudeu a quants he perjudicat i malmès.</li>
			<li>Ajudeu els que han faltat contra mi.</li>
			<li>Ajudeu a aquells a qui professeu predilecció.</li>
			<li>Ajudeu els que estan més propers a la unió amb Vós.</li>
			<li>Ajudeu els que us volen més ardentment.</li>
			<li>Ajudeu els que pateixen més.</li>
			<li>Ajudeu els que estan més lluny del seu alliberament.</li>
			<li>Ajudeu els que menys auxili reben.</li>
			<li>Ajudeu els que més mèrits tenen per l'Església.</li>
			<li>Ajudeu els que van ser rics aquí, i allà són els més pobres.</li>
			<li>Ajudeu els poderosos, que ara són com vils serfs.</li>
			<li>Ajudeu els cecs que ara reconeixen la seva ceguesa.</li>
			<li>Ajudeu els vanitosos que van malgastar el seu temps.</li>
			<li>Ajudeu els pobres que no van buscar les riqueses divines.</li>
			<li>Ajudeu els tebis que molt poca oració han fet.</li>
			<li>Ajudeu els mandrosos que han descuidat tantes obres bones.</li>
			<li>Ajudeu els de poca fe que van descuidar els sants Sagraments.</li>
			<li>Ajudeu els reincidents que només per un miracle de la gràcia s'han salvat.</li>
			<li>Ajudeu els pares que no van vigilar bé els seus fills.</li>
			<li>Ajudeu els superiors poc atents a la salvació dels seus súbdits.</li>
			<li>Ajudeu els pobres homes, que gairebé només es van preocupar dels diners i del plaer.</li>
			<li>Ajudeu els d'esperit mundà que no van aprofitar les seves riqueses o talents pel cel.</li>
			<li>Ajudeu els necis, que van veure morir a tants no recordant-se de la seva pròpia mort.</li>
			<li>Ajudeu els que no van disposar a temps de casa, estant completament desprevinguts per al viatge més important.</li>
			<li>Ajudeu els que jutjareu tant més severament, com més els va ser confiat.</li>
			<li>Ajudeu els pontífexs, reis i prínceps.</li>
			<li>Ajudeu els bisbes i els seus consellers.</li>
			<li>Ajudeu als meus mestres i pastors d'ànimes.</li>
			<li>Ajudeu els finats sacerdots d'aquesta diòcesi.</li>
			<li>Ajudeu els sacerdots i religiosos de l'Església catòlica.</li>
			<li>Ajudeu els defensors de la santa fe.</li>
			<li>Ajudeu els caiguts en els camps de batalla.</li>
			<li>Ajudeu els sepultats en els mars.</li>
			<li>Ajudeu els morts sobtadament.</li>
			<li>Ajudeu els morts sense rebre els sants sagraments.</li>			
		</ul>

    </div>
</template>

<script>
import jmg_rosari from "components/jmg-rosari";
import cmp_unitat from "./santRosari_unitat";

export default {
  // name: 'ComponentName',

  components: {
  	jmg_rosari,
		cmp_unitat
  },

  data () {
    return {}
  }
}
</script>

<style>
</style>
