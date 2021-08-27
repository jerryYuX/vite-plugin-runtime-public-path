# vite-plugin-runtime-public-path

> 在运行时修改 base，使 module preload 指向正确的地址

## 场景

当前端构建产物使用动态 cdn 的形式引入到静态模板时，module preload 的地址默认是当前访问域名 + base，而这时你需要 cdn 地址 + base，此插件允许你可以在模板中定义 `window.__publicPath__` 来指定这个值。

## 用法

```ts
// vite.config.ts

import { usePreloadRuntimePublicPath } from "vite-plugin-runtime-public-path";
export default defineConfig({
  plugins: [
    usePreloadRuntimePublicPath({ preloadBaseMarker: "window.__publicPath__" }),
  ],
});
```

## 选项

### `preloadBaseMarker`

Type: `string`<br>

Default: `window.__publicPath__`
