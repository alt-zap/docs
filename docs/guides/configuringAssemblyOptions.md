---
id: configurando-opcoes-de-montagem-de-produto
title: Configurando opções de montagem de um produto
slug: configurando-opcoes-de-montagem-de-produto
---

## Introdução

Um recurso importantíssimo na plataforma Alt é a configuração de **opções de montagem** em um produto, possibilitando a criação de um cardápio complexo e versátil. Com esta funcionalidade, é possível ter configurações como **pizza com dois sabores**, **combo de hambúrguer** ou até **açaí com adicionais**. Na prática, as opções de montagem oferecem **escolhas para o cliente** na hora de fazer pedido em seu estabelecimento.

<p align="center">
  <img class="framed" src="https://user-images.githubusercontent.com/18706156/97820643-d38afd80-1c8d-11eb-94dc-4a79dba03ea2.png
" width="300" alt="Sessão de Sites" />
</p>
<p align="center"><i>Exemplo de produto com opções de montagem Tamanho e Adicionais</i></p>

## Requisitos

Para configurar opções de montagem, é preciso que você tenha pelo menos uma categoria e um produto cadastrado no seu estabelecimento.

### Material Relacionado

- [Como adicionar produtos](#)

## Tutorial

Primeiramente, vamos configurar uma opção de **Tamanho** para o produto. Logo após, explicaremos o que cada campo da configuração significa e como eles impactam o comportamento final do seu Menu.

1. No seu painel de Adminstração do Alt, clique na Aba **Catálogo**.
2. Após isso, na sessão **Produtos**, escolha ou crie um novo produto.
3. Na janela que é aberta de configuração do produto, navegue até a sessão **Opções de Montagem**.

<p align="center">
  <img src="https://i.imgur.com/ctzscmP.png" width="300" alt="Botão de Editar" />
</p>

4. Clique no botão **Adicionar Campo**.
5. Em _"Nome do Campo"_, digite `Tamanho`.
6. Em _"Tipo"_, selecione `Seleção Simples`.
7. Prencha os campos _"Mínimo"_ e _"Máximo"_ com `1`. Até agora, seu formulário deve estar dessa maneira:

<p align="center">
  <img class="framed" src="https://user-images.githubusercontent.com/18706156/97862602-5fc80f80-1ce4-11eb-8ff7-87c22ac218d0.png" width="300" alt="Criação de um campo" />
</p>

5. Agora, vamos adicionar as **opções de tamanho** para este produto. Para isso, clique no botão **Adicionar Opção**.
6. Em _"Nome"_ preencha `Pequeno`. Isso já é suficiente, já que os outros campos não são obrigatórios ou já estão preenchidos.

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97862801-b9c8d500-1ce4-11eb-9bee-991b98dabb9f.png" width="300" alt="Nova Opção" />
</p>

7. Feito isso, **repita a mesma operação do Passo 5** para adicionar outros tamanhos (como "Médio" e "Grande"). Para esses, você pode adicionar um `Preço` na opção, que será somado ao valor final do produto caso o usuário escolha essa opção.

8. Clique em **Salvar** para salvar as novas opções de montagem do seu produto.

9. Após finalizado, você pode **entrar no seu Site** (`{slug}.alt.app.br`) e verificar o produto que você alterou. A janela de seleção para ele deve estar dessa maneira:

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97863215-64d98e80-1ce5-11eb-80d4-b482fe117575.png" width="300" alt="Menu Final" />
</p>

## Configurações

Agora, vamos analisar todos os campos de configuração presentes e como eles impactam no seu Site.

### Cadastro de Campo

Um "Campo" representa uma opção de montagem/customização para aquele produto. Para oferecer uma plataforma robusta e que atende vários negócios, é possível configurar varias características desse campo. Alguns exemplos de possíveis Campos são: `Tamanho`, `Sabor`, `Adicionais` ou até mesmo `Sobremesa`, quando criando combos de produto.

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97863723-314b3400-1ce6-11eb-9f72-8c0026baf90a.png" width="300" alt="Cadastro de Campo" />
</p>

Veja detalhes sobre cada uma destas configurações.

| **Campo**     | **Obrigatório** | **Descrição**                                                                                                 |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| Nome do Campo | Sim             | Nome da opção de montagem que será exibido para o cliente (ex: `Tamanho`).                                    |
| Ativo         | Sim             | Indicador se tal opção será exibida para o cliente. Você pode desativar qualquer opção temporariamente.       |
| Preço         | Não             | Preço que será adicionado ao produto **caso o cliente escolha qualquer uma das sub-opções**. Detalhes abaixo. |
| Tipo          | Sim             | Tipo da opção, podendo ser **Seleção Múltipla** ou **Seleção Simples**. Detalhes abaixo.                      |
| Mínimo        | Sim             | Número mínimo que o seu cliente deve escolher desta opção.                                                    |
| Máximo        | Sim             | Número máximo que o seu cliente deve escolher desta opção.                                                    |
| Opções        | Sim             | Representa as opções deste campo. Detalhes abaixo.                                                            |

Cada campo necessita ter "opções" cadastradas. Esses são os valores que os clientes finais realmente irão selecionar. Após cadastrar um campo de opção de montagem, é possível clicar no botão **Adicionar Opção** para cadastrar quantas opções forem necessárias para este campo. Para uma opção de montagem `Sabor`, alguns exemplos de opção são `Frango com Catupiry`, `Quatro Queijos` ou `Marguerita`.

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97866887-8f2e4a80-1ceb-11eb-8a72-cb3a025068f4.png" width="300" alt="Cadastro de Opção" />
</p>

Vamos analisar o que cada um desses campos significa.

| **Campo**          | **Obrigatório** | **Descrição**                                                                                           |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------- |
| Nome do Opção      | Sim             | Nome da opção (Ex: `Calabresa`)                                                                         |
| Ativo              | Sim             | Indicador se tal opção será exibida para o cliente. Você pode desativar qualquer opção temporariamente. |
| Descrição          | Não             | Detalhes sobre aquela opção, caso deseje informar algo para o cliente sobre a opção.                    |
| Preço              | Não             | Preço que será adicionado ao produto **caso o cliente escolha esta opção**.                             |
| Quantidade Inicial | Sim             | Valor padrão, no pedido, para esta opção. Detalhes abaixo.                                              |

Agora, veremos com maior detalhe algumas destas configurações.

### Tipo do Campo

Atualmente, o Alt suporta dois tipos de Campo:

- **Seleção Simples**: onde cada opção só pode se escolhida uma vez (ex: opções de tamanho).
- **Seleção Múltipla**: onde as opções podem ser selecionadas mais de uma vez (ex: bacon em um sanduíche).

### Mínimo e Máximo

Os campos mínimo e máximo também influenciam como o campo será renderizado (mostrado) no Menu de seu estabelecimento. Basicamente, eles significam os limites inferior e superior para aquela opção. Um campo com Mínimo 1 será obrigatório e o cliente só poderá adicionar o produto após selecionar pelo menos uma das opções.

Para um campo onde o cliente deve selecionar 1, e apenas 1, opção você deve configurar Mínimo e Máximo como 1. Um exemplo dessa configuração é o campo Tamanho para um produto de Pizza.

Veja alguns exemplos de configurações de Mínimo/Máximo/Tipo:

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97934487-a2c1cb80-1d54-11eb-9da6-a9c4615e5e22.png" width="300" alt="Opção Temperos" />
</p>
<p align="center">
<b>Tipo:</b> Seleção Simples / <b>Mínimo: </b> 0 / <b>Máximo:</b> 3
</p>

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97934546-cbe25c00-1d54-11eb-9ac1-9dcbdbde7e43.png" width="300" alt="Opção Adicionais" />
</p>
<p align="center">
<b>Tipo:</b> Seleção Múltipla / <b>Mínimo: </b> 1 / <b>Máximo:</b> 3
</p>

<p align="center">
  <img class="framed"
  src="https://user-images.githubusercontent.com/18706156/97934622-f6ccb000-1d54-11eb-8a87-1ca7200505dd.png" width="300" alt="Opção Temperos" />
</p>
<p align="center">
<b>Tipo:</b> Seleção Simples / <b>Mínimo: </b> 1 / <b>Máximo:</b> 1
</p>

### Preço da Opção de Montagem

O campo `Preço` de uma opção de montagem recebe um valor monetário, semelhante ao Preço principal do produto, porém este não é obrigatório. Ele é util para funcionar como um "valor mínimo" que será acrescido **caso o cliente selecione pelo menos uma das sub-opções daquela opção de montagem**. Vale ressaltar que algumas opções podem não ser obrigatórias.

Por exemplo, caso meu estabelecimento esteja vendendo um produto `Açaí 300ml` por R$ 13,00 e eu deseje oferecer a seguinte oferta: "Por mais R$ 3,00, escolha até 5 adicionais". Mesmo que seja possível colocar um preço em cada um dos adicionais (sub-opções, detalhes abaixo), ficaria imprático. Então, a solução seria:

- Adicionar a opção de montagem/campo `Adicionais`.
- Colocar Mínimo 0 (para permitir o cliente não utilizar essa oferta) e Máximo 5.
- Colocar Preço `R$ 3,00`.
- Cadastrar as Opções `Mel`, `Aveia`, `Farinha Láctea`, `Ninho`, `Granola`, `Castanha` (e etc...) com preço R\$ 0,00 (ou sem preencher o preço). _Detalhes abaixo._

Com esta configuração, o cliente tem a opção de não selecionar nenhum adicional (não sendo acrescido nenhum valor no seu pedido) mas, caso selecione **pelo menos uma opção de adicional**, será cobrado mais R$ 3,00 (totalizando R$ 16,00 com o valor principal do produto) podendo selecionar até 05 adicionais em seu Açaí.

### Quantidade Inicial

O campo Quantidade Inicial, configurável em cada opção de um campo, indica a seleção "padrão" para aquele campo, especificamente **a quantidade de vezes que aquela opção estará selecionada**. Para campos onde uma opção só pode estar marcada ou desmarcada, para selecionar uma opção inicialmente basta configurá-la sua "Quantidade Inicial" 1.

Se, por exemplo, você deseja que o cliente já tenha uma opção do campo selecionada assim que abrir a janela do produto, você deve configurar a Quantidade Inicial.