import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import "../../public/simple-cesium/style.css"
import "@simple/cesium/style.css"
import "./style.css"

function setupImagePreview() {
  const overlay = document.createElement('div')
  overlay.className = 'image-preview-overlay'
  overlay.innerHTML =
    '<div class="image-preview-backdrop"></div>' +
    '<img class="image-preview-img" alt=""/>' +
    '<button class="image-preview-close" aria-label="关闭">&times;</button>'

  const img = overlay.querySelector<HTMLImageElement>('.image-preview-img')!
  const close = () => {
    overlay.classList.remove('open')
    document.body.style.overflow = ''
  }
  const show = (src: string) => {
    img.src = src
    overlay.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  overlay.addEventListener('click', (e) => {
    const el = e.target as HTMLElement
    if (el === overlay || el.classList.contains('image-preview-backdrop') || el.classList.contains('image-preview-close')) {
      close()
    }
  })

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const image = target.tagName === 'IMG' ? target : target.closest<HTMLImageElement>('img')
    if (!image || !image.closest('.vp-doc') || image.closest('a')) return
    e.preventDefault()
    show(image.currentSrc || image.src)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })

  document.body.appendChild(overlay)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(createPinia())
    app.use(ElementPlus)
    if (typeof document !== 'undefined') {
      import('naive-ui').then(({ default: NaiveUI }) => {
        app.use(NaiveUI)
      })
      setupImagePreview()
    }
  }
}
