installation process:
initialize npm -> package.json 
comand: npm init

initialize git repo
comand: git init

commit project to github
git commit -m "first commit"
git remote add origin https://github.com/maverick8472/chf-server.git
git push -f origin master


install npm
comand: npm i

install dependecies
edit package.json file with:
,
  "dependencies": {
    "bcrypt": "^3.0.0",
    "config": "^2.0.1",
    "cors": "^2.8.4",
    "joi": "^13.6.0",
    "jsonwebtoken": "^8.3.0",
    "lodash": "^4.17.10",
    "mongoose": "^5.2.8"
  }

comand: npm i

create new file .gitignore
edit: node_modules