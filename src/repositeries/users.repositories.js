import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
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
                    res({id: this.lastID, ...newUser})
                }
            }
        )
    })
}

function findUserByEmailRepository(email){
    return new Promise ((resolve, reject) =>{
        db.get(`
            SELECT id,username, email, avatar
            FROM users
            WHERE email = ?            
            `,
            [email],
            (err,row) =>{
                if (err){
                    reject(err);
                }else {
                    resolve(row);
                }
            }
        )
    })
}

export default {
    createUSerRepositories,
    findUserByEmailRepository
}