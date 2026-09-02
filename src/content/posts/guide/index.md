---
title: "撰写博客文章"
published: 2024-04-01
description: "文章结构和 frontmatter 的通用示例。"
image: "./cover.webp"
tags: ["示例", "写作", "Markdown"]
category: 指南
draft: false
---



此博客模板使用 [Astro](https://astro.build/) 构建。本文是一个简短的通用示例，展示了文章的文件结构和常用 frontmatter。完整的当前模式和 Markdown 语法维护在[内容创作指南](../../../../docs/CONTENT_AUTHORING.md)中。

## 常用 frontmatter

```yaml
---
title: "示例文章"
published: 2026-08-01
updated: 2026-08-08
description: "用于预览的简短摘要。"
image: ./cover.webp
tags: [示例, 指南]
category: 指南
draft: false
comment: true
---
```




| 属性 | 描述 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title` | 文章的标题。 |
| `published` | 文章的发布日期。 |
| `pinned` | 是否将文章置顶在文章列表顶部。 |
| `priority` | 置顶文章的优先级。数值越小优先级越高（0、1、2...）。 |
| `description` | 文章的简短描述。显示在索引页上。 |
| `image` | 文章的封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：指向 `public` 目录中的图片<br/>3. 无前缀：相对于 markdown 文件的路径 |
| `tags` | 文章的标签。 |
| `category` | 文章的分类。 |
| `licenseName` | 文章内容的许可证名称。 |
| `author` | 文章的作者。 |
| `sourceLink` | 文章内容的来源链接或参考。 |
| `draft` | 文章是否为草稿，草稿不会被显示。 |

## 文章文件的存放位置



将文章文件放在 `src/content/posts/` 目录下。你可以创建子目录来组织文章及其本地资源。

```
src/content/posts/
├── example.md
└── guides/
    ├── cover.webp
    └── index.md
```
相对路径的图片（如 `./cover.webp`）从当前文章文件所在位置解析。
