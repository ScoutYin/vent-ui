<template>
  <div class="vent-tab-view-item"
      :class="{'vent-tab-view-item-left': id < $parent.value,
              'vent-tab-view-item-right': id > $parent.value,
              'vent-tab-view-item-prev': id === $parent.value - 1,
              'vent-tab-view-item-cur': id === $parent.value,
              'vent-tab-view-item-next': id === $parent.value + 1}"
      >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VentTabViewItem',
  data () {
    return {
      id: (this.$parent.$children.length || 1) - 1
    }
  },
  mounted () {
    this.$el.addEventListener('transitionend', () => {
      this.$parent.isMoving = false
      this.$parent.activeIndex = this.$parent.value
      this.$parent.currentX = 0
    })
  }
}
</script>

<style lang="scss">
.vent-tab-view-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &-prev, &-left {
    transform: translate3d(-100%, 0, 0);
  }
  &-next, &-right {
    transform: translate3d(100%, 0, 0);
  }
  &-left:not(.vent-tab-view-item-prev), &-right:not(.vent-tab-view-item-next) {
    // display: none;
  }
  &-cur {
    transform: translate3d(0, 0, 0);
  }
}
</style>
