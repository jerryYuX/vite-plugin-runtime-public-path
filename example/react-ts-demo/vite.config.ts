import { build, defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { usePreloadRuntimePublicPath } from "vite-plugin-runtime-public-path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    usePreloadRuntimePublicPath({ preloadBaseMarker: "window.__publicPath__" }),
  ],
});
