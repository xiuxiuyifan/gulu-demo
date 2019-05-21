module.exports = {
	title: '秦风UI组件',
	description: '作者本人特别喜欢秦时明月这部系列剧',
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
				title: '组件库概览',
				collapsable: false,
				children: [
					'/views/install/',
					'/views/overview/'
				]
			}
		]
	}
}
