# Distancias absolutas <lenght>

Sao fixas e nao alteram seu valor

Unidade         Nome                Equivalencia
cm              Centimetros         1cm = 96px/2.54
in              Inches              1in = 2.54cm = 96px
px              Pixels              1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px** 
* nao recomendado usar cm

# Distancias relativas

Sao relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Beneficio: Maior adaptacao aos diferentes tipos de tela

Unidade     Relativo a
em          Tamanho da font do pai
rem         Tamanho da font do elemento raiz (root/html)
vw          1% da viewport width(largura)
vh          1% da viewport height (altura)