# First multi-container application

## Frontend (index.html)

## Backend (app.js)


learn:
- Promise 
- .then
- cors
    - app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})
- headers