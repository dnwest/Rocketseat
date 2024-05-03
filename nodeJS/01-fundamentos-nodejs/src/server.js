import http from 'node:http'

const server = http.createServer((req, res) => {
    return res.end('Hello Dnwest 1')
})

server.listen(3333)