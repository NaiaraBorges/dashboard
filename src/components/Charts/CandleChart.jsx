import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  Crosshair,
  CandleSeries,
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

import {chartData} from '../../data/data';

function CandleChart() {

  const { currentMode } = useStateContext();

  return (
    <div>
      <div className="w-full">
        <ChartComponent title="AAPL Historical"
          primaryXAxis={{valueType:'DateTime', minimum:new Date( '2016, 12, 31'),
            maximum:new Date( '2017, 9, 30'), labelFormat:'yMMM', title: 'Month',
            crosshairTooltip:{enable: true}}}
          primaryYAxis={{title:'Price'}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          crosshair={{enable: true, lineType:'Vertical'}}>
          <Inject services={[CandleSeries, DateTime, Tooltip, Crosshair]}></Inject>
          <SeriesCollectionDirective>
            {/* To create a Hilo Open Close series, import HiloOpenCloseSeries from the chart package and inject it into chart services. Then change the series type to HiloOpenClose*/}
            {/* To create a CandleSeries,import CandleSeries from chart package and inject it into chart series. Then change services type to Candle*/}
            <SeriesDirective type="Candleimport { ChartComponent } from '@syncfusion/ej2-react-charts';
" name="Apple INC." dataSource={chartData}
            xName="date" high="high" low="low" open="open" close="close" volume="volume"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default CandleChart;
