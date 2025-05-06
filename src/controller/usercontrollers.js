import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  };
  
  export const createUser  =  async (req, res) => {
    const { name, email, password } = req.body;

try {
    // tento fazer algo aqui

    const newUser = await prisma.user.create({
        data: {name, email, password}
    })
    res.status(201).json(newUser);
} catch (error) {
    // se der erro faça isso
    res.status(500).json({
        messagem:"erro ao criar o novo usuario",
        erro: error.message
    })
   }
  };

  export const updateusers = async (req, res) => {
    const id = req.params.id
    const {name, email, password} = req.body
    try {
        const updateuser = await prisma.user.update({
            where:{id: parseInt(id)},
            data: {name, email, password}
        })
        res.status(200).json(updateuser)
        
    } catch (error) {
        res.status(400).json({
            messagem:"erro ao atualizar usuario",
            erro: error.message
        })
        
    }
  }



export const deleteuser = async (req, res) =>{
    try {
        const id = req.params.id
        const user = await prisma.user.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            messagem:"erro ao deletar usuario",
            erro: error.message
        })
        
    }
}

export const getuserid = async (req, res) =>{
    try {
        const id = req.params.id
    const user = await prisma.user.findMany({
        where:{id: parseInt(id)},
    })
    res.status(200).json(user)

    res
    } catch (error) {
        res.status(500).json({
            messagem:"erro ao encontra o usuario",
            erro: error.message
        })
    }
}