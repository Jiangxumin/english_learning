# Journey to the West Reader — 项目规范

## 项目结构

```
my_book/
├── docs/
│   ├── book_01.mdx ~ book_18.mdx    # 18 本书，每本 6 章
├── src/
│   ├── data/vocab.js                 # 所有词汇注释数据（唯一数据源）
│   └── theme/
│       ├── Vocab.jsx                 # 行内注释组件（tooltip）
│       └── VocabList.jsx             # 页面底部注释卡片列表
├── docusaurus.config.js
├── sidebars.js
└── CLAUDE.md                         # 本文件
```

---

## 词汇注释规范

### 核心原则

1. **数据与视图分离**：注释数据只存在于 `src/data/vocab.js`，MDX 原文不承载任何释义
2. **原文最小侵入**：MDX 中只添加 `<Vocab word="xxx" />`，不添加 phonetic / definition 等属性
3. **一词一条目**：同一个词在同一本书中多次出现，只写一条数据，MDX 中每处都标注

### 添加注释的步骤

每次添加词汇注释，必须完成以下两步：

**第一步：在 `src/data/vocab.js` 中添加词条**

```js
book_01: [
  // ... 已有条目
  {
    word: 'furious',              // 原文中的精确拼写（含时态/复数等）
    phonetic: '/ˈfjʊəriəs/',     // 国际音标
    brief: '狂怒的，暴怒的',       // 一句话简短释义（显示在 tooltip）
    pos: 'adjective',             // 词性标注
    detail: '此处描述...',         // 结合上下文的详细解析
    examples: [                   // 2-3 个例句，附中文翻译
      'He was furious at the decision.（他对这个决定暴怒。）',
    ],
    synonyms: [                   // 近义词对比（可选）
      { word: 'angry', note: '一般生气，程度较轻' },
      { word: 'enraged', note: '极度愤怒，程度比 furious 更强' },
    ],
  },
],
```

**第二步：在 MDX 原文中标记该词**

找到原文中该词出现的位置，替换为：

```
原: Wukong was furious.
改: Wukong was <Vocab word="furious" />.
```

### 注意事项

- **NBSP 字符**：原文含大量 `\xa0`（不间断空格），替换时必须匹配。建议用 Python 脚本处理而非手动编辑
- **已有时态**：`word` 字段写原文中实际出现的拼写（如 `shrugged` 而非 `shrug`），在 `detail` 中说明原形
- **每个需要注释的 book 必须有 import**：MDX 文件头部需要：
  ```mdx
  import Vocab from '@theme/Vocab';
  import VocabList from '@theme/VocabList';
  ```
  文件末尾需要：
  ```mdx
  <VocabList book="book_XX" />
  ```

### 词汇选择标准

优先标注以下类型的词：

| 优先级 | 类型 | 示例 |
|--------|------|------|
| 高 | 动词/短语动词（尤其非字面义） | shrugged off, shot out |
| 高 | 形容词/副词（描述性） | enormous, powerful, fiercely |
| 中 | 身体语言/文化隐含义 | shrugged, folded his arms |
| 中 | 连接词/逻辑关系 | however, suddenly, eventually |
| 低 | 名词（除非有文化含义） | gibbon, bodhisattva |

### 数据格式字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `word` | 是 | 原文精确拼写 |
| `phonetic` | 是 | 国际音标，用 `/ /` 包裹 |
| `brief` | 是 | 一句话中文释义（tooltip 显示） |
| `pos` | 是 | 词性：noun / verb / adjective / adverb / phrase 等 |
| `detail` | 是 | 结合本书上下文的解析，说明该词在场景中的含义 |
| `examples` | 建议 | 2-3 个例句 + 中文翻译 |
| `synonyms` | 可选 | 近义词对比，每项含 `word` 和 `note` |

### 释义写作风格

- `brief`：纯中文，不加括号注释，如 `"狂怒的，暴怒的"`
- `detail`：用中文解析，先说该词的基本含义，再结合上下文说明语境，可引用原文片段
- `examples`：英文例句 + `（中文翻译）`，括号为全角中文括号
- `synonyms`：每个近义词用一句话说明它与主词的区别

---

## Docusaurus 开发

```bash
npm start          # 开发服务器 http://localhost:3000
npx docusaurus build  # 生产构建 → build/
```

### 章节标题格式

所有章节标题使用 `##` 二级标题：

```mdx
## Journey to the West 1: The Monkey
```

这样 Docusaurus 会自动生成右侧 TOC，方便章节跳转。

### 文件命名与路由

- 文件：`docs/book_01.mdx` → 路由：`/book_01`
- sidebar 配置在 `sidebars.js`，按 `book_01` ~ `book_18` 排列
- frontmatter 格式：
  ```yaml
  ---
  sidebar_position: N
  title: "Book N: First Chapter — Last Chapter (Ch.X-Y)"
  ---
  ```
