<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon">
          <img
            class="item-icon"
            src="https://p0.meituan.net/deal/393ac3d22d7d657e2da7ca929e18d3c41882.png"
          />
        </span>
        {{ item.title }}
      </div>
      <div class="item-childer" v-if="item.children">
        <detail-list :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;

  .item-title-icon {
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    margin-right: 0.1rem;

    .item-icon {
      width: 100%;
    }
  }
}

.item-childer {
  padding: 0 0.2rem;
}
</style>