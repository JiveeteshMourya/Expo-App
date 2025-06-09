import bcrypt from 'bcrypt';

// hash function encrypt
export const hashPassword = (password) => {
    return new Promise((resolve, reject) => { // instead of promise, async/await can also be used
        bcrypt.genSalt(10, (err, salt) => {
            if(err) reject(err);
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) reject(err);
                resolve(hash);
            })
        })
    })
}

// hash function decrypt
export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}