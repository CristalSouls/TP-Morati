# Mise en place d'un graphique Polar Area avec Chart.js

## Resource :

Site de documentation de [Chart.js](https://www.chartjs.org/).

## Recupération du CDN :

Récuperé le CDN dans Getting Starde puis dans [installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) ou copier :

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

insére le dans votre page html.

## Recupération du code du Polar Area Chart :

Récuperé le code de la Config et du Setup dans Chart Types puis dans [Polar Area Chart](https://www.chartjs.org/docs/latest/charts/polar.html) ou copier:

### Config

```js
const config = {
  type: 'polarArea',
  data: data,
  options: {}
};
```

### Setup

```js
const data = {
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};
```

## Résulta

![Capture d'écran](.//img/ChartJS-Polar.png)

