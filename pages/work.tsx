import Head from 'next/head'
import { md2html } from '@/utils/posts'

const siteTitle = 'Works'
const description = "Where keguigong's thoughts were built"
const title = siteTitle + ' - ' + description + ' - ' + '可圭共'
const md = `
> 🚧 待增加页面样式以及交互。

# 练习作品

1. [游戏角色选择器, 参考 Party Animals 风格](https://keguigong.github.io/role-picker-referring-to-party-animals/)

![Party Animals role picker](/images/party-animals-picker.jpg)

_Party Animals 这款游戏的美术和 UI 感觉还是很不错的，因此参照游戏内的界面，使用 JavaScript 仿造了一个角色选择组件。_

---

2. [创建一个自己的Chrome Dino小游戏](https://keguigong.github.io/chrome-dino/)

![Chrome Dino](/images/chrome-dino.png)

_Chrome Dino 是 Chrome 浏览器内置的一款小游戏，参照源码使用 TypeScript 自己写了一遍，目前已经完成原有功能的开发，后续考虑添加一些道具，如武器和技能，对应的需要绘制资源图片。_

---

3. [搜索框组件, 优化搜索体验](https://keguigong.github.io/search-box-component/)

![Search box component](/images/search-box-component.jpg)

_一个基础搜索组件，支持节流搜索、请求返回状态显示等。_

---

4. [B端平台: 故障分析与诊断平台](https://keguigong.github.io/sample-alarm-analysis-platform/)

---

5. [Android自定义控件: 使用自定义 View 绘制一个步进进度条](https://github.com/keguigong/android-step-progress-bar)
`

export default function Works({ content }: any) {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            description
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div data-markdown-body dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  )
}

export async function getStaticProps() {
  const content = md2html(md)
  return {
    props: {
      content
    }
  }
}
