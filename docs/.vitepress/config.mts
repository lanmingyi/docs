import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import cesium from 'vite-plugin-cesium'
import type { Plugin } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function ssrStubCesiumNavigation(): Plugin {
  let isSSR = false
  return {
    name: 'ssr-stub-cesium-navigation',
    enforce: 'pre',
    configResolved(config) {
      isSSR = !!(config as any).build.ssr
    },
    resolveId(source: string) {
      if (source === 'cesium-navigation-es6' && isSSR) {
        return '\0stub:cesium-navigation-es6'
      }
    },
    load(id: string) {
      if (id === '\0stub:cesium-navigation-es6') {
        return 'export default function CesiumNavigation() {}'
      }
    }
  }
}

export default defineConfig({
  base: '/docs/',
  title: '文档',
  description: '',
  head: [
    ['link', { rel: 'stylesheet', href: '/docs/cesium/Widgets/widgets.css' }],
  ],
  vite: {
    resolve: {
      alias: [
        { find: /^@simple\/cesium$/, replacement: resolve(__dirname, '../public/simple/cesium/dist') },
        { find: /^@simple\/cesium\/(.*)$/, replacement: resolve(__dirname, '../public/simple/cesium/dist/$1') },
        { find: /^@simple\/ui$/, replacement: resolve(__dirname, '../public/simple/ui/dist') },
        { find: /^@simple\/ui\//, replacement: resolve(__dirname, '../public/simple/ui/dist') + '/' },
      ]
    },
    server: {
      port: 50000,
      fs: { allow: ['..', '../..'] }
    },
    define: {
      'CESIUM_BASE_URL': JSON.stringify('/docs/cesium/'),
    },
    plugins: [
      ssrStubCesiumNavigation(),
      process.env.NODE_ENV !== 'production' ? cesium() : undefined,
      // cesium({ rebuildCesium: true }),
    ].filter(Boolean),
    optimizeDeps: {
      include: [
        'cesium',
        'cesium-navigation-es6',
        '@turf/turf',
        'proj4',
        'satellite.js',
        '@vueuse/core',
        'dayjs',
        'bpmn-js',
        'bpmn-js/lib/Modeler',
        'bpmn-js-token-simulation',
        'diagram-js',
        'diagram-js-direct-editing',
        'inherits-browser',
        'echarts',
        'vuedraggable',
        '@antv/g6',
        'element-plus',
        '@element-plus/icons-vue',
        'naive-ui',
        'vueuc',
        'vooks',
        'scroll-into-view-if-needed',
        'compute-scroll-into-view',
        'ant-design-vue',
        'ant-design-vue/lib/locale/zh_CN',
        'ant-design-vue/locale/zh_CN',
        '@ant-design/icons-vue',
        '@ant-design/icons-svg',
      ],
    },
    ssr: {
      // external: ['cesium'], 
      noExternal: ['pinia', 'naive-ui', 'vueuc', 'vooks', 'scroll-into-view-if-needed', 'compute-scroll-into-view', 'ant-design-vue', '@ant-design/icons-vue', '@ant-design/icons-svg', 'bpmn-js', 'bpmn-js-token-simulation', 'diagram-js', 'diagram-js-direct-editing', 'inherits-browser'],
    },
  },
  markdown: {
    config(md: any) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  themeConfig: {
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/iviz-3d/' },
      { text: 'Cesium', link: '/components/simple-cesium/' },
      { text: 'UI组件', link: '/components/simple-ui/' },
    ],
    sidebar: {
      '/projects/': [
        {
          text: '信息可视化-3d', collapsed: false, items: [
            { text: '项目概述', link: '/projects/iviz-3d/' },
          ]
        },
        {
          text: '任务平台', collapsed: false, items: [
            { text: '项目概述', link: '/projects/task-platform/' },
            { text: '移动端', link: '/projects/task-platform/part1-mobile' },
            { text: '管理端', link: '/projects/task-platform/part2-admin' }
          ]
        },
        {
          text: '虚拟仿真实验教学平台', collapsed: false, items: [
            { text: '项目概述', link: '/projects/vsimet-platform/' },
            { text: '学生端', link: '/projects/vsimet-platform/student' },
            { text: '管理端', link: '/projects/vsimet-platform/admin' },
            { text: '智慧教室H5', link: '/projects/vsimet-platform/h5' }
          ]
        }
      ],
      '/components/simple-cesium/': [
        {
          text: 'Simple Cesium', items: [
            { text: '组件', link: '/components/simple-cesium/guide/components' },
            { text: 'Core', link: '/components/simple-cesium/guide/core' },
            { text: 'Hooks', link: '/components/simple-cesium/guide/hooks' },
            { text: 'Utils', link: '/components/simple-cesium/guide/utils' },
            { text: 'Extensions', link: '/components/simple-cesium/guide/extensions' },
            { text: 'ViewModel', link: '/components/simple-cesium/guide/view-model' },
          ]
        },
      ],
      '/components/simple-ui/': [
        {
          text: '业务组件',
          items: [
            { text: 'Bpmn', link: '/components/simple-ui/components/bpmn' },
            // { text: 'FormDesign', link: '/components/simple-ui/components/form-design' },
            // { text: 'PortalDesign', link: '/components/simple-ui/components/portal-design' },
          ]
        },
        // {
        //   text: '自定义',
        //   items: [
        //     // { text: 'DragItem', link: '/components/simple-ui/components/dragitem' },
        //     // { text: 'Draggable', link: '/components/simple-ui/components/draggable' },
        //     // { text: 'G6Graph', link: '/components/simple-ui/components/g6-graph' },
        //     // { text: 'Gantt', link: '/components/simple-ui/components/gantt' },
        //   ],
        // },
      ],
    }
  }
})
