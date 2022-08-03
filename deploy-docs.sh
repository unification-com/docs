#!/usr/bin/env sh

# abort on errors
set -e

rm -rf src/.vuepress/dist

yarn run build

echo "docs.unification.io" > src/.vuepress/dist/CNAME

cd src/.vuepress/dist

git init

git add -A

git commit -m 'deploy'

# note - git still uses master, not main
git push -f git@github.com:unification-com/docs.git master:gh-pages
