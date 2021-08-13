<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        color="primary"
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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Índex
        </q-item-label>


        <q-item to="/missatges">
          <q-item-section>
            <q-item-label>Déu et vol dir algo</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/pregaries">
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

    <q-list>

        <q-item-label
          header
          class="text-grey-8"
        >
          Apunts
        </q-item-label>
      <q-item to="/angels">
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
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
