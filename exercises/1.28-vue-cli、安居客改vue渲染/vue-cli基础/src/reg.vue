<template lang="html">
  <div class="">
    <cmp-header/>
    <form class="" action="http://localhost:8082/reg" method="post">
      账号：<input type="text" name="" value=""> <br>
      密码：<input type="password" name="" value=""> <br>
      <input type="submit" name="" value="提交">
      <a href="#/">返回登录</a>
    </form>
    <cmp-footer/>
  </div>
</template>

<script>
import cmpHeader from '@/components/cmp-header'
import cmpFooter from '@/components/cmp-footer'

export default {
  components: {cmpHeader, cmpFooter}
}
</script>

<style lang="css">
</style>
