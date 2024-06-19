# Api de pagamento com  Nodejs

## Configuração do Ambiente:
```bash
mkdir src
cd src
npm init -y
```

## Instalação de Dependências :
```bash
npm install express body-parser mongoose dotenv
```

## Testando a API no postman :
```bash
POST http://localhost:3000/pagamentos
Content-Type: application/json

{
  "cliente": "João da Silva",
  "valor": 100.00
}

GET http://localhost:3000/pagamentos
```


## Obs:
Este é um exemplo básico de como configurar uma API de pagamento utilizando Node.js com arquitetura MVC. Com a possibilidade de  adicionar mais funcionalidades, como autenticação, validação de dados, tratamento de erros mais robusto, entre outros. 
