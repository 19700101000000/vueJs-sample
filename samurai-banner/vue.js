var samurai_banner = new Vue({
	el: '#samurai-banner',
	template: `
		<div>
			<p>{{ text.tag }}</p>
			<p>{{ addDate(today(), 'D', 7) + text.main }}</p>
		</div>
	`,
	data: {
		week: [
			'日',
			'月', 
			'火', 
			'水', 
			'木', 
			'金', 
			'土',
		],
		text: {
			tag: 'samurai banner',
			main: 'までに(ry',
		},
	},
	methods: {
		addDate: function(d, t, n) {
			switch(t) {
				case 'Y':
					d.setFullYear(d.getFullYear() + n)
					break
				case 'M':
					d.setMonth(d.getMonth() + n)
					break
				case 'D':
					d.setDate(d.getDate() + n)
					break
			}
			return (d.getMonth() + 1) + '/' + d.getDate() + '(' + this.week[d.getDay()] + ')'
			
		},
		today: function() {
			return new Date()
		}
	},
})
