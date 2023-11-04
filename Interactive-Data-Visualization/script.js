// Chart.defaults.font.size=20
const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
              label: 'Monthly Sales',
              data: [65, 59, 80, 81, 56],
              borderWidth: 1,
              
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(195, 123, 756)',
                'rgb(256, 105, 56)'
              ],
            }]
          },
          options: {
            plugins:{
                tooltips: {
                    titleFontSize:16,
                    bodyFontSize:14,
                    footerFontSize:12
                },
                title: {
                    display:true,
                    text:"Custom Chart Title",
                    padding: {
                        top: 10,
                        bottom: 20
                    },
                },
                legend: {
                    labels: {
                        font: {
                            size: 16
                        }
                    }
                }
            },
            onClick: function(){
                alert("You clicked on a bar!");
            }
          },
        });