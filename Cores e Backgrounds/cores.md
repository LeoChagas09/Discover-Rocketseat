# Cores

Usamos o CSS para alterar cores do nosso documento

## Tipos

* background-color (para caixas)
* color (para texto)
* border-color (para-caixas)
* outros...

# Valores

Podemos definir os valores por

* palavra-chave(blue, transparent)
* hexadecimal (#990011)
* funcoes: rgb, rgba, hsl, hsla...

```css
element {
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurble;

    /*<hex-color> values 0-F */
    color: #090;
    color: #009900;
    color: #090a;
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.6);  /* 0-225 */
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 64 / 0.3);
    color: rgb(34.0 12 64 / 60%);
    color: rgba(34.6 12 64 / 30%);

    /* <hsl()> values */
    color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - Lunianca */
    color: hsla(30, 100%, 50%, 0.6);
    color: hsl(30 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30.0 100%, 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit;
    color: initial;
    color: unset;
}
```