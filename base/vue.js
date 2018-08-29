let app = new Vue({
	el: '.vue',
	data: {
		mensaje: 'Learn Vuejs Easy way'
	},
	methods: {
		mostrarMensaje: function(){
			return this.mensaje
		}
	}
})