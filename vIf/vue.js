var app = new Vue({
	el: '#app',
	template: `
		<div id="app">
			<h1 v-if="flag">Hello world</h1>
			<h1 v-else>Fuck you</h1>
		</div>
	`,
	data: {
		flag: true,
	},
})
