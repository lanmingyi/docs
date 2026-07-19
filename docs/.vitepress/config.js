export default {
  base: '/docs/',
  title: '文档',
  head: [
    ['style', {}, '.vp-doc img { margin-bottom: 16px; } .vp-doc div[style*="display:flex"] { margin-bottom: 16px; }']
  ],
  themeConfig: {
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/task-platform/' }
    ],
    sidebar: [
      {
        text: '任务平台',
        collapsed: false,
        items: [
          { text: '项目概述', link: '/projects/task-platform/' },
          { text: '移动端', link: '/projects/task-platform/part1-mobile' },
          { text: '管理端', link: '/projects/task-platform/part2-admin' }
        ]
      },
      {
        text: '虚拟仿真实验教学平台',
        collapsed: false,
        items: [
          { text: '项目概述', link: '/projects/vsimet-platform/' },
          { text: '学生端', link: '/projects/vsimet-platform/student' },
          { text: '管理端', link: '/projects/vsimet-platform/admin' },
          { text: '智慧教室H5', link: '/projects/vsimet-platform/miniprogram' }
        ]
      }
    ]
  }
}