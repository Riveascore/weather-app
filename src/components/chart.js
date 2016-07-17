import _ from 'lodash';
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  const initialAverage = _.sum(data) / data.length;
  return _.round(initialAverage);
}

export default (props) => {
  const listData = props.cityData.list;
  const chartData = listData.map(weather => weather.main[props.weatherProp]);

  return (
    <td>
      <Sparklines height={120} width={180} data={chartData}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(chartData)}
      </div>
    </td>
  );
}
