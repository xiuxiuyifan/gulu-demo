module.exports = {
  title: 'Vue-UI组件',
  head: [
    ['script', { src: '//at.alicdn.com/t/font_729974_f6yvr2dempu.js' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      }],
  ],
  themeConfig: {
    logo: '/logo.jfif',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/xiuxiuyifan/gulu-demo' },
    ],
    sidebar: [
      {
        title: '开始安装',
        collapsable: false,
        children: [
          '/views/install/',
          '/views/overview/',
        ],
      },
      {
        title: '组件库',
        collapsable: false,
        children: [
          '/views/guluDocs/icon.md',
          '/views/guluDocs/button.md',
          '/views/guluDocs/collapse.md',
          '/views/guluDocs/grid.md',
          '/views/guluDocs/input.md',
          '/views/guluDocs/layout.md',
          '/views/guluDocs/popover.md',
          '/views/guluDocs/tabs.md',
          '/views/guluDocs/toast.md',
          '/views/guluDocs/cascader.md',
          '/views/guluDocs/carousel.md',
          '/views/guluDocs/checkBox.md',
          '/views/guluDocs/menu.md',
          '/views/guluDocs/form.md',
          '/views/guluDocs/paging.md',
          '/views/guluDocs/table.md',
          '/views/guluDocs/upload.md',
          '/views/guluDocs/sticky.md',
          '/views/guluDocs/scroll.md',
          '/views/guluDocs/datepicker.md',
          '/views/guluDocs/tree.md',
          '/views/guluDocs/notification.md',
        ],
      },
    ],
  },
}
