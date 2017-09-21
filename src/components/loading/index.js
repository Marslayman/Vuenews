import Loading from './Load.vue'
const loading={
	install:(Vue) =>{   //install 全局组件，在main.js中使用Vue.use()做全局引入
		Vue.component('Loading',Loading);
	}
}
export default loading