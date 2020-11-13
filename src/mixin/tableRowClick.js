export default{
  data () {
    return {
      tableRowSelected: []
    }
  },
  methods: {
    tableRowClassName ({ row }) {
      // elementUI 默认高亮行的class类 不用再样式了^-^,也可通过css覆盖改变背景颜色
      return this.tableRowSelected.some(c => c.rowIndex === row.rowIndex) ? 'focus-row' : ''
    },
    tableRowStyle ({ row, rowIndex }) {
      row.rowIndex = rowIndex
    },
    rowClick (row) {
      // console.log(this.tableRowSelected.length)
      let refsElTable = this.$refs.table // 获取表格对象
      refsElTable.toggleRowSelection(row) // 调用选中行方法
    },
    // 表格多选调这个方法
    handleMultiSelectionChange (row) {
      this.tableRowSelected = row
    },
    // 表格单选调这个方法
    handleSingleSelectionChange (row) {
      this.tableRowSelected = row.length ? [row[row.length - 1]] : []
      if (row.length > 1) {
        this.$refs['table'].clearSelection()
        this.$refs['table'].toggleRowSelection(row[1], true)
      }
    },
    // 取消选择
    toggleSelection () {
      this.$refs.table.clearSelection()
    }
  }
}
