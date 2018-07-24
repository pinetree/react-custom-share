webpackJsonp([0xb0bdcde373c7],{369:function(n,s){n.exports={data:{page:{id:"C:/Users/Greg/_dev/mynpms/react-custom-share/docs/content/pages/4--share-block-aside/index.md absPath of file >>> MarkdownRemark",html:'<h2>Demo</h2>\n<p><a href="../live-share-block-aside">Live demo</a></p>\n<h2>Description</h2>\n<p><code class="language-text">ShareBlockAside</code> is a built-in, ready-to-use ‘share’ block component.</p>\n<p>It renders two block of share buttons, one is static placed inside/under the content, the second one is floating aside.</p>\n<p>The floating buttons appear only when there is a free space aside.</p>\n<p>The components script automatically hide the floating block whenever the static block is visible in the viewport. Set the <code class="language-text">pageHeaderSelector</code> prop to turn on similar behavior for the title of the web page.</p>\n<h2>Usage</h2>\n<p>Let’s create a share block using <code class="language-text">ShareBlockAside</code> with buttons for five networks.</p>\n<p><strong>Step 1.</strong> Import the icons. As usual, we are going to use icons provided by <a href="https://github.com/react-icons/react-icons">react-icons</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> FaTwitter <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/twitter"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaFacebook <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/facebook"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaGooglePlus <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/google-plus"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaEnvelope <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/envelope"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaPinterest <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/pinterest"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaLinkedin <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/linkedin"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Step 2.</strong> Import the <code class="language-text">react-custom-share</code> components: a button and a block. Notice that we will use <code class="language-text">ShareButtonRectangle</code> as a button component to render the items of the block.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ShareButtonRectangle<span class="token punctuation">,</span> ShareBlockAside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-custom-share"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Step 3.</strong> Prepare an object with props for the <code class="language-text">ShareBlockAside</code> component. The <code class="language-text">url</code>, <code class="language-text">button</code> and <code class="language-text">buttons</code> are required props.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> shareBlockProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">"https://github.com/greglobinski/react-custom-share"</span><span class="token punctuation">,</span>\n  button<span class="token punctuation">:</span> ShareButtonRectangle<span class="token punctuation">,</span>\n  buttons<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Twitter"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaTwitter <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Facebook"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaFacebook <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"GooglePlus"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaGooglePlus <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Email"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaEnvelope <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      network<span class="token punctuation">:</span> <span class="token string">"Pinterest"</span><span class="token punctuation">,</span>\n      icon<span class="token punctuation">:</span> FaPinterest<span class="token punctuation">,</span>\n      media<span class="token punctuation">:</span>\n        <span class="token string">"https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  text<span class="token punctuation">:</span> <span class="token string">"Give it a try - react-custom-share component"</span><span class="token punctuation">,</span>\n  longtext<span class="token punctuation">:</span>\n    <span class="token string">"Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."</span><span class="token punctuation">,</span>\n  header<span class="token punctuation">:</span> <span class="token string">"Share it"</span><span class="token punctuation">,</span>\n  pageHeaderSelector<span class="token punctuation">:</span> <span class="token string">".header"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Take a look at the new prop <code class="language-text">pageHeaderSelector</code>. It’s a distinctive prop of <code class="language-text">ShareBlockAside</code>. If set the floating buttons will be hidden when the page header is visible in the viewport.</p>\n<p><strong>Step 4.</strong> Add <code class="language-text">ShareBlockAside</code> to your app. Remember to pass all prepared props to the component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">&lt;</span>ShareBlockAside <span class="token punctuation">{</span><span class="token operator">...</span>shareBlockProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<p><strong>Full code</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaTwitter <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/twitter"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaFacebook <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/facebook"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaGooglePlus <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/google-plus"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaEnvelope <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/envelope"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaPinterest <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/pinterest"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> FaLinkedin <span class="token keyword">from</span> <span class="token string">"react-icons/lib/fa/linkedin"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ShareButton<span class="token punctuation">,</span> ShareBlockAside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-custom-share"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> shareBlockProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"https://github.com/greglobinski/react-custom-share"</span><span class="token punctuation">,</span>\n    button<span class="token punctuation">:</span> ShareButtonRectangle<span class="token punctuation">,</span>\n    buttons<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Twitter"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaTwitter <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Facebook"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaFacebook <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"GooglePlus"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaGooglePlus <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Email"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaEnvelope <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        network<span class="token punctuation">:</span> <span class="token string">"Pinterest"</span><span class="token punctuation">,</span>\n        icon<span class="token punctuation">:</span> FaPinterest<span class="token punctuation">,</span>\n        media<span class="token punctuation">:</span>\n          <span class="token string">"https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> network<span class="token punctuation">:</span> <span class="token string">"Linkedin"</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> FaLinkedin <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">"Give it a try - react-custom-share component"</span><span class="token punctuation">,</span>\n    longtext<span class="token punctuation">:</span>\n      <span class="token string">"Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."</span><span class="token punctuation">,</span>\n    header<span class="token punctuation">:</span> <span class="token string">"Share it"</span><span class="token punctuation">,</span>\n    pageHeaderSelector<span class="token punctuation">:</span> <span class="token string">".header"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ShareBlockAside <span class="token punctuation">{</span><span class="token operator">...</span>shareBlockProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>ShareBlockStandard’s props</h2>\n<ul>\n<li><strong>header</strong> - the inline share block’s title | <em>string</em> | optional</li>\n<li><strong>debounce</strong>: wait option for the <code class="language-text">debounce</code> method applied to <code class="language-text">window.resize</code> event | number <em>(milliseconds)</em> | optional | default: 250</li>\n<li><strong>pageHeaderSelector</strong>: selector for <code class="language-text">document.querySelector()</code> pointing the header of the web page | <em>string</em> | optional</li>\n<li>other props the same as <code class="language-text">ShareBlock</code></li>\n</ul>',frontmatter:{title:"<ShareBlockAside />"}}},pathContext:{slug:"/share-block-aside/"}}}});
//# sourceMappingURL=path---share-block-aside-3a9f917a3b9f44cd2201.js.map