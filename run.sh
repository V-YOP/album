#! /bin/sh


# 保存当前目录
original_dir=$(pwd)

# 切换到目标目录
target_dir=$HOME/code/pumpkin
cd "$target_dir"

# 在目标目录执行第一个命令
npm run upload 
npm run build

# 切换回原目录
cd "$original_dir"

# 在原目录执行第二个命令
cp -rf $target_dir/dist/* .
git add .
git commit -m 'r'
git push
