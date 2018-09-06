# Extrator de links de arquivo Markdown v.1.0.4

**Esta biblioteca se destina a validação de dados de cartão de crédito, para uso em aplicações web.**
Na versão atual, efetua a validação de número de cartão de crédito.


## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd(string);**

Exemplo de uso:

```
$node
> let getLinksFromMd = require("aa-extractlinks")
> const str = `# Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
[foo](http://foo.com)
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
> getLinksFromMd(str); // [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```


## versão 1.0.4

- funcionalidades: dada uma string, a lib devolve um array de objetos com os links encontrados.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm i aa-extractlinks` OU `$npm install aa-extractlinks --save`


## roadmap oficial do projeto

#### versão 2.0.0 (previsão dezembro/2018)
- README em inglês

#### versão 1.0.4 (released)
- funcionalidades: a função recebe uma string e devolve um array de objetos com os links encontrados.
