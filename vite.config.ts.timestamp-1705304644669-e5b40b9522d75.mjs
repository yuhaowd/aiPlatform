// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/%E9%83%9D%E6%98%8E%E9%91%AB/Desktop/vue3-project1/project/node_modules/.pnpm/vite@4.4.5_@types+node@20.4.7/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/%E9%83%9D%E6%98%8E%E9%91%AB/Desktop/vue3-project1/project/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.4.5_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///C:/Users/%E9%83%9D%E6%98%8E%E9%91%AB/Desktop/vue3-project1/project/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.4.5/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///C:/Users/%E9%83%9D%E6%98%8E%E9%91%AB/Desktop/vue3-project1/project/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@2.79.1_vite@4.4.5/node_modules/vite-plugin-mock/dist/index.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        localEnabled: command === "serve"
        //保证开发阶段可以使用mock接口
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
        // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTkwRERcdTY2MEVcdTk0NkJcXFxcRGVza3RvcFxcXFx2dWUzLXByb2plY3QxXFxcXHByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1OTBERFx1NjYwRVx1OTQ2QlxcXFxEZXNrdG9wXFxcXHZ1ZTMtcHJvamVjdDFcXFxccHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvJUU5JTgzJTlEJUU2JTk4JThFJUU5JTkxJUFCL0Rlc2t0b3AvdnVlMy1wcm9qZWN0MS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG4vL1x1NUYxNVx1NTE2NXN2Z1x1OTcwMFx1ODk4MVx1NzUyOFx1NTIzMFx1NzY4NFx1NjNEMlx1NEVGNlxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG4vL21vY2tcdTYzRDJcdTRFRjZcdTYzRDBcdTRGOUJcdTY1QjlcdTZDRDVcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tIFwidml0ZS1wbHVnaW4tbW9ja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCAsbW9kZX0pID0+IHtcbiAgLy9cdTgzQjdcdTUzRDZcdTU0MDRcdTc5Q0RcdTczQUZcdTU4ODNcdTRFMEJcdTVCRjlcdTVFOTRcdTc2ODRcdTUzRDhcdTkxQ0ZcbiBsZXQgZW52PSBsb2FkRW52KG1vZGUscHJvY2Vzcy5jd2QoKSk7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCIsXG4gICAgICB9KSxcbiAgICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgICBsb2NhbEVuYWJsZWQ6IGNvbW1hbmQgPT09IFwic2VydmVcIiwgLy9cdTRGRERcdThCQzFcdTVGMDBcdTUzRDFcdTk2MzZcdTZCQjVcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1Mjhtb2NrXHU2M0E1XHU1M0UzXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoXCIuL3NyY1wiKSwgLy8gXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHU5MTREXHU3RjZFXHVGRjBDXHU0RjdGXHU3NTI4IEAgXHU0RUUzXHU2NkZGIHNyY1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vc2Nzc1x1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlx1NzY4NFx1NEUwMFx1NEUyQVx1OTE0RFx1N0Y2RVxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiLi9zcmMvc3R5bGVzL3ZhcmlhYmxlLnNjc3NcIjsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1YsU0FBUyxjQUFhLGVBQWU7QUFDelgsT0FBTyxTQUFTO0FBRWhCLE9BQU8sVUFBVTtBQUVqQixTQUFTLDRCQUE0QjtBQUVyQyxTQUFTLHFCQUFxQjtBQUU5QixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSSxNQUFNO0FBRWpELE1BQUksTUFBSyxRQUFRLE1BQUssUUFBUSxJQUFJLENBQUM7QUFDbEMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0oscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLFFBQzFELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNaLGNBQWMsWUFBWTtBQUFBO0FBQUEsTUFDNUIsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLE9BQU87QUFBQTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
