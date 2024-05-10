import http from 'node:http'

const server = http.createServer((req, res) => {
const { method, url } = req

if (method == 'GET' && url == '/users') {
    return res.end('Listagem de usuário')
}

    return res.end('Hello Dnwest')
})

server.listen(3333)
