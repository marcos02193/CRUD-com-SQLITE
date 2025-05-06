export function validate (schema){
    return (req, res, next) => {
        try {
            const validatedate = schema.parse(req.body)
            req.body = validatedate
            next()
        } catch (error) {
            return res.status(400).json({
                messagem: "erro de validação",
                erro: error.message
            })
        }
    }
}

