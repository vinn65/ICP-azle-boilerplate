import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic } from 'azle';
import { Express } from 'express';

class Message{
    id:string;
    title:string;
    body:string;
    attachmentUrl:string;
    createdAt: Date;
    updatedAt:string | null
}

const messageStorage = StableBTreeMap<string, Message>(0);


