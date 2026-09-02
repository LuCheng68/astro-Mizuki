---
title: "图片画廊网格：语法与完整示例"
published: 2026-07-13
description: "图片画廊网格语法、参数、裁剪、响应式行为、说明文字和灯箱导航的完整指南。"
tags: [Markdown, 画廊, 图片网格, 演示]
category: "示例"
draft: false
---

`:::grid` 是博客的图片画廊容器指令。它将普通 Markdown 图片排列在响应式网格中，保持一致的宽高比，并自动启用灯箱查看。可用于文章图片、截图、作品集或小型相册。

同一画廊中的图片使用相同的卡片比例。默认情况下，居中裁剪填充每张卡片，保持每行整齐；点击图片可在灯箱中查看完整的原始图片。每个画廊都有自己的灯箱组，不会与文章中的其他图片混合。

> 本文既是功能文档，也是视觉测试页面。请在桌面端、平板端和移动端宽度下查看示例，然后点击任意图片验证灯箱分组。

## 最小语法

在 `:::grid` 和闭合的 `:::` 之间直接编写 Markdown 图片：

````markdown
:::grid
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)
:::
````

每张图片必须独占一段，图片之间留一个空行。画廊中只放图片；段落、列表和代码块请写在容器外部。

以下是最小语法的结果。不带参数时，网格默认使用三列、`16/10` 比例和 `cover` 模式。

:::grid
![最小语法结果：第一张图片](/images/demos/image-grid-demo/landscape-1.webp)

![最小语法结果：第二张图片](/images/demos/image-grid-demo/landscape-2.webp)
:::

## 参数一览

在开指令后的花括号中编写所有参数：`:::grid{parameter="value"}`。

| 参数 | 允许的值 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `columns` | `1` 到 `6` 的整数 | `3` | 桌面端每行的列数。无效值回退为 `3`。 |
| `aspect` | 正数比例，如 `16/9`、`3/4` 或 `1/1` | `16/10` | 显示的卡片比例，非原始图片比例。 |
| `fit` | `cover`、`contain` | `cover` | 图片适配模式。`cover` 裁剪填充；`contain` 保留完整图片，可能留白。 |

完整示例：

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张图片](./image-1.webp "可选说明文字")

![第二张图片](./image-2.webp "可选说明文字")

![第三张图片](./image-3.webp "可选说明文字")
:::
````

以下结果使用上述三列横屏语法。对比卡片比例、列数，以及 title 优先于 alt 文本作为说明文字的方式：

:::grid{columns="3" aspect="16/9" fit="cover"}
![参数示例：第一张横屏图片](/images/demos/image-grid-demo/landscape-1.webp "横屏说明文字 1")

![参数示例：第二张横屏图片](/images/demos/image-grid-demo/landscape-2.webp "横屏说明文字 2")

![参数示例：第三张横屏图片](/images/demos/image-grid-demo/landscape-3.webp "横屏说明文字 3")
:::

## 说明文字与替代文本

图片的 alt 文本既用作无障碍替代文本，也用作默认说明文字。当图片有可选的 title 属性时，title 会替代 alt 文本作为说明文字：

```markdown
![用于无障碍的文本](./image.webp "图片下方显示的说明文字")
```

在同一行中，说明文字对齐到每张卡片的底部。换行的说明文字不会使其他说明文字浮动到不同的高度。比例文本如 `3:4` 和 `16:9` 可以直接在正文、标题和替代文本中书写，无需转义。

以下示例展示了默认的 alt 文本说明文字、显式的 title 说明文字，以及较长说明文字的底部对齐：

:::grid{columns="3" aspect="1/1"}
![此图片没有 title，因此 alt 文本作为说明文字](/images/demos/image-grid-demo/square-1.webp)

![带有无障碍 alt 文本的第二张正方形图片](/images/demos/image-grid-demo/square-2.webp "此 title 显示为说明文字")

![3:4 海报的无障碍描述](/images/demos/image-grid-demo/square-3.webp "这是一段较长的说明文字，用于验证每段说明文字在换行时仍保持底部对齐")
:::

## 布局与裁剪

桌面端布局使用 `columns` 指定的列数。低于 `768px` 时，网格最多使用两列；低于 `480px` 时，切换为单列。卡片包装器固定 `aspect` 比例并裁剪圆角，图片填充卡片且不带主题默认的图片边距。

