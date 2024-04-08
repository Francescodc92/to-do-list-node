import { Router } from "express";
import {z} from "zod";

const authRouter = Router()

authRouter.post('/register',(req, res)=> {
    const CreateUserSchema = z.object({
        firstName: z.string().min(3),
        lastName : z.string().min(3),
        email:  z.string().email(),
        password: z.string().min(6)
    })

    try {
        const data = CreateUserSchema.parse(req.body); 
        console.log(req.body)
        return
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Validation error', errors: error });
    
    }
   
})

export {authRouter}