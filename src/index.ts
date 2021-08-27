import { Plugin, ResolvedConfig } from "vite";

type Options = {
  /**
   * default: window.__publicPath__
   */
  preloadBaseMarker?: string;
};
// default value
const defaultOptions: Options = {
  preloadBaseMarker: "window.__publicPath__",
};

export function usePreloadRuntimePublicPath(
  options: Options = defaultOptions
): Plugin {
  const { preloadBaseMarker = defaultOptions.preloadBaseMarker } = options;
  let config: ResolvedConfig;

  return {
    name: "vite-plugin-runtime-public-path",
    enforce: "pre",
    apply: "build",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    renderChunk(code) {
      code = code.replace(
        `const base = '${config.base}';const __vitePreload`,
        `const base = ${preloadBaseMarker};const __vitePreload`
      );
      return code;
    },
  };
}
