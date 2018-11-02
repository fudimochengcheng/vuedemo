<template>
	<div class="pos">
		<div>
			<el-row>
				<el-col :span='8' id='list'>
					<el-tabs>
						<el-tab-pane label='点餐'>
							<el-table :data='tableData' border show-summary style='width: 100%;'>
								<el-table-column label='商品' prop='name'></el-table-column>
								<el-table-column label='数量' prop='count'></el-table-column>
								<el-table-column label='金额' prop='pri'></el-table-column>
								<el-table-column label='操作'>
									<!--<template scope='scope'>-->
										<el-button type='text' size='small'>删除</el-button>
                                        <el-button type='text' size='small'>增加</el-button>
									<!--</template>-->
								</el-table-column>
							</el-table>
						</el-tab-pane>
						<el-tab-pane label='外卖'>
							外卖
						</el-tab-pane>
					</el-tabs>	
					
				</el-col>
				<el-col :span='16'>
					<div class="pro">
						<div class="title">常用商品</div>
						<div class="pro-list">
							<ul>
								<li v-for='(v,i) in pros' @click="foo(v)">
									<span>{{v.name}}</span>
									<span class="pro-pri">￥{{v.pri}}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="pro-type">
						<el-tabs>
							<el-tab-pane label='肥宅区'>
								<ul class="ckList">
									<li v-for='(v,i) in goodType1' @click="foo(v)">
										<div class="foodImg"><img :src="v.img"/></div>
										<div class="foodName">{{v.name}}</div>
										<div class="foodPri">￥{{v.pri}}</div>
									</li>
								</ul>
							</el-tab-pane>
							<el-tab-pane label='哲学区'>
								<ul class="ckList">
									<li v-for='(v,i) in goodType2' @click="foo(v)">
										<div class="foodImg"><img :src="v.img"/></div>
										<div class="foodName">{{v.name}}</div>
										<div class="foodPri">￥{{v.pri}}</div>
									</li>
								</ul>
							</el-tab-pane>
							<el-tab-pane label='自由区'>
								<ul class="ckList">
									<li v-for='(v,i) in goodType3' @click="foo(v)">
										<div class="foodImg"><img :src="v.img"/></div>
										<div class="foodName">{{v.name}}</div>
										<div class="foodPri">￥{{v.pri}}</div>
									</li>
								</ul>
							</el-tab-pane>
						</el-tabs>
					</div>				
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'
	const axios = Axios
	export default {
		name:'pos',
		data(){
			return{
				tableData:this.tableData,
				pros:"",
				goodType1:"",
				goodType2:"",
				goodType3:"",
			}
		},
		mounted(){
			let h = document.body.clientHeight;
        	let list = document.querySelector('#list');
        	list.style.height = h + 'px';
        	
		},
		methods:{
			foo(v){
				v.count=1
				for(let l=0;l<this.tableData.length;l++){
					//console.log(this.tableData)
					if(this.tableData.name==v.name){
						console.log(11)
					}
				}
				this.tableData.push(v)
				
			}
		},
		created(){
  			axios.get('http://localhost:8080/static/data.json')
		    .then(res => {
		        this.tableData = res.data.tableData;
		        this.pros = res.data.pros;
		        this.goodType1 = res.data.goodType1;
		        this.goodType2 = res.data.goodType2;
		        this.goodType3 = res.data.goodType3;
		    })
		    .catch(err => {
		        console.log('网络出错，无法访问')
		    })
  		}
	}
</script>

<style>
	ul{list-style: none;}
	.title{
		background-color: pink;
	}
	.pro-list>ul{
		display: flex;
		justify-content: center;
	}
	.pro-list>ul>li{
		margin: 0 20px;
		padding: 10px;
		border: 1px solid red;
		cursor: pointer;
	}
	.ckList{
		width: 100%;
		display: flex;
		flex-flow: wrap;
	}
	.ckList li{
		width: 20%;
		padding: 2px;
		margin: 2px;
		border: 1px solid #ccc;
		cursor: pointer;
	}
	.ckList .foodImg {
		width: 100%;
	}
	.ckList .foodImg img{
		width: 100%;
	}
</style>