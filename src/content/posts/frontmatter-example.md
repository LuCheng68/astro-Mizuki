---
# ============================================================
# Frontmatter 完整示例 — 包含所有可用属性
# 适用于 Astro + Mizuki 博客系统
# ============================================================

# 【必填】文章标题
title: "Frontmatter 完整示例：一篇包含全部属性的演示文章"

# 【必填】发布日期（ISO 格式）
published: 2026-09-02

# 【可选】最后更新日期（仅在内容修改时填写）
updated: 2026-09-02

# 【可选】文章摘要，显示在列表页和预览卡片中
description: "这是一篇演示文章，展示了博客系统中所有可用的 frontmatter 属性及其用法。"

# 【可选】封面图片
# - 以 http:// 或 https:// 开头：使用外部图片
# - 以 / 开头：指向 public 目录
# - 无前缀：相对于当前 md 文件
image: "https://t.alcy.cc/moemp"

# 【可选】标签数组
tags: [示例, Frontmatter, 演示, 博客, Markdown]

# 【可选】文章分类（单值）
category: 指南

# 【可选】是否为草稿（true 时不在站点中显示）
draft: false

# 【可选】是否置顶在文章列表顶部
pinned: true

# 【可选】置顶优先级（数值越小越靠前）
priority: 1

# 【可选】是否启用评论
comment: true

# 【可选】文章作者
author: "博客管理员"

# 【可选】内容许可证名称
licenseName: "CC BY-NC-SA 4.0"

# 【可选】内容来源链接
sourceLink: "https://github.com/example/blog"

# 【可选】是否启用浏览器端加密
encrypted: false

# 【可选】加密密码（需配合 encrypted: true）
password: ""

# 【可选】密码提示（需配合 encrypted: true）
passwordHint: ""

# 【可选】在首页隐藏文章正文预览（加密文章常用）
hideHomeContent: false

# 【可选】文章别名，可通过 /alias/<alias> 访问
alias: "frontmatter-full-example"
---

# Frontmatter 完整示例

:::note[关于本文]
本文是一篇**演示文章**，展示了博客系统中所有 19 个可用的 frontmatter 属性。你可以将此文件作为模板，复制后修改为自己的文章。
:::

## 为什么需要 Frontmatter？

Frontmatter 是 Markdown 文件顶部用 `---` 包围的 YAML 块，它定义了文章的元数据。博客框架会读取这些元数据来控制文章的标题、日期、分类、标签等行为。

```yaml
---
title: "文章标题"
published: 2026-01-01
---
```

## 常用属性

### title（标题）

标题是文章最重要的元数据，显示在页面顶部、列表卡片和浏览器标签中。

```yaml
title: "Markdown 教程"                # 普通标题
title: "图片画廊：语法与完整示例"       # 含冒号需加引号
```

### published / updated（日期）

`published` 是发布日期，`updated` 是最后更新日期。两者都使用 ISO 日期格式。

```yaml
published: 2026-09-02                 # 简写
published: 2024-01-11T04:40:26.381Z   # 完整 ISO 8601
updated: 2026-09-02                   # 更新日期
```

### image（封面图片）

封面图片显示在文章头部和列表预览中。支持三种路径格式：

| 格式 | 示例 | 说明 |
| --- | --- | --- |
| 相对路径 | `./cover.webp` | 相对于当前 md 文件 |
| 绝对路径 | `/images/cover.webp` | 相对于 public 目录 |
| 外部 URL | `https://example.com/img.png` | 使用网络图片 |

### tags（标签）与 category（分类）

标签是数组，可以有多个；分类是单值，一篇文章只属于一个分类。

```yaml
tags: [Markdown, 博客, 演示]    # 多个标签
category: 指南                   # 单个分类
```

## 控制属性

### draft（草稿）

设为 `true` 时，文章不会出现在站点中，适合正在编写的内容。

```yaml
draft: true   # 草稿，不发布
draft: false  # 正常发布
```

### pinned 与 priority（置顶）

置顶文章会显示在列表最上方。`priority` 控制多篇置顶文章的排序。

```yaml
pinned: true    # 置顶
priority: 0     # 最高优先级
priority: 1     # 次高
priority: 2     # 再次
```

### comment（评论）

控制是否为文章启用评论区。

```yaml
comment: true   # 启用评论（默认）
comment: false  # 关闭评论
```

## 作者与来源

### author（作者）

```yaml
author: "博客管理员"
author: "emn178"
```

### licenseName（许可证）

声明文章内容的使用许可。

```yaml
licenseName: "Unlicensed"            # 无许可证
licenseName: "CC BY-NC-SA 4.0"      # 知识共享许可
licenseName: "MIT"                   # MIT 许可
```

### sourceLink（来源链接）

标注内容的原始来源或参考地址。

```yaml
sourceLink: "https://github.com/emn178/markdown"
```

## 加密功能

:::tip[加密文章]
当 `encrypted: true` 时，文章内容会在浏览器端加密。访问者需要输入密码才能解密查看正文。
:::

```yaml
encrypted: true                    # 启用加密
password: "123456"                 # 访问密码
passwordHint: "密码是 123456"      # 密码提示
hideHomeContent: true              # 馐藏正文预览
```

## 别名

`alias` 允许通过短链接访问文章，方便分享。

```yaml
alias: "my-special-article"
# 访问地址：/alias/my-special-article
```

## 完整属性速查

| 属性 | 类型 | 必填 | 默认 | 一句话说明 |
| --- | --- | --- | --- | --- |
| `title` | string | ✅ | — | 文章标题 |
| `published` | string | ✅ | — | 发布日期 |
| `updated` | string | ❌ | — | 更新日期 |
| `description` | string | ❌ | — | 摘要 |
| `image` | string | ❌ | — | 封面图片 |
| `tags` | string[] | ❌ | `[]` | 标签数组 |
| `category` | string | ❌ | — | 分类 |
| `draft` | boolean | ❌ | `false` | 是否草稿 |
| `pinned` | boolean | ❌ | `false` | 是否置顶 |
| `priority` | number | ❌ | — | 置顶优先级 |
| `comment` | boolean | ❌ | `true` | 是否启用评论 |
| `author` | string | ❌ | — | 作者 |
| `licenseName` | string | ❌ | — | 许可证 |
| `sourceLink` | string | ❌ | — | 来源链接 |
| `encrypted` | boolean | ❌ | `false` | 是否加密 |
| `password` | string | ❌ | — | 加密密码 |
| `passwordHint` | string | ❌ | — | 密码提示 |
| `hideHomeContent` | boolean | ❌ | `false` | 隐藏文章摘要 |
| `alias` | string | ❌ | — | 文章别名 |

---

*本文最后更新于 2026 年 9 月 2 日。*
