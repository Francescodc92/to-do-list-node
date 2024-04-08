import { Router } from "express";
import {z} from "zod";
import { prisma } from "../../lib/prisma";
import { hashSync } from "bcrypt";

const authRouter = Router()

authRouter.post('/register', async (req, res)=> {
    const CreateUserSchema = z.object({
        firstName: z.string().min(3),
        lastName : z.string().min(3),
        email:  z.string().email(),
        password: z.string().min(6)
    })

    try {
        const {firstName, lastName, email, password} = CreateUserSchema.parse(req.body); 
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashSync(password, 10)
            }
        })

        res.json({user});
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Validation error', errors: error });
    }
   
})

export {authRouter}