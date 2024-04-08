import {Request, Response} from 'express';
import {z} from "zod";
import { hashSync } from "bcrypt";
import { prisma } from '../lib/prisma';
import { BadRequestException } from '../_errors/bad-request';
import { ErrorCode } from '../_errors/error-root';

export const register = async (req:Request, res:Response)=> {
    const CreateUserSchema = z.object({
        firstName: z.string().min(3),
        lastName : z.string().min(3),
        email:  z.string().email(),
        password: z.string().min(6)
    })

    const {firstName, lastName, email, password} = CreateUserSchema.parse(req.body); 

    let user  = await prisma.user.findUnique({where:{email}})

    if(user)  {
        throw new BadRequestException('User already exists!', ErrorCode.USER_ALREADY_EXISTS)
     }

    user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashSync(password, 10)
        }
    })

    res.json({user});
   
}