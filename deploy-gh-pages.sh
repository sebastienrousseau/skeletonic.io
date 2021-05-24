
rm -rf _site

# if you're using Github Pages as andimiya.github.io, replace 'gh-pages' below with 'master'
git clone -b gh-pages `git config remote.origin.url` _site
JEKYLL_ENV=production bundle exec jekyll build
cd _site

git add .
git commit -m "Scripted build to gh-pages"
git push
