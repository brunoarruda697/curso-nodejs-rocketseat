# curso-nodejs-rocketseat
Segundo curso de nodejs no site da Rocketseat

NodeJS é uma plataforma que utiliza da V8 que é a engine do javascript do Google Chrome no lado do back-end
permitindo assim usar o Javascript para tratar requisições e respostas no servidor, assim como acessar banco
de dados relacional ou não-relacional.

API Rest separa o front-end do back-end, sendo assim o back-end manipula as informações do banco de dados,
receber requisições e enviar respostas e tem o front-end separado construido com algum framework ex: React,
Vue e Angular.
Benefícions de utilizar API Rest: fornece mais flexibilidade no front-end graças aos frameworks citados acima
já que eles fornecem essa flexibilidade, dá pra tratar os dados de uma forma melhor. Outra vantagem é que usando
uma única API você consegue trabalhar com diferentes plataformas usando um único back-end, servindo informações
para uma aplicação mobile e também servindo para uma aplicação web.

*npm init
inicia o pacote npm e cria o arquivo package.json

*npm install express
é um micro framework que nos ajuda a lidar com rotas e views

*Criando estrutura
criado uma constante aonde fica a importação do express, e depois em outra constante inicializa o express usando express();

o comando listen abre uma porta para rodar o servidor do express

*Criando a primeira rota
usando a constante que inicializa .get e passando como primeiro parametro '/' é a rota raiz, e o segundo parametro é uma função que recebe req e res, req é a requisição e nela terá todas informações possiveis dessa requisição, no req você pode pegar parametros, corpo da requisição, cabeçalho da requisição, usuário que está fazendo a requisição, autenticação, todas as informações da requisição podem ser acessadas pelo Objeto req. O res tem haver com a resposta que o servidor dá para a requisição, dentro do Objeto res terá todas as informações que devolveremos para a requisição.

*Utilizando Nodemon
*npm install -D nodemon (-D é a mesma coisa que --save-dev que é para ser uma dependencia apenas para desenvolvimento)

a melhor forma de utilizar o nodemon é criando um script para ele no package.json