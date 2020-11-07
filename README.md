<h1 align="center">
  Portal de Documentação - Alt&nbsp;
  <img
    alt="Alt"
    src="https://avatars1.githubusercontent.com/u/68825062?s=200&v=4"
    width="25"
  />
</h1>

> Nota: Este projeto está sob desenvolvimento...<br/>
> Em breve, o Alt contará com um portal de documentação próprio!

---

## Desenvolvimento

Este projeto utiliza o [Docusaurus 2](https://v2.docusaurus.io/), um moderno gerador de sites estáticos.

### Requisitos

Para desenvolver localmente, é necessário ter os seguintes pacotes instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/pt-br/)
- [Yarn](https://yarnpkg.com/)

### Primeiro passos

1. Clone e acesse o repositório

```bash
$ git clone https://github.com/alt-zap/docs.git
$ cd docs
```

2. Instale as dependências

```bash
$ yarn
```

3. Inicie o servidor de desenvolvimento local

```bash
$ yarn start
```
Esse comando abrirá uma nova janela no seu navegador. Boa parte das mudanças feitas no código podem ser visualizadas em tempo real, sem necessidade de reiniciar o servidor.

### Criando uma Página de Documentação

1. Crie um arquivo com extensão `.mdx` dentro da pasta `/docs`. Esse será o arquivo da sua página. Se quiser agrupá-lo em uma categoria, crie uma pasta com o nome dessa categoria (caso ela ainda não exista) e mova o seu arquivo para ela.
2. Copie o template do arquivo `/docs/template.mdx` para o seu arquivo recém criado. Esse template contém a estrutura básica de uma página de documentação.
3. Preencha os campos de identificação da sua página:
    - `id`: um identificador único para a página. Em geral, o id será o nome do arquivo sem a extensão.
    - `title`: o título da página.
    - `slug`: um slug para a página. Se não precisar de um slug customizado, você pode remover essa linha, e o slug padrão será o próprio `id`.

    Também é necessário substituir, no componente `Feedback` que fica ao final da página, os campos de `pageId` e `title` com mesmos os valores usados acima para o **id** e o **title**, respectivamente. Esse passo é importante para que seja possível coletar feedback dos usuários sobre a sua página.
4. Adicione **o id de sua página** no arquivo `sidebar.js`. As referências na sidebar seguem a seguinte estrutura:
    ```typescript
    {
      [nomeDaCategoria]: referênciaDaPágina[]
    }
    ```

    Abaixo está uma possível configuração para uma página exemplo:

    `docs/guides/tips-for-images.mdx`
    ```markdown
    ---
    id: tips-for-images
    title: Dicas para Fotos de Produtos
    ---
    import Feedback from '@site/src/components/feedback/Feedback';

    Usar boas fotos nos seus catálogos...

    <Feedback
      pageId="tips-for-images"
      title="Dicas para Fotos de Produtos"
    />

    ```

    `sidebar.js`
    ```javascript
    module.exports = {
      someSidebar: {
        // ...
        'Guias': [
          'guides/tips-for-images' // <--- referência do id da página, relativa à pasta `docs/`
        ],
        // ...
      },
    };
    ```

    Para mais informações, visite o [Guia de Documentação do Docusaurus (*Inglês*)](https://v2.docusaurus.io/docs/docs-introduction).

Depois de seguir esses passos, a sua página já deve aparecer na seção de documentação da sua versão local do portal. Basta rodar o comando `yarn start` para visualizá-la.
