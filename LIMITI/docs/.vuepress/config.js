module.exports = {
    title: 'UESTC-LIMITI',
    //description: '我的个人网站',
    theme: 'reco',
    // head: [ // 注入到当前页面的 HTML <head> 中的标签
    //     //['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ],
    // base: '/', // 这是部署到github相关的配置
    // markdown: {
    //     lineNumbers: false // 代码块显示行号
    // },
    themeConfig: {
        type: 'blog',
        // 博客配置
        nav: [ // 导航栏配置
            { text: 'Category', link: '/docs/guide/introduce' },
            { text: 'Tag', link: '/docs/guide/introduce' },
        ],

        blogConfig: {
            category: {
                location: 3, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认文案 “标签”
            },
            // socialLinks: [ // 信息栏展示社交信息
            //     { icon: 'reco-github', link: 'https://github.com/recoluan' },
            //     { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            // ],

            // sidebar: 'auto', // 侧边栏配置
            // sidebarDepth: 2, // 侧边栏显示2级
        }
    }
}