import { verifytoken } from "../utils/auth.js";
//midiuer
export function authenticate(req, res, next){
    const authheader = req.headers["authorization"]

    const token = authheader && authheader.split(" ")[1]

    if(!token){
        return res.status(401).json({
            message: "token de  acesso não fornecido! "
        })
    }
    try {
        const decoded = verifytoken(token)
        return res.json({
            decoded
        })
        // req.user = decoded
        // next()
    }catch{
        res.status(403).json({
            message: "token invalido or espirado! "
        })
    }
}

