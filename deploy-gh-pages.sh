# A script to generate Jekyll _site and push it to the gh-pages branch

version=($(git rev-parse --short HEAD))

# Remove the current content of the _site folder
rm -rf _site

# Get the latest commit in main branch
commit=($(git log -n 1 --pretty='format:%C(auto)%h (%s, %ad)'))
echo "[Current commit]: ${commit}."

# Clone remote _site branch 
git clone -b gh-pages `git config remote.origin.url` _site

# Build Production _site
JEKYLL_ENV=production bundle exec jekyll build

# Switch directory to _site
cd _site

# Define the commit message
message="Deploying commit ($commit) to gh-pages"
echo "[Message #]: ${message}."

# Add new or changed files in _site working directory to the Git staging area.
git add .

# Commit the changes to the to gh-pages branch
git commit -m "$message" > /dev/null 2>&1

# Push the changes to the to gh-pages branch
git push > /dev/null 2>&1
if [ $? = 0 ]; then
  echo "Deployment successful of v1.0.$version to gh-pages"
else
  echo "Deployment failure of v1.0.$version to gh-pages"
fi
