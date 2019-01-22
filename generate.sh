rm -rf ./dist
mkdir dist
find ./src -type f -exec yarn start {} \;