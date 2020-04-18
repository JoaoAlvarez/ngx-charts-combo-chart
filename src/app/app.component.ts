import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<combo-chart-component
  [view]="view"
  [scheme]="comboBarScheme"
  [colorSchemeLine]="lineChartScheme"
  [results]="barChart"
  [animations]="animations"
  [lineChart]="lineChartSeries"
  [yAxisTickFormatting]="yLeftTickFormat"
  [yLeftAxisScaleFactor]="yLeftAxisScale"
  [yRightAxisScaleFactor]="yRightAxisScale"
  [yRightAxisTickFormatting]="yRightTickFormat"
  [gradient]="gradient"
  [xAxis]="showXAxis"
  [yAxis]="showYAxis"
  [legend]="showLegend"
  [legendTitle]="legendTitle"
  [legendPosition]="legendPosition"
  [showGridLines]="showGridLines"
  [showXAxisLabel]="showXAxisLabel"
  [showYAxisLabel]="showYAxisLabel"
  [showRightYAxisLabel]="showYAxisLabel"
  [xAxisLabel]="xAxisLabel"
  [yAxisLabel]="yAxisLabel"
  [yAxisLabelRight]="yAxisLabelRight">
</combo-chart-component>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  view = [500,400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = 'below';
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  animations: boolean = true;
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;

  barColor: string = '#01579b'
  lineColor: string = '#7aa3e5';
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: [this.barColor,this.lineColor]
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: [this.barColor]
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';
  constructor(){
    this.barChart = mockData.map(function (element) {
      return { name: element.dataLeilao, value: element.qtdeDemandada }
    });

    this.lineChartSeries = [{
      name: 'Ofertas',
      series : mockData.map(function (element) {
        return { name: element.dataLeilao, value: element.qtdeOfertada }
      })
    }]
  }
}

export var mockData = [
  {
    "dataLeilao": "2020-04-16",
    "qtdeDemandada": 55000,
    "qtdeOfertada": 20000
  },
  {
    "dataLeilao": "2020-04-17",
    "qtdeDemandada": 60000,
    "qtdeOfertada": 20000
  },
  {
    "dataLeilao": "2020-04-18",
    "qtdeDemandada": 40000,
    "qtdeOfertada": 20000
  },
  {
    "dataLeilao": "2020-04-19",
    "qtdeDemandada": 70000,
    "qtdeOfertada": 20000
  },
  {
    "dataLeilao": "2020-04-20",
    "qtdeDemandada": 50000,
    "qtdeOfertada": 20000
  }
];

export let lineChartSeries = [
  {
    name: 'Tablets',
    series: [
          {
      name: 'USA',
      value: 50
    },
      {
        value: 80,
        name: 'United Kingdom'
      },
      {
        value: 85,
        name: 'France'
      },
      {
        value: 90,
        name: 'Japan'
      },
      {
        value: 100,
        name: 'China'
      }
    ]
  },
    {
    name: 'Cell Phones',
    series: [
          {
      value: 10,
      name: 'USA'
    },
      {
        value: 20,
        name: 'United Kingdom'
      },
      {
        value: 30,
        name: 'France'
      },
      {
        value: 40,
        name: 'Japan'
      },
      {
        value: 10,
        name: 'China'
      }
    ]
  },
    {
    name: 'Computers',
    series: [
          {
      value: 2,
      name: 'USA',

    },
      {
        value: 4,
        name: 'United Kingdom'
      },
      {
        value: 20,
        name: 'France'
      },
      {
        value: 30,
        name: 'Japan'
      },
      {
        value: 35,
        name: 'China'
      }
    ]
  }
];

export let barChart: any = [
  {
    name: 'USA',
    value: 50000
  },
  {
    name: 'United Kingdom',
    value: 30000
  },
  {
    name: 'France',
    value: 10000
  },
  {
    name: 'Japan',
    value: 5000
  },
  {
    name: 'China',
    value: 500
  }
];
