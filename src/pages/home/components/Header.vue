<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.currentCity }}
        <span class="iconfont arrow-icon">&#xe625;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState({
      currentCity: "city",
    }),
  },
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
  height: 0.86rem;
  line-height: 0.86rem;
  display: flex;
  color: #fff;
  background: $bgColor;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }

  .header-input {
    flex: 1;
    height: 0.62rem;
    line-height: 0.62rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #B1A9B7;
    border-radius: 0.1rem;
    font-family: 'Microsoft YaHei';
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      margin-left: -0.06rem;
      font-size: 0.43rem;
    }
  }
}
</style>