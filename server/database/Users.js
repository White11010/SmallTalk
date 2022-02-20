const db = require('../database/connection')

const newUser = async function (login, hashPassword) {
    const newUser = await db.query(
        `INSERT INTO users (login, password) values ($1, $2)`,
        [login, hashPassword]
    )
    return newUser
}

const getUser = async function (login) {
    const user = await db.query(`SELECT * from users where login = $1`, [login])
    return user
}

module.exports = {
    newUser,
    getUser
}