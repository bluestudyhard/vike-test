import vikeVue from "vike-vue/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.vue";

// Default config (can be overridden by pages)
// https://vike.dev/config
// vike 的这个config文件是用来配置全局的配置的，有点像main.ts

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "vike-vue 绝赞研究中",
  description: "Demo showcasing Vike",

  extends: vikeVue as typeof vikeVue,
} satisfies Config;
