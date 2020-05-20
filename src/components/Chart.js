import React, { useState, useEffect } from "react";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryAxis,
} from "victory";
export default (props) => {
  return (
    <VictoryChart
      style={{ marin: 0, padding: 0 }}
      domainPadding={{ y: 10 }}
      containerComponent={<VictoryZoomContainer />}
    >
      <VictoryLine
        samples={500}
        style={{ data: { stroke: "#405fb4" } }}
        y={({ x, y }) => x != 0 && 2 * x * Math.sin(2 * Math.PI * x)}
      />
      <VictoryAxis
        crossAxis
        width={200}
        height={200}
        domain={[-7, 7]}
        label="Eje x"
        style={{
          axis: { stroke: "black" },
          axisLabel: { fontSize: 12, padding: 2 },
        }}
        standalone
      />
      <VictoryAxis
        dependentAxis
        crossAxis
        width={200}
        height={200}
        domain={[-12, 12]}
        style={{
          axis: { stroke: "black" },
          axisLabel: { fontSize: 12, padding: 2 },
          grid: { stroke: "gray" },
        }}
        standalone
      />
    </VictoryChart>
  );
};
