<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        class="bg-blue-grey-9"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Déu
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
          
        </q-toolbar-title>
        <div>
          <q-checkbox 
          v-model="fosc"
          color="grey-9"
          @click="toggleFosc"
          label="Tema fosc:"
          left-label
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list dense>
        <q-item-label
          header
          class="text-grey-8"
        >
          Índex
        </q-item-label>


        <q-item 
          to="/missatges"
          :active="opcio === 'missatges'"
          active-class="my-menu-opcio"
          >
          <q-item-section>
            <q-item-label>Déu et vol dir algo</q-item-label>
          </q-item-section>
        </q-item>
        <q-item 
          to="/pregaries"
          :active="opcio === 'pregaries'"
          active-class="my-menu-opcio"
          >
          <q-item-section>
            <q-item-label>Pregàries</q-item-label>
          </q-item-section>
        </q-item>


        <!-- 
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-section label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
         -->
        
        <!-- 
        <q-list-header>Filocalia</q-list-header>
        <q-item to="/filocalia/niceforo">
          <q-item-section label="1. Nicéforo, el solitario" />
        </q-item>
        <q-item to="/filocalia/gregorio">
          <q-item-section label="2. Gregorio, el sinaíta" />
        </q-item>
        <q-item to="/filocalia/simeon">
          <q-item-section label="3. Simeón, el nuevo teólogo" />
        </q-item>
        -->

     </q-list>

    <q-list dense>

      <q-item-label
        header
        class="text-grey-8"
      >
        Apunts
      </q-item-label>

      <q-item 
        to="/angels"
        :active="opcio === 'angels'"
        active-class="my-menu-opcio"
        >
        <q-item-section>
          <q-item-label>Àngels</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>


     
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      opcio: null,
      fosc: false
    }
  },
  methods: {
    openURL,
    toggleFosc() {
      if (this.fosc) {
        this.$q.dark.set(true) 
      } else {
        this.$q.dark.set(false) 
      }
    }
  }
}
</script>

<style scoped>
  .mmy-menu-opcio{
    color: white;
    background-color: #F2C037;
  }
</style>
