import {Request, Response} from 'express';
import { z }from 'zod';
import { prisma } from '../lib/prisma';


//Create Activity
export const createActivity = async (req:Request, res:Response) => {
    const StatusEnum = z.enum(['TODO','IN_PROGRESS','COMPLETED','DELAYED','CANCELLED']);
    const CreateActivitySchema = z.object({
        title: z.string().min(3),
        expirationDate:z.string().datetime().nullish(),
        status: StatusEnum,    
        description:z.string().min(3).nullable()     
    })

    const {title, status, expirationDate, description} = CreateActivitySchema.parse(req.body); 
    const user = req.user!;

   const activity = await prisma.activity.create({
    data:{
        title,
        status,
        expirationDate,
        description,
        userID:user?.id
    }
   }) 

   console.log(activity)

   return res.status(200).json({activity})

}


//List Activity
export const getUserActivities = async (req:Request, res:Response) => {
    const querystring = z.object({
        title: z.string().nullish(),
        expirationDate: z.string().nullish(),
        pageIndex: z.string().nullish().default('0').transform(Number),
    });

    let { title, pageIndex } = querystring.parse(req.query);
    const user = req.user!;

    let whereClause: any = {
        userID: user.id
    };

    if (title) {
        whereClause = {
            ...whereClause,
            title: {
                contains: title
            }
        };
    }

    const activities = await prisma.activity.findMany({
        where:{
            ...whereClause
        },
        take: 10,
        skip: pageIndex * 10,
        orderBy:{
            expirationDate: "asc"
        }
    })

    res.status(200).json({activities});
}



