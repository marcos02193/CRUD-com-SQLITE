import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const SALT_ROUNDS = 10
const JWT_SECRET  = process.env.JWT_SECRET
export async function haspassword(password){
    return await bcrypt.hash(password, SALT_ROUNDS)
}

export async function comparepassword (password, hashedpassword){
    return await bcrypt.compare(password, hashedpassword)
}

export function generatetoken (user){

    return jwt.sign(
        {id: user.id, email: user.email}, 
        JWT_SECRET,
        {expiresIn: "1h"}
    )

}

export function verifytoken(token){
    return jwt.verify(token, JWT_SECRET)
}
