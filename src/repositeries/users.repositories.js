import db from '../config/database';

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id ITERGER PRIMARY KEY AUTOINCREMENTE,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`)

function createUSerRepositories( newUser) {
    return new Promise((res, rej) =>{
        const {username, email, password, avatar} = newUser
        db.run(`
          INSERT INFO users (username, email, password, avatar)
          VALUES (?,?,?,?)  
            `,
            [username, email, password, avatar],
            (err) => {
                if(err) {
                    rej(err)
                } else {
                    res({message: 'User creator'})
                }
            }
        )
    })
}