module.exports = {
  title: 'Vue-UI组件',
	themeConfig: {
		logo: '/2.jfif',
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
					'/views/overview/'
				]
			},
			{
				title: '组件库',
				collapsable: false,
				children: [
          '/views/guluDocs/icon.md',
          '/views/guluDocs/button.md',
          '/views/guluDocs/collapse.md',
          '/views/guluDocs/container.md',
					'/views/guluDocs/input.md',
					'/views/guluDocs/Layout.md',
          '/views/guluDocs/popover.md',
          '/views/guluDocs/tabs.md',
          '/views/guluDocs/toast.md',
          '/views/guluDocs/carousel.md',
          '/views/guluDocs/checkBox.md',
          '/views/guluDocs/menu.md',
          '/views/guluDocs/form.md',
          '/views/guluDocs/paging.md',
          '/views/guluDocs/table.md',
          '/views/guluDocs/upload.md',
          '/views/guluDocs/sticky.md',
				]
			}
		]
	}
}
