import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  const listData = props.cityData.list;
  const chartData = listData.map(weather => weather.main[props.weatherProp]);

  return (
    <td>
      <Sparklines height={120} width={180} data={chartData}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </td>
  );
}
