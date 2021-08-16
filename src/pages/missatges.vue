<template>
  <q-page class="q-pa-lg">

    <q-list>
      <q-expansion-item 
        group="somegroup" 
        icon="explore" 
        label="Jesús, confio en tu (Sta. Teresa de Jesús)"
        header-class="text-grey-10 bg-teal-1 q-mb-xs"
        dense
        popup
        >
          <jmg_jesusConfioEnTu class="q-pa-md"></jmg_jesusConfioEnTu>
      </q-expansion-item>
      


      <q-expansion-item 
        group="somegroup" 
        icon="perm_identity" 
        label="Tinc set de tu (Mare Teresa de Calcuta)"
        header-class="text-grey-10 bg-teal-1 q-mb-xs"
        dense
        popup
        >
          <jmg_tincSetDeTu class="q-pa-md"></jmg_tincSetDeTu>
      </q-expansion-item>
<!--       
      <q-expansion-item group="somegroup" icon="shopping_cart" label="Third">
        <div>
          Content
        </div>
      </q-expansion-item>
 -->      
    </q-list>   



  </q-page>
</template>

<script>
import jmg_jesusConfioEnTu from "components/missatges/jesusConfioEnTu";
import jmg_tincSetDeTu from "components/missatges/tincSetDeTu";

export default {
  // name: 'PageName',
  
  components: {
    jmg_jesusConfioEnTu,
    jmg_tincSetDeTu,
  },
      
  // name: 'PageName',
}
</script>

<style>
</style>
