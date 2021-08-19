<template>
	<q-card :class="{'text-negative': !$q.dark.isActive, 'text-orange': $q.dark.isActive, styActivat: activat}" class="flex flex-center dimensions shadow-6 bordered " @click="activat = !activat">
		{{ numero }}
	</q-card>
</template>

<script>
export default {

 props: ['numero'],
 
 name: 'santRosari_unitat',

  data() {
    return {
    	activat: false
    };
  },
  methods: {
  	reset: function(){
  		this.activat = false
  	}

  }
};
</script>

<style lang="css" scoped>

	.dimensions {
		color: darkred;
		width: 30px;
		height: 30px;
	}

	.styActivat {
		background-color: rgb(128, 255, 0);
		font-weight: bold;
		color: darkblue !important;
		border: 1px solid rgb(117, 117, 117);
	}



</style>
