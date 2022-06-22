# Nuworks PH Clone

## Installation

- Bootstap React
- Node SASS
- React Router Dom
- React Slick
- Axios


### Bootstap React
`npm install react-bootstrap bootstrap`

### Node SASS
`pm install node-sass`

### React Router Dom
`npm install react-router@6 react-router-dom@6`

### React Slick
`npm install react-slick --save`
`npm install slick-carousel --save`

### Axios
`npm install axios`


## Git Commands

`git flow init`

`git push origin`
`git push --set-upstream origin develop`

- Create feature branch
`$ git flow feature start feature_branch`

`git add .`
`git commit -m ""`

- Finish feature branch (merging back to develop)
`git flow feature finish feature_branch`

`git push origin`

- Create release branch 
`git flow release start '0.1'`

`git push origin`
`git push --set-upstream origin release/0.1`

`git add .`
`git commit -m ""`

`git push origin`

- Finish release branch (merging to develop and main)
`git flow release finish '0.1'`

`git push origin`
