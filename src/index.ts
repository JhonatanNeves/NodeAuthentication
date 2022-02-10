
import express, { NextFunction, Request, Response } from 'express';
import usersRoute from './routes/users.route';

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Configurações de Rotas
app.use(usersRoute);
app.use(usersRoute);

app.get('/status', (req: Request, res:Response, next:NextFunction) => {
    res.status(200).send({ foo: 'Hello World'});
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});