- 选择 `cover`：推荐默认值。图片从中心裁剪以填充卡片，使画廊看起来一致。
- 选择 `contain`：显示完整的原始图片，不裁剪。当其比例与卡片不同时，主题背景可见；用于不能裁剪的图片。
- 若要保留完整图片且不留白，将 `aspect` 设置为接近原始图片比例，或将图片单独放在一个网格中。

以下示例将相同的竖屏图片放在 `16/9` 卡片中，分别使用 `cover` 和 `contain`。第一个裁剪了图片；第二个保留完整图片并留出背景空间。

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![图片描述](./image-1.webp "可选说明文字")

![图片描述](./image-2.webp "可选说明文字")
:::

:::grid{columns="3" aspect="16/9" fit="contain"}
![图片描述](./image-1.webp "可选说明文字")

![图片描述](./image-2.webp "可选说明文字")
:::
````

:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张 cover 结果](/images/demos/image-grid-demo/default-portrait-1.webp "Cover：居中裁剪")

![第二张 cover 结果](/images/demos/image-grid-demo/default-portrait-2.webp "Cover：填充卡片")

![第三张 cover 结果](/images/demos/image-grid-demo/default-portrait-3.webp "Cover：更一致的布局")
:::

:::grid{columns="3" aspect="16/9" fit="contain"}
![第一张 contain 结果](/images/demos/image-grid-demo/default-portrait-1.webp "Contain：保留完整原始图片")

![第二张 contain 结果](/images/demos/image-grid-demo/default-portrait-2.webp "Contain：可能出现空白区域")

![第三张 contain 结果](/images/demos/image-grid-demo/default-portrait-3.webp "Contain：适合边缘细节")
:::

## 默认配置

不带属性时，默认为三列、`16/10` 比例和 `cover` 裁剪。以下三张竖屏图片验证默认裁剪和说明文字。

````markdown
:::grid
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)
:::
````

:::grid
![默认配置：竖屏图片一](/images/demos/image-grid-demo/default-portrait-1.webp)

![默认配置：竖屏图片二](/images/demos/image-grid-demo/default-portrait-2.webp)

![默认配置：竖屏图片三](/images/demos/image-grid-demo/default-portrait-3.webp)
:::

## 三列竖屏：3:4

使用 `aspect="3/4"`，三张竖屏图片填充比例一致的垂直卡片。如果原始图片比例不同，`cover` 会从中心裁剪其边缘。

````markdown
:::grid{columns="3" aspect="3/4"}
![竖屏图片描述](./portrait-1.webp)

![竖屏图片描述](./portrait-2.webp)

![竖屏图片描述](./portrait-3.webp)
:::
````

:::grid{columns="3" aspect="3/4"}
![3:4 测试图片一](/images/demos/image-grid-demo/default-portrait-1.webp "竖屏 1")

![3:4 测试图片二](/images/demos/image-grid-demo/default-portrait-2.webp "竖屏 2")

![3:4 测试图片三](/images/demos/image-grid-demo/default-portrait-3.webp "竖屏 3")
:::

## 三列横屏：16:9

这组图片展示了常见的视频封面比例在三列布局中的效果。当横屏图片接近卡片比例时，裁剪量很小。

````markdown
:::grid{columns="3" aspect="16/9"}
![横屏图片描述](./landscape-1.webp)

![横屏图片描述](./landscape-2.webp)

![横屏图片描述](./landscape-3.webp)
:::
````

:::grid{columns="3" aspect="16/9"}
![16:9 测试图片一](/images/demos/image-grid-demo/feature-landscape-1.webp)

![16:9 测试图片二](/images/demos/image-grid-demo/feature-landscape-2.webp)

![16:9 测试图片三](/images/demos/image-grid-demo/feature-landscape-3.webp)
:::

## 两列正方形：1:1

当需要更大的预览卡片时，两列效果很好。第三张图片移到下一行。最后一行保持其网格轨道宽度，而不是拉伸图片来填充行。

````markdown
:::grid{columns="2" aspect="1/1"}
![正方形图片描述](./square-1.webp)

![正方形图片描述](./square-2.webp)

![正方形图片描述](./square-3.webp)
:::
````

:::grid{columns="2" aspect="1/1"}
![1:1 测试图片一](/images/demos/image-grid-demo/mixed-square-1.webp)

![1:1 测试图片二](/images/demos/image-grid-demo/mixed-square-2.webp)

![1:1 测试图片三](/images/demos/image-grid-demo/mixed-square-3.webp)
:::

## 四列 `contain` 模式

`fit="contain"` 不裁剪原始图片。当图片比例与卡片比例不同时，主题背景可见。这是预期行为，不是布局问题。同时也验证了四列网格和独立灯箱组不会互相干扰。

