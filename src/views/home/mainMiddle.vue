<template>
  <div class="mainMiddle">
    <mapCom />
  </div>
</template>

<script>
import mapCom from "../../components/map1/index.vue"; // 地图
// import {getData} from '@/api'


export default {
  name: "mainMiddle",
  components: {
    mapCom, // 地图
  },
  data(){
    return{
      chinaTotal:{}
    }
  },
  mounted(){
    this.getDatas()
  },
  methods:{
     getDatas(){
      // getData().then(res=>{
      //   console.log(res.data.data.diseaseh5Shelf);
      //   this.chinaTotal = res.data.data.diseaseh5Shelf.chinaTotal
      // })
    }
  }
};
</script>

<style lang="less" scoped>
@width: 100/1920vw;
@height: 100/1080vh;
.mainMiddle {
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .middle-data {
    margin: 20 * @height 15 * @width  0;
  }
  .plan-tab {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16 * @height;
    img {
      width: 542 * @width;
    }
  }
  .mapCom {
    width: 644 * @width;
    height: 620 * @height;
  }
  .middle-tab {
    margin-top: 40 * @height;
  }
}
</style>