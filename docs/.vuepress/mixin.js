export default {
  data () {
    return {
      //每一个区域的高度
      codeParent: [],
      codeHeightArr: [],
      //每个区域的显示状态
      isShow: [],
      columns: [
        {
          title: '参数',
          dataIndex: 'params',
          key: 'params',
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '默认值',
          dataIndex: 'default',
          key: 'default',
        },
        {
          title: '版本',
          dataIndex: 'version',
          key: 'version',
        },
      ],
    }
  },
  methods: {
    //根据子元素的高度 设置代码区域父元素的高度
    showCode (index) {
      this.$set(this.isShow, index, !this.isShow[index])
      this.$nextTick(() => {
        if (this.isShow[index] === true) {
          this.codeParent[index].style.height = this.codeHeightArr[index] + 'px'
        } else {
          this.codeParent[index].style.height = 0
        }
      })
    },
    //得到所有代码区域的高度
    getCodesHeight () {
      const arr = document.getElementsByClassName('code-content-height')
      this.codeParent = document.getElementsByClassName('code-content')
      const arrLength = arr.length
      for (let i = 0; i < arrLength; i++) {
        this.codeHeightArr.push(arr[i].getBoundingClientRect().height)
        this.isShow.push(false)
      }
    },
  },
  mounted () {
    //异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
    this.$nextTick(() => {
      this.getCodesHeight()
    })
  },
}
