import React from "react";

import { useHistory } from "react-router";
import { HighChart, UpperAppBar } from "../components";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 2),
  },

  paper: {
    padding: theme.spacing(0),
    margin: theme.spacing(0, 0, 2),
  },
}));

export default function DashboardScreen() {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.push("/admin");
  };

  const options = {
    credits: {
      enabled: false,
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: 300,
    },
    title: {
      text: "Sales Analytic",
      align: "left",
      style: {
        fontSize: "24px",
        color: "#5c5c5c",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        minPointSize: 50,
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Chrome",
            y: 61.41,
          },
          {
            name: "Internet Explorer",
            y: 11.84,
          },
          {
            name: "Firefox",
            y: 10.85,
          },
          {
            name: "Edge",
            y: 4.67,
          },
          {
            name: "Safari",
            y: 4.18,
          },
          {
            name: "Sogou Explorer",
            y: 1.64,
          },
          {
            name: "Opera",
            y: 1.6,
          },
          {
            name: "QQ",
            y: 1.2,
          },
          {
            name: "Other",
            y: 2.61,
          },
        ],
      },
    ],
  };

  const options0 = {
    chart: {
      plotShadow: false,

      height: 320,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Sales Analytic",
      align: "left",
      style: {
        fontSize: "24px",
        color: "#5c5c5c",
      },
    },

    yAxis: {
      title: {
        enabled: false,
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <HighChart options={options} />
        </Paper>
        <Paper>
          <HighChart options={options0} />
        </Paper>
      </div>
    </div>
  );
}