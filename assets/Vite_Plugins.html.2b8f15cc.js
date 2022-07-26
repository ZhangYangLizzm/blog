import{_ as n,o as s,c as a,d as e}from"./app.34258611.js";const i={},t=e(`<h1 id="vite-plugins" tabindex="-1"><a class="header-anchor" href="#vite-plugins" aria-hidden="true">#</a> Vite Plugins</h1><h2 id="\u56FE\u7247\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u538B\u7F29" aria-hidden="true">#</a> \u56FE\u7247\u538B\u7F29</h2><p><code>yarn add vite-plugin-imagemin</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//vite.config.ts</span>
<span class="token keyword">import</span> imagemin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-imagemin&#39;</span>

plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">imagemin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6253\u5305\u6587\u4EF6\u5927\u5C0F\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u6587\u4EF6\u5927\u5C0F\u53EF\u89C6\u5316" aria-hidden="true">#</a> \u6253\u5305\u6587\u4EF6\u5927\u5C0F\u53EF\u89C6\u5316</h2><p><code>yarn add rollup-plugin-visualizer</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//vite.config.ts</span>
<span class="token keyword">import</span> visualizer <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-visualizer&#39;</span>

plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5305\u4F1A\u751F\u6210<code>stats.html</code>\u6253\u5F00\u5373\u53EF</p><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> https</h2><p>\u5BF9\u57FA\u672C\u4F7F\u7528\u7684\u914D\u7F6E\u9700\u6C42\u6765\u8BF4\uFF0C\u53EF\u4EE5\u6DFB\u52A0 @vitejs/plugin-basic-ssl \u5230\u9879\u76EE\u63D2\u4EF6\u4E2D\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA\u548C\u7F13\u5B58\u4E00\u4E2A\u81EA\u7B7E\u540D\u7684\u8BC1\u4E66\u3002</p><p><code>yarn add @vitejs/plugin-basic-ssl</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>   <span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> basicSsl <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-basic-ssl&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">basicSsl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[t];function l(c,o){return s(),a("div",null,p)}var r=n(i,[["render",l],["__file","Vite_Plugins.html.vue"]]);export{r as default};
