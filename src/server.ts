import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';

dotenv.config();

const server = express();

// liberando a politica de CORS via lib cors
server.use(cors({
    origin: 'https://resttesttest.com',
    methods: ['POST']
}));
// server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));

// É um middleware que pega as informações brutas da requisição (já que elas não vem bonitinhas prontas para você poder usar) e converte elas para algo usável no JS
server.use(express.urlencoded({ extended: true }));

server.use('/api', apiRoutes);

server.use( (req: Request, res: Response) => {
    res.status(404);
    res.json( { error: "Endpoint not found" } );
});

server.listen(process.env.PORT);