// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Area Chart Example
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Fwd/s", "conn_state", "Flow Duration", "Bwd Packets/s", "Total Fwd Packets", "Protocol", "Fwd Packet Length Mean", "Total Bwd Packets", "Bwd Packet Length Mean", "Flow ID", "Subflow Bwd Bytes", "Init_Win_bytes_forward", "service", "Packet Length Variance", "Total Length of Fwd Packets", "Flow IAT Max", "Subflow Fwd Bytes", "Packet Length Mean", "dns_rejected", "Packet Length Std"],
    datasets: [{
      label: "Feature Importance",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0.17341, 0.08906, 0.06478, 0.05869, 0.05013, 0.04567, 0.04519, 0.03890, 0.03657, 0.02500, 0.01435, 0.01413, 0.01413, 0.01384, 0.01290, 0.01250, 0.01164, 0.01142, 0.01128, 0.01117],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'index'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {          
          maxTicksLimit: 0,
          padding: 10,
          
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        
      }
    }
  }
});
