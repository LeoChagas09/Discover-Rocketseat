# Layouts e evolucao

Layout tem a ver com a maneira que os elementos estao distribuidos na tela

## Normal flow

Ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página

``` HTML
<p> Texto block com <strong>inline</strong> dentro 
</p>
```

## Tables

É uma maneira de tabelas onde a tag `table` recebe um display fazendo com que os elementos internos com `td` e `tr` possam ser usados para montar uma tabela

```html
<table>
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>
    <tr>
        <td> Hora </td> 
        <td> 20:37 </td>
    </tr>
</table>
``` 

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posicao na tela.

``` html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear: both">
    normal
</div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- 0rdenacao
- Tamanhos flexivieiss