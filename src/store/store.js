import Vue from 'vue'
import Vuex from 'vuex'

import Actions from './actions.js'
import Mutations from './muntations.js'

Vue.use(Vuex);

export default new Vuex.Store({
	actions:Actions,
	modules:{
		mutations : Mutations
	}
})