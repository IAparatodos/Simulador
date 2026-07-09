# Calculadora de cajas de azulejos

Mini herramienta web para calcular cuántas cajas de azulejos necesita un cliente según:

- Metros cuadrados del proyecto.
- Porcentaje de merma recomendado.
- Metros cuadrados que cubre cada caja.
- Cajas disponibles en stock.

## Identidad visual

La interfaz usa la paleta corporativa de Adrihosan:

- Principal: `#4dd2d0`
- Secundario: `#3f6f7b`
- Oscuro: `#102e35`
- Tipografía: `Poppins`, con fallback del sistema

## Estructura

```text
calculadora-azulejos/
├── index.html
├── styles.css
└── script.js
```

## Cómo usarla

1. Abre `calculadora-azulejos/index.html` en el navegador.
2. Introduce los metros cuadrados del proyecto.
3. Añade la merma recomendada.
4. Indica los metros cuadrados que cubre cada caja.
5. Escribe cuántas cajas hay disponibles.
6. Pulsa `Calcular cajas`.

## Lógica de cálculo

```text
Metros con merma = metros del proyecto × (1 + merma / 100)
Cajas necesarias = metros con merma / metros por caja
Resultado final = cajas necesarias redondeadas hacia arriba
```

## Ejemplo

```text
Proyecto: 20 m²
Merma: 10%
Caja: 1,25 m²
Stock: 25 cajas

Metros con merma: 22 m²
Cajas necesarias: 18
Resultado: hay stock suficiente
```

## Uso previsto

Esta demo está pensada para Código AdrIA o para integrarla después en una landing, una web de reformas, una ficha de producto o una herramienta interna de presupuesto rápido.
