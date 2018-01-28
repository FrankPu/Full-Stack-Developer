<template lang="html">
  <div class="all-div">
    <div class="title-div">
      <img src="/static/img/title.jpg" alt="" />
      <span style="float:right;position: relative;bottom:23px;right: 3px;color: white;">广告</span>
    </div>
    <div class="loginmenu-div">
      <div class="menu">
        <a href="#">首 页</a><span class="line">|</span>
        <a href="#">新 房</a><span class="line">|</span>
        <a href="#">二手房</a><span class="line">|</span>
        <a href="#">租 房</a><span class="line">|</span>
        <a href="#">商铺写字楼</a><span class="line">|</span>
        <a href="#">海外地产</a><span class="line">|</span>
        <a href="#">楼 讯</a><span class="line">|</span>
        <a href="#">房 价</a><span class="line">|</span>
        <a href="#">问 答</a>
      </div>
      <div class="login">
        <a href="#">客户登录</a><span class="triangle-span" style="top:0;"></span><span class="line">|</span>
        <a href="#"><a class="user-icon" href="#"></a>用户登录</a>
        <a href="#">注册</a><span class="line">|</span>
        <a href="#"><a class="collect-icon" href="#"></a>收藏夹</a>
      </div>
    </div>
    <div class="search-div">
      <img src="/static/img/anjuke.png" alt="" /><div class="newline"></div>
      <a href="#">新房</a>
      <span class="select-div">北京</span><span class="triangle-span"></span>
      <form action="#" style="float:right;">
        <input class="searchtext" type="text" value="请输入楼盘名称、地址或房源特征" placeholder="请输入楼盘名称、地址或房源特征"/>
        <input type="button" class="searchbutton" value="搜 索" />
      </form>
    </div>
      <div class="devide-div">
      <ul>
        <li>新盘</li>
        <li>楼讯</li>
        <li>热门活动</li>
        <li>看房团</li>
        <li>房源</li>
        <li>商业地产<span class="new-span"></span></li>
        <li>海外地产</li>
        <li>贷款</li>
        <li>品牌专区</li>
      </ul>
    </div>
    <div class="choose-div">
      <div class="choosemessage-div">
        <div class="choose-position">
          位置：<a href="#" class="orange-font">区域找房</a><a href="#">地铁找房</a><a href="#">地图找房</a><a href="#">私家房探</a>
        </div>
        <div class="choose-positionitem">
          <span class="position-span" style="color: #f60;font-weight: 700;" >不限</span>
          <span class="position-span">投资</span>
          <span class="position-span">朝阳</span>
          <span class="position-span">房山</span>
          <span class="position-span">大兴</span>
          <span class="position-span">通州</span>
          <span class="position-span">涿州</span>
          <span class="position-span">昌平</span>
          <span class="position-span">固安</span>
          <span class="position-span">丰台</span>
          <span class="position-span">燕郊</span>
          <span class="position-span">顺义</span>
          <span class="position-span">廊坊</span>
          <span class="position-span">香河</span>
          <span class="position-span">海淀</span>
          <span class="position-span">永清</span>
          <span class="position-span">密云</span>
          <span class="position-span">门头沟</span>
          <span class="position-span">大厂</span>
          <span class="position-span">西城</span>
          <span class="position-span">武清</span>
          <span class="position-span">东城</span>
          <span class="position-span">平谷</span>
          <span class="position-span">石景山</span>
          <span class="position-span">延庆</span>
          <span class="position-span">怀柔</span>
          <span class="position-span">秦皇岛</span>
          <span class="position-span">雄安新区</span>
        </div>
        <div class="choose-position">
          单价：<a href="#" class="orange-font">不限</a><a href="#">6000以下</a><a href="#">6000-1万</a><a href="#">1.5-2万</a><a href="#">2-3万</a><a href="#">3-4万</a><a href="#">4-6万</a><a href="#">6万以上</a>
        <div class="choose-position1">
          户型：<a href="#" class="orange-font">不限</a><a href="#">一室</a><a href="#">二室</a><a href="#">三室</a><a href="#">四室</a><a href="#">五室及以上</a>
        </div>
        <div class="choose-position1">
          特色：<a href="#" class="orange-font">不限</a><a href="#">刚需房</a><a href="#">非毛坯</a><a href="#">五环至六环</a><a href="#">低总价</a><a href="#">南北通透</a><a href="#">品牌开发商</a>
        </div>
        <div class="choose-position1">
          类型：<a href="#" class="orange-font">不限</a><a href="#">住宅</a><a href="#">别墅</a><a href="#">商业</a><a href="#">商铺</a><a href="#">写字楼</a>
        </div>
          </div>
      </div>
    </div>
    <div class="content-div">
        <div class="leftcontent-div">
          <div class="sort-div">
            <div class="choosehouse-div" style="color: #60ad00;z-index: 1;top: -1px;border-top: 2px solid #62ab00;border-left: 1px solid #ddd;border-right: 1px solid #ddd;background-color: #fff;margin-left: -1px;margin-right: -1px;">全部楼盘</div>
            <div class="choosehouse-div">优惠楼盘</div>
            <div class="choosehouse-div">品牌楼盘</div>
          </div>
          <div class="condi-sort">
            <span style="color:#f60;font-size: 14px;line-height: 44px;">默认顺序</span>
            <a href="#">价格</a>
            <a href="#">开盘时间</a>
            <div class="input-div"><input type="checkbox" /><span>沙盘图</span></div>
            <div class="input-div"><input type="checkbox" /><span>视频</span></div>
            <span class="total-span">共有<span style="color:#f60;">1297</span>个符合要求的北京楼盘</span>
          </div>
          <div class="add-div"><img src="/static/img/add.png" alt="广告" /><div style="clear: both;"></div></div>
          <div class="house-div">
            <cmpHousedetailDiv v-for="house in houseData" :key="house.ID" :house="house"/>
            <div class="page-div">
               共有 1296 个有关北京新房楼盘
               <div class="pagination-div">
                <a href="#" style="width:82px;">上一页</a>
                <a href="#" style="background:#62ab00;border: #62ab00;color:white;font-weight: 700;">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#" style="width:82px;background:#62ab00;border: #62ab00;color:white;font-weight: 700;">下一页</a>
              </div>
            </div>
          </div>

        </div>
        <div class="rightcontent-div">
          <cmpRightadDiv/>
          <div style="clear: both;"></div>
        </div>

    </div>
    <div class="guesslike-div">
      <h3>猜你喜欢</h3>
      <div class="guesslist-div">
        <cmpGuessdetailDiv/>
      </div>
    </div>
    <div class="bottomadd-div">
      <img src="/static/img/bottomadd.jpg" alt="底端广告" />
    </div>
    <cmpInfoitemDiv/>
    <div class="infoitem-div">
    <label>当前位置：</label>
    <a href="#">北京房产网  > </a>
    <a href="#">北京楼盘</a>

    </div>
    <div class="bigfont-div">北京房产网，提供北京楼盘信息，包括北京新开楼盘，在售楼盘，新房开盘等。安居客北京新房房产信息网频道，让您了解楼盘最新动态。手机找房：北京楼盘 户型找房：北京户型大全 北京楼盘大全 北京开发商 北京物业公司 <span style="color:red;">北京热门楼盘</span> 北京学校大全 北京地图找房
    </div>
    <cmpInfoitemDiv/>
    <div class="avoid-div">免责声明：本站旨在为广大用户提供更多信息服务，不声明或保证所提供信息的准确性和完整性。页面所载内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，用户因参照本站信息进行相关交易所造成的任何后果与本站无关。如楼盘信息有误，您可以投诉或拨打举报电话：400-620-6688
    </div>
    <div class="intro-div">
      <ul>
        <li>关于安居客<span>|</span></li>
        <li>联系我们<span>|</span></li>
        <li>用户协议<span>|</span></li>
        <li>友情链接<span>|</span></li>
        <li>网站地图<span>|</span></li>
        <li>其他城市<span>|</span></li>
        <li>最新房源<span>|</span></li>
        <li>最新问答<span>|</span></li>
        <li>房贷计算器<span>|</span></li>
        <li>放心搜<span>|</span></li>
        <li>订阅退订<span>|</span></li>
      </ul>
      <br />
      <span style="text-align: center;">客服热线/虚假信息举报：400-620-6688邮箱：service@58ganji.comCopyright © 2007-2017 www.anjuke.com All Rights Reserved ICP号：沪 B2-20090008
      </span>
    </div>
  </div>
</template>

<script>
import cmpHousedetailDiv from '@/components/cmp-housedetail-div'
import cmpRightadDiv from '@/components/cmp-rightad-div'
import cmpGuessdetailDiv from '@/components/cmp-guessdetail-div'
import cmpInfoitemDiv from '@/components/cmp-infoitem-div'

export default {
  components: {cmpHousedetailDiv, cmpRightadDiv, cmpGuessdetailDiv, cmpInfoitemDiv},
  data () {
    let dataBus = {
      houseData: []
    }

    this.$a.get(`http://localhost:8081/api/house/page/1`).then(res => {
      let json = res.data

      if (json.err) {
        alert('失败了')
      } else {
        dataBus.houseData = json.data
      }
    }, err => {
      alert('失败了')
      console.error(err)
    })

    return dataBus
  }
}
</script>

<style lang="css">
</style>
