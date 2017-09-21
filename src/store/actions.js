import * as types from './types.js'
const actions = {
	showLoading: ({commit}) => {
		commit(types.LoadShow);
	},
	hideLoading: ({commit}) => {
		commit(types.LoadHide);
	},
	headerShow({commit}){
		commit(types.HeaderShow);
	},
	headerHide({commit}){
		commit(types.HeaderHide);
	},
	footerShow({commit}){
		commit(types.FooterShow);
	},
	footerHide({commit}){
		commit(types.FooterHide);
	}
}

export default actions