<template>
    <div class="q-pa-md">

    	<p>Per la senyal, de la Santa Creu...</p>

    	<p>Oh gloriosíssim Pare de Jesús, Espós de Maria. Patriarca i Protector de la Santa
      Església, a qui el Pare Etern va confiar la cura de governar, regir i defensar en la
      terra la Sagrada Família; protegeix-nos també a nosaltres, que pertanyem, com a fidels
      catòlics, a la santa família de vostre Fill que és l'Església, i dona'ns els béns
      necessaris d'aquesta vida, i sobretot els auxilis espirituals per a la vida eterna.
      Dona'ns especialment aquestes tres gràcies, la de no cometre mai cap pecat
      mortal, principalment contra la castedat; la d'un sincer amor i devoció a Jesús i
      Maria, i la d'una bona mort, rebent bé els últims sagraments. Doneu-nos
      a més la gràcia especial que et demanem cada un en aquesta novena.</p>

     	<p>Demani's amb fervor i confiança la gràcia que es desitja obtenir.</p>


      <q-expansion-item 
        v-for="(dada, index) in dades" :key="'d'+index"
        group="somegroup3" 
        :label="'Pregària del dia ' + dada.dia" 
        :header-class="{'text-indigo bg-brown-1 q-mb-xs': !$q.dark.isActive, 'text-orange-2 bg-grey-10 q-mb-xs': $q.dark.isActive}"
				>
        <div class="q-pa-md ">
          {{ dada.text }}
        </div>
        
      </q-expansion-item>




    	<p>Oh custodi i pare de Verges Sant Josep que a la fidel custòdia van ser encomanades la
      mateixa innocència de Crist Jesús i la Verge de les verges, Maria; per aquestes dues
      estimadíssimes penyores, Jesús i Maria, et prego i suplico em concedeixis, que preservat jo de tota impuresa, servir sempre castísimament amb ànima neta, cor pur i cos cast a Jesús i a Maria. Amén.</p>

      <br>

      <p>Jesús, Josep i Maria <br>
      us dono el meu cor i l'ànima meva.</p>
      <p>Jesús, Josep i Maria <br>
      assisteix-me en la meva última agonia.</p>
      <p>Jesús, Josep i Maria <br>
      amb Vós descansi en pau l'ànima meva.</p>

      <br>

      <p>Tenia el mateix Jesús, a l'començar la seva vida pública, prop de trenta anys, fill, segons es
      pensava, de Josep.</p>

      <p>Sant Josep, pregueu per nosaltres.
      Perquè siguem dignes de les promeses de Jesucrist.</p>

      <p>Oh Déu que amb inefable providència et vas dignar a escollir a l'benaurat Josep per
      Espòs de la teva Mare Santíssima; concedeix-nos que, doncs li venerem com a protector en
      la terra, mereixem tenir-lo com a protector en el cel. Oh Déu que vius i regnes
      pels segles dels segles. Amén.</p>

    </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      dades: [
        { dia: 1, text: "Oh benigníssim Jesús així com vas consolar el pare estimat en les perplexitats i incerteses que va tenir, dubtant si abandonar a la teva Santíssima Mare la seva dona, així et supliquem humilment per intercessió de Sant Josep ens concediu molta prudència i encert en tots els casos dubtosos i angoixes de la nostra vida, perquè sempre encertem amb el teu santíssima  voluntat."},
        { dia: 2, text: "Oh benigníssim Jesús, així com vas consolar el pare estimat en la pobresa i desempar de Betlem, amb el teu naixement, i amb els càntics dels Àngels i visites dels pastors,així també et supliquem humilment per intercessió de Sant Josep, que ens concedeixis portar amb paciència la nostra pobresa i desempar en aquesta vida, i que alegres el nostre esperit amb la teva presència i la teva gràcia, i l'esperança de la glòria."},
        { dia: 3, text: "Oh benigníssim Jesús, així com vas consolar al teu estimat pare en el dolorós misteri de la Circumcisió, rebent d'ell el dolç nom de Jesús, així et supliquem humilment, per intercessió de Sant Josep, ens concediu pronunciar sempre amb amor i respecte el teu santíssim nom, portar-lo en el cor, honrar a la vida, i professar amb obres i paraules que tu vas ser el nostre Salvador i Jesús."},
        { dia: 4, text: "Oh benigníssim Jesús, així com vas consolar al teu pare estimat de la pena que li va causar la profecia de Simeó, mostrant-li el innombrable coral dels Sants, així et supliquem humilment, per intercessió de Sant Josep que ens concedeixis la gràcia de ser d'aquells per als que el tu serveixes, no de ruïna, sinó de resurrecció, i que corresponguem fidelment a la teva gràcia per a que anem a la teva glòria."},
        { dia: 5, text: "Oh benigníssim Jesús, així com el teu estimat pare et va conduir de Betlem a Egipte per lliurar-te del tirà Herodes, així et supliquem humilment, per intercessió de Sant Josep, que ens lliuris dels qui volen fer mal a les nostres ànimes o els nostres cossos, ens donis fortalesa i salvació en les nostres persecucions, i enmig de l'exili d'aquesta vida ens protegeixis fins que volem cap a la pàtria."},
        { dia: 6, text: "Oh benigníssim Jesús així com el teu pare estimat et va sustentar a Natzaret, i en canvi tu li vas premiar amb la teva santíssima companyia tants anys, amb la teva doctrina i la teva dolça conversa, així et preguem humilment, per intercessió de Sant Josep ens concedeixis el suport espiritual de la vostra gràcia, i de la teva santa comunió, i que visquem santa i modestament, com tu a Natzaret."},
        { dia: 7, text: "Oh benigníssim Jesús, així com per seguir la voluntat del teu pare celestial vas permetre que el teu estimat pare a la terra patís el vehementísim mal de perdre't per tres dies, així et supliquem humilment, per intercessió de Sant Josep, que abans vulguem perdre totes les coses i disgustar qualsevol amic, de deixar de fer la teva voluntat; que mai et perdem a tu pel pecat mortal, o que si per desgràcia et perdéssim et trobem mitjançant una bona confessió."},
        { dia: 8, text: "Oh benignísisim Jesús, que en l'hora de la seva mort vas consolar al teu gloriós pare, assistint juntament amb la teva Mare la seva dona a la seva última agonia, et supliquem humilment, per intercessió de Sant Josep, que ens concedeixis una mort semblant a la seva assistit de la vostra bondat, de la teva Santíssima Mare i de el mateix gloriós Patriarca protector dels moribunds, pronunciant al morir vostres santíssims noms, Jesús, Maria i Josep."},
        { dia: 9, text: "Oh benigníssim Jesús, així com has triat per mitjà del teu Vicari a la terra al teu estimat pare per protector de la teva Santa Església Catòlica, així et supliquem humilment per intercessió de Sant Josep, ens concediu el que siguem veritables i sincers catòlics, que professem sense error la fe catòlica, que visquem sense por una vida digna de la fe que professem, i que mai puguin els enemics ni aterrar-nos amb persecucions, ni amb enganys seduir-nos i apartar-nos de la única i veritable religió que és la Catòlica."},
      ]
    }
  }
}
</script>

<style>
</style>
