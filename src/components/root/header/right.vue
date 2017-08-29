<template>
	<ul class="nav navbar-nav navbar-right">
	<router-link :to="{name: 'auth'}" tag="li" v-if="!isLogged">
				<a>Login</a>
			</router-link>
		<li class="dropdown" :class="{ open: isOpenUser }" v-if="isLogged">
			<a href="javascript:;" 
				class="dropdown=toggle" @click="toggleUserMenu()">{{ currentUser.name }} <span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="javascript:;">Action</a></li>
				<li><a href="javascript:;">Another Action</a></li>
				<li><a href="javascript:;">Something else here</a></li>
				<li role="separator" class="divider"></li>
				<li><a href="javascript:;">Separated link</a></li>
			</ul>
		</li>
	</ul>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				isOpenUser: false
			}
		},
		computed: {
			...mapGetters(['isLogged', 'currentUser'])
		},
		methods: {
			toggleUserMenu () {
				this.isOpenUser = !this.isOpenUser
			}
		}
	}
</script>
