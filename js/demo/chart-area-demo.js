// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Fwd Packets/s", "Flow Duration", "Fwd IAT Min", "Total Fwd Packets", "conn_state", "Protocol", "Packet Length Std", "Total Length of Fwd Packets", "Bwd IAT Mean", "Bwd Packet Length Min", "Fwd IAT Std", "Max Packet Length", "Fwd Packet Length Mean", "PSH Flag Count", "Bwd Packet Length Mean", "Avg Fwd Segment Size", "Init_Win_bytes_forward", "Avg Bwd Segment Size", "Packet Length Variance", "Fwd IAT Max"],
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
      data: [0.08275, 0.05904, 0.05144, 0.05116, 0.04592, 0.03709, 0.02556, 0.02165, 0.02115, 0.02073, 0.01960, 0.01945, 0.01936, 0.01891, 0.01786, 0.01762, 0.01742, 0.01720, 0.01693, 0.01656],
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
