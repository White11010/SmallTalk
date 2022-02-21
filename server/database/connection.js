const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: 'dashadom74',
    host: "localhost",
    port: 5432,
    database: "chat_postgres"
})
if (pool){
    console.log('Postgres - Ok')
}else {
    console.log('Ошибка')
}
module.exports = pool