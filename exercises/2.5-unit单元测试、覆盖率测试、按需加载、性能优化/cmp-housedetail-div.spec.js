import Vue from 'vue'
import VueRouter from 'vue-router'
import CmpHouseDetailDiv from '@/components/cmp-housedetail-div'
import CmpRightadDiv from '@/components/cmp-rightad-div'

describe('第一个测试', () => {

  it('正常渲染的话，应该有个图片', () => {
    const Constructor = Vue.extend(CmpHouseDetailDiv)
    const vm = new Constructor()

    vm.setHouse({ID: 'sdfasdw4e5wesrfsetse5t'})

    vm.$mount()

    expect(vm.$el.querySelector('.housedetail-div img').src)
      .toEqual('/static/img/house1.jpg')
  })

  it('正常渲染的话，图片应该有路径', () => {
    const Constructor = Vue.extend(CmpRightadDiv)
    const vm = new Constructor().$mount()

    // vm.setHouse({ID: 'sdfasdw4e5wesrfsetse5t'})
    //
    // vm.$mount()

    expect(vm.$el.querySelector('.rightadd-div img').src)
      .toEqual('/static/img/addright.jpg')
  })
})
