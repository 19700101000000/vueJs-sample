var app = new Vue({
	el: '#app',
	template: `
		<div id="app">
			<input v-for="i in num" type="checkbox" :value="i + 'つ目'" v-model="checkbox">
			<div>
				<template v-for="v in checkbox">{{ v }}</template>
			</div>
		</div>
	`,
	data: {
		num: 10,
		checkbox: [],
	},
})
