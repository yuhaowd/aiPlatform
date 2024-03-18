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
    //代理跨域
    /* server: {
         proxy: {
           '/api': {
             target:'http://localhost:8080', // 实际请求地址
             changeOrigin: true,
             rewrite: (path) => path.replace(/^\/api/, ' '),  
     
    
           },
         },
       },*/
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTkwRERcdTY2MEVcdTk0NkJcXFxcRGVza3RvcFxcXFx2dWUzLXByb2plY3QxXFxcXHByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1OTBERFx1NjYwRVx1OTQ2QlxcXFxEZXNrdG9wXFxcXHZ1ZTMtcHJvamVjdDFcXFxccHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvJUU5JTgzJTlEJUU2JTk4JThFJUU5JTkxJUFCL0Rlc2t0b3AvdnVlMy1wcm9qZWN0MS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuLy9cdTVGMTVcdTUxNjVzdmdcdTk3MDBcdTg5ODFcdTc1MjhcdTUyMzBcdTc2ODRcdTYzRDJcdTRFRjZcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xuLy9tb2NrXHU2M0QyXHU0RUY2XHU2M0QwXHU0RjlCXHU2NUI5XHU2Q0Q1XG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICAvL1x1ODNCN1x1NTNENlx1NTQwNFx1NzlDRFx1NzNBRlx1NTg4M1x1NEUwQlx1NUJGOVx1NUU5NFx1NzY4NFx1NTNEOFx1OTFDRlxuICBsZXQgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzcmMvYXNzZXRzL2ljb25zXCIpXSxcbiAgICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcbiAgICAgIH0pLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gXCJzZXJ2ZVwiLCAvL1x1NEZERFx1OEJDMVx1NUYwMFx1NTNEMVx1OTYzNlx1NkJCNVx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOG1vY2tcdTYzQTVcdTUzRTNcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShcIi4vc3JjXCIpLCAvLyBcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1MjggQCBcdTRFRTNcdTY2RkYgc3JjXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy9zY3NzXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU3Njg0XHU0RTAwXHU0RTJBXHU5MTREXHU3RjZFXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9zdHlsZXMvdmFyaWFibGUuc2Nzc1wiOycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy9cdTRFRTNcdTc0MDZcdThERThcdTU3REZcbiAgIC8qIHNlcnZlcjoge1xuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgdGFyZ2V0OidodHRwOi8vbG9jYWxob3N0OjgwODAnLCAvLyBcdTVCOUVcdTk2NDVcdThCRjdcdTZDNDJcdTU3MzBcdTU3NDBcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcgJyksICBcbiAgXG4gXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sKi9cbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVixTQUFTLGNBQWMsZUFBZTtBQUMxWCxPQUFPLFNBQVM7QUFFaEIsT0FBTyxVQUFVO0FBRWpCLFNBQVMsNEJBQTRCO0FBRXJDLFNBQVMscUJBQXFCO0FBRTlCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFFakQsTUFBSSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUNyQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUEsUUFDMUQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLFFBQ1osY0FBYyxZQUFZO0FBQUE7QUFBQSxNQUM1QixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsT0FBTztBQUFBO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLG1CQUFtQjtBQUFBLFVBQ25CLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWFGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
