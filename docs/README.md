# UG 对外文档
## 新增文档流程

 * 新增文档 `.md` 文件，放置到 `./docs` 下的非 `.vuepress` 目录
 * `README.md`文件为所在文件夹的默认文件，即可通过 `/folder/` 直接访问。如 `./folder-b/README.md` 可通过 `https://${host}/docs/folder-b/` 访问
 * 文档标题由文档内第一个标题决定，与文件名无关

## 新增侧边栏
 * 修改 `.vuepress/config.js` 中 `sidebar` 配置项
 * 根目录名由 `title` 决定
 * 目录下的文件名由 `children` 中文档标题决定
 * 文件展开的层级结构，由文档内的标题结构决定
 * 详见 [VuePress - 侧边栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)

## 新增导航栏
 * 修改 `.vuepress/config.js` 中 `nav` 配置项
 * 详见 [VuePress - 导航栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)

## Markdown插件
当前仅支持Markdown基本语法和`mermaidjs`绘图，如需引入其他插件:
 * `yarn add -D ***-plugin`
 * 修改 `.vuepress/config.js` 中 `plugins` 配置项

## 开发 & 调试
```shell
# 进入docs目录
cd ./docs
# 安装vuepress相关依赖
yarn
# 启动dev模式
yarn serve
# 访问devServer，默认8080端口
open http://localhost:8080/docs
```

## 构建 & 发布
```shell
# 进入docs目录
cd ./docs
# 安装vuepress相关依赖
yarn
# vuepress 构建, 产物会直接放置到 ./cmd/web/docs 目录，方便 Gin 路由访问
yarn build
# 启动 ./cmd/web 服务，访问 docs 路径
cd ./cmd/web
go run web.go
open http://localhost:8086/docs
```

## go get -v package from git.code.oa.com
```shell
export GOPROXY="https://goproxy.cn,direct"
export GOPRIVATE="git.code.oa.com"
go get -v git.code.oa.com/tme-server-component/kg_growth_open
```