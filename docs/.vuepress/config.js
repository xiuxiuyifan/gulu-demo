module.exports = {
  title: 'Vue-UI组件',
	themeConfig: {
		logo: '/2.jfif',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'External', link: 'https://google.com' },
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
          '/views/guluDocs/button.md',
          '/views/guluDocs/collapse.md',
          '/views/guluDocs/container.md',
          '/views/guluDocs/icon.md',
					'/views/guluDocs/input.md',
					'/views/guluDocs/Layout.md',
          '/views/guluDocs/popover.md',
          '/views/guluDocs/tabs.md',
          '/views/guluDocs/toast.md',
				]
			}
		]
	}
}
