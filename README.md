# API REST - Livraria Alura

<a href="https://nodejs.org/en/" target="_blank">![NodeJS](https://img.shields.io/badge/Node.js-white?style=flat&logo=node.js&logoColor=black)</a>
<a href="https://expressjs.com/pt-br/" target="_blank">![Express.js](https://img.shields.io/badge/Express.js-white.svg?style=flat&logo=express&logoColor=black)</a>
<a href="https://www.mongodb.com/pt-br" target="_blank">![MongoDB](https://img.shields.io/badge/MongoDB-white.svg?style=flat&logo=mongodb&logoColor=black)</a>
<a href="https://www.postman.com/" target="_blank">![Postman](https://img.shields.io/badge/Postman-white?style=flat&logo=postman&logoColor=black)</a>

### API (Interface de Programação de Aplicações)
<p>Uma API (Interface de Programação de Aplicações) é uma série de rotinas programadas para <strong>acessar</strong> softwares ou plataformas webs. Elas simplificam o desenvolvimento de programas e aplicações, através da abstração dos diversos elementos que compõem um software, permitindo assim que o desenvolvedor não precise estar ciente dos detalhes da implementação do sistema como um todo, apenas precisará saber como utilizar os diferentes serviços fornecidos pelas APIs e como será a comunicação com outros elementos de seu software. Pense nas APIs como um mediador entre os usuários ou clientes e os recursos ou serviços web que eles querem obter. As APIs também servem para que organizações compartilhem recursos e informações e, ao mesmo tempo, mantenham a segurança, o controle e a obrigatoriedade de autenticação, pois permitem determinar quem tem acesso e o que pode ser acessado.</p>

<p>Enquanto você usufrui de um aplicativo ou site, este pode estar conectado a diversos outros sistemas e aplicativos via APIs sem que se perceba. Um exemplo popular é a rede social Twitter, sendo possível ler e publicar mensagens. De maneira semelhante, é possível ler e publicar mensagens no Reddit.</p>

<p>Uma API é um conjunto definido de mensagens de requisição e resposta HTTP, geralmente expresso nos formatos XML ou JSON. A chamada Web 2.0 vem abandonando o modelo de serviços SOAP em favor da técnica REST.</p>

### REST (Transferência de Estado Representacional)
<p>Para que uma API seja considerada do tipo RESTful, ela precisa estar em conformidade com os seguintes critérios:</p>

<li> Ter uma arquitetura cliente/servidor formada por clientes, servidores e recursos, com solicitações gerenciadas por HTTP.
<li> Estabelecer uma comunicação stateless entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e toda as solicitações são separadas e desconectadas.
<li> Armazenar dados em cache para otimizar as interações entre cliente e servidor.
<li> Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado. Para tanto, é necessário que:
<ul> 
	<li type="circle"> os recursos solicitados sejam identificáveis e estejam separados das representações enviadas ao cliente;
	<li type="circle"> os recursos possam ser manipulados pelo cliente por meio da representação recebida com informações suficientes para tais ações;
	<li type="circle"> as mensagens autodescritivas retornadas ao cliente contenham informações suficientes para descrever como processá-las;
	<li type="circle"> hipertexto e hipermídia estão disponíveis. Isso significa que após acessar um recurso, o cliente pode usar hiperlinks para encontrar as demais ações disponíveis para ele no momento.
</ul>
<li> Ter um sistema em camadas que organiza os tipos de servidores (responsáveis pela segurança, pelo carregamento de carga e assim por diante) envolvidos na recuperação das informações solicitadas em hierarquias que o cliente não pode ver.
<li> Possibilitar código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionalidade disponível ao cliente.

<p>A arquitetura REST é composta de um conjunto de diretrizes que podem ser implementadas conforme necessário. Isso faz com que as APIs REST sejam mais rápidas, leves e escaláveis, o que é ideal para a Internet das Coisas (IoT) e o desenvolvimento de aplicativos mobile.</p>

![RestAPI](readme-img/api-rest.png)

## Projeto
<p>Separar arquivos com particularidades distintas das em comum, ou manter uma padronização dentro do seu código são conceitos fundamentais para a arquitetura do sistema, e são aspectos que devem serem utilizados em todos projetos de desenvolvimento de software. Este caso não se difere, seguindo um objetivo em comum, os arquivos estão separados em modules, controllers e routes:</p>

```
.
├── node_modules<br>
├── package.json<br>
├── package-lock.json
├── server.js
└── src
    ├── app.js
    ├── config
    │   └── dbConnect.js
    ├── controllers
    │   ├── autoresController.js
    │   └── mangasController.js
    ├── modules
    │   ├── Autor.js
    │   └── Manga.js
    └── routes
        ├── autoresRoutes.js
        ├── index.js
        └── mangasRoutes.js
        
399 directories, 2071 files
```

`sudo su` executar como root<br>
`apt-get install tree` instalar tree<br>
`tree -d` exibir árvore<br>

<p>A seguir abortarei os principais conceitos utilizados para construir esta estrutura de arquivos, como o backend entrega os dados para o frontend e como a API REST fornece dados e recursos baseados em requisições e respostas HTTP.</p>

### <a href="https://nodejs.org/en/" target="_blank">Node.js</a>

<p>O Node.js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.</p>

<p>Apesar de recente, o Node.js já é utilizado por grandes empresas no mercado de tecnologia, como Netflix, Uber e LinkedIn.</p>
<p>O principal motivo de sua adoção é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless. Inclusive, os principais fornecedores de produtos e serviços Cloud já têm suporte para desenvolvimento de soluções escaláveis utilizando o Node.js.</p>

`node -v` node version<br>
`nvm ls` versões instaladas<br>
`nvm install 16.14.0` baixar versão 16.14.0<br>
`nvm use 16.14.0` utilizar versão 16.14.0<br>

### <a href="https://expressjs.com/pt-br/" target="_blank">Express.js</a>

<p>Algumas tarefas comuns no desenvolvimento web não são suportadas diretamente pelo Node. Se você quiser que a sua aplicação possua diferentes verbos HTTP (por exemplo GET, POST, DELETE, etc), que gerencie requisições de diferentes URLs ("rotas"), apresente arquivos estáticos ou utilize templates para mostrar as respostas (response) de maneira dinâmica, você não terá muita praticidade usando apenas o Node. Você terá duas opções. Escrever o código por conta própria ou então evitar todo esse trabalho de reinventar a roda ao utilizar um framework.</p>

<p>Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:</p>
    <li> Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
    <li> Integrar "view engines" para inserir dados nos templates.
    <li> Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
    <li> Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.

<p>O Express é bastante minimalista, no entanto, os desenvolvedores têm liberdade para criar pacotes de middleware específicos com o objetivo de resolver problemas específicos que surgem no desenvolvimento de uma aplicação. Há bibliotecas para trabalhar com cookies, sessões, login de usuários, parâmetros de URL, dados em requisições POST, cabeçalho de segurança e tantos outros. Você pode achar uma lista de pacotes de middleware mantidos pela equipe Express em Express Middleware (juntamente com uma lista de pacotes populares desenvolvidos por terceiros).</p>

`npm init` iniciar npm<br>
`npm install express --save` instalar express

### Recursos URL, Verbos HTTP e o CRUD
<p>O alvo de uma requisição HTTP é chamada de "resource", ou recurso em português, com a natureza ainda não definida; Isso pode ser um documento, uma foto ou qualquer outra coisa. Cada recurso é identificado por uma Identificação de recursos uniforme, do inglês Uniform Resource Identifier (URI) usada pelo HTTP para identificar recursos.</p>

<p>A identidade e a localização de recursos na Web são fornecidas, principalmente por um único URL (Uniform Resource Locator, um tipo de URI). Pode ser que as vezes as a identidade e a localização não são dadas pelo mesmo URI: O HTTP usa um cabeçalho HTTP específico, Alt-Svc quando o recurso solicitado quer que o cliente acesse-o de outra localização.</p>

![Url-Resource](readme-img/MDN-url.png)

<p>Seu serviço vai prover uma url base e os verbos HTTP vão indicar qual ação está sendo requisitada pelo consumidor do serviço.</p>

<p>Por exemplo, considerando a URL dominio.com/rest/notas/, se enviarmos para ela uma requisição HTTP utilizando o verbo <strong>GET</strong>, provavelmente obteremos como resultado uma listagem de registros (notas, nesse caso). Por outro lado, se utilizarmos o verbo <strong>POST</strong>, provalmente estaremos tentando adicionar um novo registro, cujos dados serão enviados no corpo da requisição.</p>

<p>Da mesma forma, a URL dominio.com/rest/notas/1, por exemplo, poderia ser usada para diferentes finalidades, dependendo do verbo enviado na requisição. No caso do <strong>GET</strong>, essa URL provavelmente deveria nos retornar o registro de ID 1 (nesse caso, a nota de ID = 1). Já o verbo <strong>DELETE</strong> indicaria que desejamos remover esse registro.</p>

<p><strong>CRUD</strong> são as quatro funções básicas que geralmente os sistemas que manipulam banco de dados devem poder executar:</p>
<ul>
    <li>C: Create - criar um novo registro
    <li>R: Read - ler (exibir) as informações de um registro
    <li>U: Update - atualizar os dados do registro
    <li>D: Delete - apagar um registro
</ul>

<p>Por exemplo, se você precisa desenvolver desde uma simples agenda telefônica até um sistema complexo de gestão de faturamento de pedidos, você precisará realizar essas 4 ações para manipular as tabelas do banco de dados de seu sistema.</p>

<p>Do ponto de vista do desenvolvedor, ele precisará criar as tabelas (modelos) do banco de dados, funções (controles) que atualizarão o banco de dados e as interfaces (visões), como página web ou aplicativo mobile, em que os usuários irão interagir com os dados.</p>

<p>Em sistemas mais sofisticados, os dados do CRUD podem ser manipulados por outros sistemas via API - Application Programming Interface.</p>

<br>
<p>Fontes:</p>
	
*![RedHat](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)* -
*![Wikipedia](https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es)* -
*![Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)* -
*![A Opus Software](https://www.opus-software.com.br/node-js/)* -
*![Devmedia](https://www.devmedia.com.br/servicos-restful-verbos-http/37103)* -
*![Angelo Públio](https://angelopublio.com.br/blog/crud)*
