
## Setting up the Frontend

1. cd web
1. npm install
1. node --max-old-space-size=4000 ./node_modules/react-scripts/scripts/build.js
1. cd ..
1. cp -r web/build/static/ src/tranql/static
