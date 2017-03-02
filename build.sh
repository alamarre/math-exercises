#npm install -g react-tools
#jsx --extension jsx --watch src/jsx src/js/ui

rm -rf build
mkdir -p build/js
mkdir -p build/css
browserify -t [ babelify --presets [ react ] ] -t [require-globify]  src/js/app.js -o build/js/app.js
cp -f src/index.html build/index.html
cp -f src/css/style.css build/css/style.css
