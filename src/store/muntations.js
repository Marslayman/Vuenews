import * as types from './types.js'

const state = {
	show : false,
	headershow: true,
	footershow: true
}

const mutations = {
	[types.LoadHide]:(state)=>{
		state.show = false;
	},
	[types.LoadShow]:(state) => {
		state.show = true;
	},
	[types.HeaderShow](state){
		state.headershow = true;
	},
	[types.HeaderHide](state){
		state.headershow = false;
	},
	[types.FooterShow](state){
		state.footershow = true;
	},
	[types.FooterHide](state){
		state.footershow = false;
	}
}


const getters = {
	loadingshow : (state) => {
		return state.show;
	},
	headershow(state){
		return state.headershow;
	},
	footershow(state){
		return state.footershow;
	}
}

export default {
	state,
	mutations,
	getters
}