#!/bin/bash
# 一键提交并推送 Git 仓库（自动执行 pnpm build）

set -e  # 任何命令出错立即退出

# 检查是否提供了提交信息
if [ -z "$1" ]; then
    echo "❌ 错误：请提供提交信息。"
    echo "用法：./git_push.sh \"你的提交信息\""
    exit 1
fi

COMMIT_MSG="$1"

echo "🔨 开始构建项目（pnpm build）..."
pnpm build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，停止提交。"
    exit 1
fi

echo "📦 添加所有变更到暂存区..."
git add .

echo "✏️ 提交变更（信息：$COMMIT_MSG）..."
git commit -m "$COMMIT_MSG"

echo "🚀 推送到远程仓库..."
git push

echo "✅ 全部完成！"