````markdown
:::grid{columns="4" aspect="16/9" fit="contain"}
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)
:::
````

:::grid{columns="4" aspect="16/9" fit="contain"}
![Contain：竖屏图片一](/images/demos/image-grid-demo/default-portrait-1.webp)

![Contain：竖屏图片二](/images/demos/image-grid-demo/default-portrait-2.webp)

![Contain：竖屏图片三](/images/demos/image-grid-demo/default-portrait-3.webp)
:::

## 单列详情图片

单列适合需要较大阅读尺寸的图片。在桌面端、平板端和移动端都保持单列，原始图片仍可在灯箱中查看。

````markdown
:::grid{columns="1" aspect="16/9"}
![图片描述](./detail.webp)
:::
````

:::grid{columns="1" aspect="16/9"}
![单列测试图片](/images/demos/image-grid-demo/feature-landscape-1.webp)
:::

## 稀疏五行列

五列验证了更高的支持列数。只有三张图片时，最后一行保持左对齐，而不是拉伸图片。

````markdown
:::grid{columns="5" aspect="1/1"}
![缩略图描述](./thumb-1.webp)

![缩略图描述](./thumb-2.webp)

![缩略图描述](./thumb-3.webp)
:::
````

:::grid{columns="5" aspect="1/1"}
![五列测试图片一](/images/demos/image-grid-demo/mixed-square-1.webp)

![五列测试图片二](/images/demos/image-grid-demo/mixed-square-2.webp)

![五列测试图片三](/images/demos/image-grid-demo/mixed-square-3.webp)
:::

## 六列混合图片

六列是当前的最大列数。混合横屏和竖屏图片可验证 `cover` 裁剪、窄卡片上的说明文字以及密集的桌面端布局。对于可读的文章内容，通常两到四列更合适。

````markdown
:::grid{columns="6" aspect="1/1"}
![图片描述](./image-1.webp)

![图片描述](./image-2.webp)

![图片描述](./image-3.webp)

![图片描述](./image-4.webp)

![图片描述](./image-5.webp)

![图片描述](./image-6.webp)
:::
````

:::grid{columns="6" aspect="1/1"}
![六列测试图片一](/images/demos/image-grid-demo/default-portrait-1.webp)

![六列测试图片二](/images/demos/image-grid-demo/default-portrait-2.webp)

![六列测试图片三](/images/demos/image-grid-demo/default-portrait-3.webp)

![六列测试图片四](/images/demos/image-grid-demo/feature-landscape-1.webp)

![六列测试图片五](/images/demos/image-grid-demo/feature-landscape-2.webp)

![六列测试图片六](/images/demos/image-grid-demo/feature-landscape-3.webp)
:::

## 四列正方形：1:1

四张相同比例的正方形图片是典型的四列布局。桌面端一行显示全部四张；平板端折叠为两列，移动端为单列。

````markdown
:::grid{columns="4" aspect="1/1"}
![正方形图片描述](./square-1.webp)

![正方形图片描述](./square-2.webp)

![正方形图片描述](./square-3.webp)

![正方形图片描述](./square-4.webp)
:::
````

:::grid{columns="4" aspect="1/1"}
![正方形图片一](/images/demos/image-grid-demo/square-1.webp)

![正方形图片二](/images/demos/image-grid-demo/square-2.webp)

![正方形图片三](/images/demos/image-grid-demo/square-3.webp)

![正方形图片四](/images/demos/image-grid-demo/square-4.webp)
:::

## 六列横屏：16:9

六列横屏适用于缩略图预览、作品集和截图索引。即使原始比例略有不同，`cover` 也能一致地填充每张 `16/9` 卡片。

````markdown
:::grid{columns="6" aspect="16/9"}
![横屏图片描述](./landscape-1.webp)

![横屏图片描述](./landscape-2.webp)

![横屏图片描述](./landscape-3.webp)

![横屏图片描述](./landscape-4.webp)

![横屏图片描述](./landscape-5.webp)

![横屏图片描述](./landscape-6.webp)
:::
````

:::grid{columns="6" aspect="16/9"}
![横屏图片一](/images/demos/image-grid-demo/landscape-1.webp)

![横屏图片二](/images/demos/image-grid-demo/landscape-2.webp)

![横屏图片三](/images/demos/image-grid-demo/landscape-3.webp)

![横屏图片四](/images/demos/image-grid-demo/landscape-4.webp)

![横屏图片五](/images/demos/image-grid-demo/landscape-5.webp)

