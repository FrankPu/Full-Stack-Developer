import Vue from 'vue'
import VueRouter from 'vue-router'
import cmpFixedTwo from '@/components/cmp-fixed-two'

describe('第一个测试', () => {




  it('下载App字样是否正常', () => {
    const Constructor = Vue.extend(cmpFixedTwo)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.code span').textContent)
      .toEqual('下载app')
  })


  it('二维码图片地址是否正常', () => {
    const Constructor = Vue.extend(cmpFixedTwo)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.code-img img').src)
      .toEqual('/static/img/qrcode.png')
  })



})
