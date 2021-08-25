# display: block vs display : inline

- como as caixas se comportam em relacao ás outras caixas
- Comportamento externo das caixas

* block
Ocupa toda a linha, colocando o proximo elemento abaixo dessse
width e height sao respeitados
padding, margin, border irao funcionar normalmente.

* inline
Elemento ao lado do outro
width e height nao funcionam
somente valores horizontais de margin, padding e border.

exemplos
block: `<p> <div> <section> `, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em> `