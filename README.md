# API REST - Livraria Alura

### API (Interface de Programação de Aplicações)
<p>Este é o repositório da minha primeira experiência construindo uma API! Uma API (Interface de Programação de Aplicações) é uma série de rotinas programadas para <strong>acessar</strong> softwares ou plataformas webs. Elas simplificam o desenvolvimento de programas e aplicações, através da abstração dos diversos elementos que compõem um software, permitindo assim que o desenvolvedor não precise estar ciente dos detalhes da implementação do sistema como um todo, apenas precisará saber como utilizar os diferentes serviços fornecidos pelas APIs .e como se dará a comunicação destas com outros elementos de seu software. Pense nas APIs como um mediador entre os usuários ou clientes e os recursos ou serviços web que eles querem obter. As APIs também servem para que organizações compartilhem recursos e informações e, ao mesmo tempo, mantenham a segurança, o controle e a obrigatoriedade de autenticação, pois permitem determinar quem tem acesso e o que pode ser acessado.</p>

<p>Enquanto você usufrui de um aplicativo ou site, este pode estar conectado a diversos outros sistemas e aplicativos via APIs sem que se perceba. Um exemplo popular é a rede social Twitter, sendo possível ler e publicar mensagens. De maneira semelhante, é possível ler e publicar mensagens no Reddit.</p>

<p>Uma API é um conjunto definido de mensagens de requisição e resposta HTTP, geralmente expresso nos formatos XML ou JSON. A chamada Web 2.0 vem abandonando o modelo de serviços SOAP em favor da técnica REST.</p>

### REST (Transferência de Estado Representacional)
<p>Para que uma API seja considerada do tipo RESTful, ela precisa está em conformidade com os seguintes critérios:</p>

<li> Ter uma arquitetura cliente/servidor formada por clientes, servidores e recursos, com solicitações gerenciadas por HTTP.
<li> Estabelecer uma comunicação stateless entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e toda as solicitações são separadas e desconectadas.
<li> Armazenar dados em cache para otimizar as interações entre cliente e servidor.
<ul> 
	<li type="circle"> Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado. Para tanto, é necessário que:
	<li type="circle"> os recursos solicitados sejam identificáveis e estejam separados das representações enviadas ao cliente;
	<li type="circle"> os recursos possam ser manipulados pelo cliente por meio da representação recebida com informações suficientes para tais ações;
	<li type="circle"> as mensagens autodescritivas retornadas ao cliente contenham informações suficientes para descrever como processá-las;
	<li type="circle"> hipertexto e hipermídia estão disponíveis. Isso significa que após acessar um recurso, o cliente pode usar hiperlinks para encontrar as demais ações disponíveis para ele no momento.
</ul>
<li> Ter um sistema em camadas que organiza os tipos de servidores (responsáveis pela segurança, pelo carregamento de carga e assim por diante) envolvidos na recuperação das informações solicitadas em hierarquias que o cliente não pode ver.
<li> Possibilitar código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionalidade disponível ao cliente.

<p>A arquitetura REST é composta de um conjunto de diretrizes que podem ser implementadas conforme necessário. Isso faz com que as APIs REST sejam mais rápidas, leves e escaláveis, o que é ideal para a Internet das Coisas (IoT) e o desenvolvimento de aplicativos mobile.</p>

![RestAPI](api-rest.png)

## Projeto




![tree](tree.png)
- sudo su : Executar como root
- apt-get install tree 
- tree



Fontes:
redhat https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api
wikipedia https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es

Créditos: 
![@Alura](github da alura)