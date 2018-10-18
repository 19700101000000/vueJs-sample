var app = new Vue({
	el: '#app',
	template: `
		<div id="app">
			<input v-for="i in 10" type="checkbox" :value="i + 'つ目'" v-model="checkbox">
			<div>
				<template v-for="v in checkbox">{{ v }}</template>
			</div>
		</div>
	`,
	data: {
		checkbox: [],
	},
})
