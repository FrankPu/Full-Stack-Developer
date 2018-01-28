<template lang="html">
  <div class="housedetail-div">
    <img src="/static/img/house1.jpg" alt="房子" />
    <div class="houseinfo-div">
      <router-link :to="{name: 'house', params: {id: house.ID}}" target="_blank" class="housename-div"><span class="namespan1-div">{{house.title}}</span> <span class="namespan2-div">荐</span> <span class="namespan3-div">51条点评</span></router-link>
      <a href="#" style="margin:12px 0 0"><span class="map-span1">[ {{house.position_main}} ] {{house.position_second}} </span><span  class="map-span2">均价<span class="map-span3">{{house.ave_price}}</span>元/㎡</span></a>
      <a href="#"><span class="huxing-span">户型： {{house.property_types}}   建筑面积：{{house.area_min}}-{{house.area_max}}㎡</span></a>
      <a href="#" style="display: inline-block;overflow: hidden;margin-top: 13px;"><span>在售</span><span> 住宅 </span><span class="blank-span">大型超市 </span><span class="blank-span">品牌开发商</span><span class="blank-span"> 五环至六环 </span><span class="blank-span">大型社区</span></a>
      <p><a href="#"><span class="qiang-span">抢</span>首付两百万起住亦庄</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      house: this.$attrs['house']
    }
  }
}
</script>

<style lang="css">
</style>
