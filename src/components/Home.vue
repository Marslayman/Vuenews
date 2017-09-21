<template>
	<div class="content mt">
		<Slider></Slider>
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList">
	                <router-link :to="'/article/'+item.id"> <!-- 使用字符串连接的时候，to 要加：变成绑定属性 -->
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				var _this=this;
				this.$http.get('src/data/index.data').then((res)=>{
					_this.arrList=res.data;
				}).catch((err) => {
					console.log(err);
				})
			}
		}
	}
</script>
<style scoped>
.mt{
	margin-top: 30px;
}	
</style>