![横屏图片六](/images/demos/image-grid-demo/landscape-6.webp)
:::

## 三列竖屏：3:4

这组六张竖屏图片展示了人物、海报或移动端截图的常见布局。图片形成两行三列，说明文字底部对齐。

````markdown
:::grid{columns="3" aspect="3/4"}
![竖屏图片描述](./portrait-1.webp)

![竖屏图片描述](./portrait-2.webp)

![竖屏图片描述](./portrait-3.webp)

![竖屏图片描述](./portrait-4.webp)

![竖屏图片描述](./portrait-5.webp)

![竖屏图片描述](./portrait-6.webp)
:::
````

:::grid{columns="3" aspect="3/4"}
![竖屏图片一](/images/demos/image-grid-demo/portrait-1.webp)

![竖屏图片二](/images/demos/image-grid-demo/portrait-2.webp)

![竖屏图片三](/images/demos/image-grid-demo/portrait-3.webp)

![竖屏图片四](/images/demos/image-grid-demo/portrait-4.webp)

![竖屏图片五](/images/demos/image-grid-demo/portrait-5.webp)

![竖屏图片六](/images/demos/image-grid-demo/portrait-6.webp)
:::

## 边缘关键内容：`cover` 与灯箱

这些图片的边缘附近包含重要文本或细节。`cover` 保持网格整齐，但可能会裁剪这些边缘；点击图片可在灯箱中查看未裁剪的原始图片。对边缘敏感的图片使用清晰的说明文字，或在下方使用 `contain`。

````markdown
:::grid{columns="3" aspect="16/9" fit="cover"}
![边缘关键内容](./critical-1.webp "打开灯箱查看完整的边缘内容")

![边缘关键内容](./critical-2.webp "打开灯箱查看完整的边缘内容")

![边缘关键内容](./critical-3.webp "打开灯箱查看完整的边缘内容")
:::
````

:::grid{columns="3" aspect="16/9" fit="cover"}
![第一张边缘关键图片](/images/demos/image-grid-demo/critical-1.webp "打开灯箱查看完整的边缘内容")

![第二张边缘关键图片](/images/demos/image-grid-demo/critical-2.webp "打开灯箱查看完整的边缘内容")

![第三张边缘关键图片](/images/demos/image-grid-demo/critical-3.webp "打开灯箱查看完整的边缘内容")
:::

## 极端比例与 `contain`

对于横幅、长截图和其他极端图片比例，`contain` 显示完整的原始图片。与 `cover` 不同，它可能会留出主题背景空间，但从不裁剪内容。

````markdown
:::grid{columns="3" aspect="16/9" fit="contain"}
![完整截图描述](./wide-1.webp)

![完整截图描述](./wide-2.webp)

![完整截图描述](./wide-3.webp)
:::
````

:::grid{columns="3" aspect="16/9" fit="contain"}
![极端比例图片一](/images/demos/image-grid-demo/extreme-1.webp)

![极端比例图片二](/images/demos/image-grid-demo/extreme-2.webp)

![极端比例图片三](/images/demos/image-grid-demo/extreme-3.webp)
:::

## 透明图片

透明图片会显示卡片的主题背景。这个单列 `contain` 示例便于检查透明区域、原始边缘和灯箱行为。

````markdown
:::grid{columns="1" aspect="16/9" fit="contain"}
![透明图片描述](./transparent.webp)
:::
````

:::grid{columns="1" aspect="16/9" fit="contain"}
![透明背景测试图片](/images/demos/image-grid-demo/transparent-1.webp)
:::

## 灯箱导航

点击网格中的任意图片打开 Fancybox 灯箱。在灯箱中可以缩放、旋转、全屏查看、查看缩略图，并使用方向键导航。导航仅限于当前 `:::grid` 容器：例如，点击"16:9 测试图片一"只会打开该部分中的其他两张横屏图片。

同一篇文章中的普通 Markdown 图片继续单独处理；它们不会添加到任何网格画廊中。

## 检查清单

1. 每个网格中的图片尺寸一致，说明文字位于卡片下方。
2. 图片在悬停时轻微缩放；点击后可缩放、旋转和键盘导航。
3. 点击"16:9 测试图片一"后，灯箱只能浏览该部分中的其他两张横屏图片。
4. 低于 768px 时，网格最多使用两列；低于 480px 时，使用单列。
5. "四列 `contain` 模式"中的竖屏图片完全可见，有空白区域且无裁剪。
6. 五列和六列网格在宽屏上保留指定的列数，然后根据响应式规则折叠为两列或单列。
