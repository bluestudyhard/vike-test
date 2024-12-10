import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({
      // redirects: {
      //   '/about-us': '/about',
      //   // Parameterized redirections
      //   '/product/@id': '/buy/@id',
      //   // Glob redirections
      //   '/admin/*': '/private/*',
      //   // External redirections
      //   '/admin/*': 'https://admin.example.org/*'
      // }
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
});
