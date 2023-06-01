<template>
  <div class="largeHome">
    <div class="largeHome_main">
      <div class="main-middle">
        <mainMiddle class="mainMiddle" />
      </div>
      <div class="main-right">
        <mainRight></mainRight>
      </div>
    </div>
  </div>
</template>

<script>
import mainMiddle from "./mainMiddle.vue"; // 中部
import mainRight from "@/components/right/index.vue"; // 中部
export default {
  name: "largeHome",
  components: {
    mainMiddle, // 中部
    mainRight, // 右部
  },
};
</script>

<style lang="less" scoped>
@width: 100/1920vw;
@height: 100/1080vh;
.largeHome {
  width: 1920 * @width;
  height: 1080 * @height;
  overflow: hidden;
  // background: url(../../assets/img/znj/bg.png) no-repeat;
  // background-size: 100% 100%;
  .largeHome_main {
    height: 100vh;
    display: flex;
    // justify-content: center;
    align-items: center;
    .main-middle {
      width: 70vw;
      // width: 880 * @width;

  background: url(../../assets/img/znj/bg.png) no-repeat;
  background-size: 100% 100%;
    }
    .main-right {
      width: 30vw;
    }
  }
}
</style>