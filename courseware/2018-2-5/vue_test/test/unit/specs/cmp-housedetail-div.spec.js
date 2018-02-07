import Vue from 'vue'
import VueRouter from 'vue-router'
import CmpHouseDetailDiv from '@/components/cmp-housedetail-div'

describe('第一个测试', () => {




  it('正常渲染的话，应该有个图片', () => {
    const Constructor = Vue.extend(CmpHouseDetailDiv)
    const vm = new Constructor()

    vm.setHouse({ID: 'sdfasdw4e5wesrfsetse5t'})

    vm.$mount()

    expect(vm.$el.querySelector('.housedetail-div img').src)
      .toEqual('/static/img/house1.jpg')
  })


  //?
  it('检查ID输出是否正确', () => {
    const Constructor = Vue.extend(CmpHouseDetailDiv)
    const vm = new Constructor({house: {}})

    vm.setHouse({ID: 'sdfasdw4e5wesrfsetse5t'})

    vm.$mount()

    expect(vm.$el.querySelector('.houseinfo-div .housename-div').href)
      .toEqual('#/house/sdfasdw4e5wesrfsetse5t')
  })







})
