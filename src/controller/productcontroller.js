import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient() 

export const productpost = async (req, res) => {
    const {name, description, price, stock, createdAt} = req.body

    try {
        // tento fazer algo aqui
    
        const newproduct = await prisma.product.create({
            data: {name, description, price, stock, createdAt}
        })
        res.status(201).json(newproduct);
    } catch (error) {
        // se der erro faça isso
        res.status(500).json({
            messagem:"erro ao criar o novo usuario",
            erro: error.message
        })
       }


}

export const productget = async (req, res) =>{
    const product = await prisma.product.findMany()

    res.status(200).json(product)
}



export const productgetid = async (req, res) => {
    const {id} = req.params 
    const productid = await prisma.product.findUnique({
        where:{id: parseInt(id)},
    })
    res.status(200).json(productid)
}

export const productput = async (req, res) => {
    const { id } = req.params
    const {name, description, price, stock} = req.body
    try {
    const up = await prisma.product.update({
        where:{id: parseInt(id)},
        data: {name, description, price, stock}
    })
    res.status(201).json(up)
    } catch (error) {
        res.status(500).json({
            messagem:"erro ao atualizar usuario",
            erro: error.message
        })
    }


}

export const productdeleted = async (req, res) => {
    const id = req.params.id
    try {
        const del = await prisma.product.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(del)
    } catch (error) {
        res.status(500).json({
            messagem:"erro ao deletar usuario",
            erro: error.message
        })
        
    }



}