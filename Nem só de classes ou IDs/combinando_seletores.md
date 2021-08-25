# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilizacao

## Descendant combinator

* Identificado por um espaco entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2
```

## Child combinator

* Identificado pelo sinal ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serao desconsiderados

```css
body > ul > li 
```

# Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direto que é irmao direto na hierarquia

```css
h1 + p
```

## General sibling combinator

* Identificado peo sinal ` ˜ ` entre dois seletores
* Selecionss todos os elementos irmaos

```css
h1 ~ p 
```

## Utilizando combinadores

```css
ul > li [class = "red"]
```

## Dica

* Seletores muito especificos tendem a causar dificuldades no reuso das regras de estilizacao dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.