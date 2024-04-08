import {Request, Response} from 'express';
import { z }from 'zod';
import { prisma } from '../lib/prisma';


export const createActivity = async (req:Request, res:Response) => {
    const StatusEnum = z.enum(['TODO','IN_PROGRESS','COMPLETED','DELAYED','CANCELLED']);
    const CreateActivitySchema = z.object({
        title: z.string().min(3), 
        status: StatusEnum,    
        description:z.string().min(3).nullable()     
    })

    const {title, status, description} = CreateActivitySchema.parse(req.body); 
    const user = req.user!;

   const activity = await prisma.activity.create({
    data:{
        title,
        status,
        description,
        userID:user?.id
    }
   }) 

   console.log(activity)

   return res.status(200).json({activity})

}