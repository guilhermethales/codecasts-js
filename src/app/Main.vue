<template>
  <div id="app">
		<PageLoader></PageLoader>
    <RootHeader></RootHeader>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>


<script>
import RootHeader from 'components/root/header/main'
export default {
	name: 'App',
  components: { RootHeader },
	computed: {
		show () {
			return this.$store.state.CODECASTS_LOADER.show
		}
	}
}
</script>

<style src="../assets/sass/app.scss" lang="sass"></style>