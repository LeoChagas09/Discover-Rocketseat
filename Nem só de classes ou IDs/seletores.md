# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos

* Element Selector
    - Todos os elementos HTML
* ID selector
    - Um elemento que tenha um atributo `id`
    - cada id deverá ser unico.
* Class Selector
    - Os elementos que contenha um atributo `class`
    - Podemos ter uma ou mais classes.
* Attribute Selector
    - Um elemento que tenha um atributo especifico.
* Pseudo-class Selector
    - Elementos em um estado especifico.

## Multiplos

Voce podera selecionar multiplos elementos a aplicar alguma regra CSS para todos eles.

Usamos uma separacao por virgulas para isso.

```css
h1, p, a {
    color: red;
}
```