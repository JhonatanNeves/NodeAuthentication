# Micro Serviço com autenticação com Noje.js

Este é um projeto desenvolvido durante algumas aulas para dissiminação de conhecimento da [DIO](https://web.dio.me/home), uma plataforma de cursos gratuíta que todo DEV deveria conhecer! :wink:

Neste projeto foi criado um **microserviço de autenticação** que poderá ser uma caixinha de ferramentas e ser muito útil no dia a dia

## Composição do Projeto

Neste Projeto temos alguns **EndPoints Base** que podem ser extendidos da forma mais adequada para seu contexto.

São eles:

### Usuários

* GET /users
* GET /users:uuid
* POST /users/:uuid
* DELETE /users/:uuid


### Autenticação


* POST /token
* POST /token/validate