import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('성공!')
})

app.get('/movies', async (req, res) => {
    const resfetch = await fetch('https://yts.mx/api/v2/list_movies.json?limit=5&genre=comedy')
    const result = await resfetch.json()

    //res.send(result)
    const movies = result.data.movies

    let html = '<table>'
    
    movies.map(m => {
        html += `<tr><td>${m.title}</td><td><img src='${m.medium_cover_image}'/></td></tr>`
    })
    
    html += '</table>'
    res.send(html)
})

app.listen(port, () => {
	console.log('서버 실행됨')
})