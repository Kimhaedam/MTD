// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Area Chart Example
var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Fwd_Pkts/s", "Flow Duration", "conn_state", "Bwd_Pkts/s", "Init_Bwd_Win_Byts", "Flow_Pkts/s", "Protocol", "Fwd_Pkt_Len_Mean", "Tot_Fwd_Pkts", "Tot_Bwd_Pkts", "Bwd_Pkt_Len_Mean", "service", "Flow_IAT_Max", "Bwd_IAT_Tot", "Flow_IAT_Mean", "dns_rejected", "dns_RD", "Fwd_URG_Flags", "Active_Min", "Pkt_Len_Max"],
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
      data: [0.11633, 0.05954, 0.05213, 0.05052, 0.04930, 0.04393, 0.03275, 0.03239, 0.03221, 0.02372, 0.02313, 0.01898, 0.01784, 0.01353, 0.01290, 0.01237, 0.01230, 0.01192, 0.01192, 0.01168],
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
