<template>
  <div class="container">
    <h2>
      打印测试
      <el-button @click="PreviewMytable">打印</el-button>
    </h2>
    <el-divider></el-divider>
    <div id="one">
      <TABLE align="center" border="1" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse;font-size:13px;table-layout:fixed" bordercolor="#333333">
        <thead style="font-size:12px">
          <TR>
            <TD width="10%">
              <DIV align="center">
                <b>序号</b>
              </DIV>
            </TD>
            <TD width="30%">
              <DIV align="center">
                <b>商品编码</b>
              </DIV>
            </TD>
            <TD width="30%">
              <DIV align="center">
                <b>商品名称</b>
              </DIV>
            </TD>
            <TD width="30%">
              <DIV align="center">
                <b>商品名称（缅文）</b>
              </DIV>
            </TD>
          </TR>
        </thead>
        <tbody style="font-family:'Zawgyi-One';font-size:12px">
          <tr v-for="(item,i) in tableData" :key="i">
            <td align="center">{{i+1}}</td>
            <td align="center">{{item.usercode}}</td>
            <td align="center">{{item.fullname}}</td>
            <td align="center">{{item.tname}}</td>
          </tr>
        </tbody>
      </TABLE>
    </div>
  </div>
</template>

<script>
import { getLodop } from '@/plugins/LodopFuncs'
export default {
  name: 'print',
  props: {
    msg: String
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    init () {
      this.axios.get('https://www.easy-mock.com/mock/5fa0c2880bf9ee0300941074/test/printData')
        .then((response) => {
          console.log(response.data)
          this.tableData = response.data
        }).catch(function (error) {
          console.log(error)
        })
    },
    PreviewMytable () {
      let LODOP = getLodop()
      this.print()
      LODOP.PREVIEW()
    },
    getValue (val) {
      console.log(val)
    },
    print () {
      let LODOP = getLodop()
      LODOP.PRINT_INIT('到货通知单')
      LODOP.SET_PRINT_PAGESIZE(1, '', '', '')// 设置打印方向2横向1竖向
      let strStyle = '<style>table,td{padding:3px 10px;font-family:Zawgyi-One;word-break:break-word;}tbody td{word-wrap:break-word;}</style>'
      LODOP.ADD_PRINT_TABLE(
        30,
        '3%',
        '94%',
        700,
        strStyle + document.getElementById('one').innerHTML
      )
      LODOP.SET_PRINT_STYLEA(0, 'ItemType', 1)
      LODOP.SET_PRINT_STYLEA(0, 'LinkedItem', 1)
      LODOP.NewPageA()
    },
    douban () {
      // 代理可以解决的原因：因为客户端请求服务端的数据是存在跨域问题的，而服务器和服务器之间可以相互请求数据，是没有跨域的概念（如果服务器没有设置禁止跨域的权限问题），也就是说，我们可以配置一个代理的服务器可以请求另一个服务器中的数据，然后把请求出来的数据返回到我们的代理服务器中，代理服务器再返回数据给我们的客户端，这样我们就可以实现跨域访问数据。
      this.axios.get('/movie/top250')// 跨域设置
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.el-button {
  float: right;
}
tr > td {
  padding-top: 5px;
}
thead tr > td {
  padding-bottom: 5px;
}
</style>
