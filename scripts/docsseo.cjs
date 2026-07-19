// 获取docs/dist/zh/index.html内容
const fs = require('fs')
const path = require('path')

const docsZhSeo = () => {
    const indexPath = path.join(__dirname, '../docs/dist/zh/index.html')
    if (!fs.existsSync(indexPath)) {
        console.log('zh index.html not found, skipping')
        return
    }
    const indexHtml = fs.readFileSync(indexPath, 'utf-8')

    // 修改 head 中的 title 为 PakePlus 官方网站
    let newHtml = indexHtml.replace(
        '<title>PakePlus</title>',
        '<title>PakePlus 官网 - 网页秒变桌面/手机应用 - 开源免费打包工具</title>'
    )
    // 确保有 meta description
    if (!newHtml.includes('name="description"')) {
        newHtml = newHtml.replace(
            '</head>',
            '<meta name="description" content="PakePlus 是开源免费的打包工具，可将 HTML/网页/Vue/React 项目打包为跨平台桌面和手机应用，支持 Windows/macOS/Linux/Android/iOS">\n</head>'
        )
    }

    fs.writeFileSync(indexPath, newHtml)
    console.log('zh SEO updated successfully')
}

const docsEnSeo = () => {
    const indexPath = path.join(__dirname, '../docs/dist/index.html')
    if (!fs.existsSync(indexPath)) {
        console.log('en index.html not found, skipping')
        return
    }
    const indexHtml = fs.readFileSync(indexPath, 'utf-8')

    // 修改 head 中的 title
    let newHtml = indexHtml.replace(
        '<title>PakePlus</title>',
        '<title>PakePlus - Turn Web into Desktop/Mobile Apps in Minutes | Free Open Source Tool</title>'
    )
    // 确保有 meta description
    if (!newHtml.includes('name="description"')) {
        newHtml = newHtml.replace(
            '</head>',
            '<meta name="description" content="PakePlus is a free open source tool to package HTML/Web/Vue/React projects into cross-platform desktop and mobile apps for Windows, macOS, Linux, Android, iOS.">\n</head>'
        )
    }

    fs.writeFileSync(indexPath, newHtml)
    console.log('en SEO updated successfully')
}

/**
 * seo title - post build script to ensure proper SEO meta tags
 */
docsZhSeo()
docsEnSeo()
