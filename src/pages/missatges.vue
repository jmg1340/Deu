<template>
  <q-page class="q-pa-sm">
		
		<div class="text-h5 text-center text-weight-light q-my-md">Déu et vol dir algo</div>

    <q-list>
      <q-expansion-item 
        group="somegroup" 
        icon="explore" 
        label="Jesús, confio en tu (Sta. Teresa de Jesús)"
        :header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
 				class="q-mb-xs"
        dense
        popup
        >
          <jmg_jesusConfioEnTu class="q-pa-md"></jmg_jesusConfioEnTu>
      </q-expansion-item>
      


      <q-expansion-item 
        group="somegroup" 
        icon="perm_identity" 
        label="Tinc set de tu (Mare Teresa de Calcuta)"
        :header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
 				class="q-mb-xs"
        dense
        popup
        >
          <jmg_tincSetDeTu class="q-pa-md"></jmg_tincSetDeTu>
      </q-expansion-item>

      <q-expansion-item 
        group="somegroup" 
        icon="perm_identity" 
        label="15 minuts en companyia de Jesús"
        :header-class="{'text-grey-10 bg-green-2': !$q.dark.isActive, 'text-orange bg-grey-9': $q.dark.isActive}"
 				class="q-mb-xs"
        dense
        popup
        >
          <jmg_jesus15minuts class="q-pa-md"></jmg_jesus15minuts>
      </q-expansion-item>


    </q-list>   



  </q-page>
</template>

<script>
import jmg_jesusConfioEnTu from "components/missatges/jesusConfioEnTu";
import jmg_tincSetDeTu from "components/missatges/tincSetDeTu";
import jmg_jesus15minuts from "components/missatges/Jesus15minuts";

export default {
  // name: 'PageName',
  
  components: {
    jmg_jesusConfioEnTu,
    jmg_tincSetDeTu,
    jmg_jesus15minuts
  },
      
  // name: 'PageName',
}
</script>

<style>
</style>
