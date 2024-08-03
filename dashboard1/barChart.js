function createBarChart() {
    Highcharts.chart('barChart', {
        chart: {
            type: 'column',
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#FFEBEE']
                ]
            },
            borderRadius: 20,
            animation: {
                duration: 2500,
                easing: 'easeOutBounce'
            },
            style: {
                fontFamily: 'Comic Neue, cursive'
            }
        },
        title: {
            text: 'Nilai Rata-rata per Semester',
            style: {
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#D32F2F',
                textOutline: '2px 2px #FFCDD2'
            }
        },
        xAxis: {
            categories: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
            crosshair: true,
            labels: {
                style: {
                    color: '#B71C1C',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            lineColor: '#FFCDD2',
            tickColor: '#FFCDD2'
        },
        yAxis: {
            min: 0,
            max: 4,
            title: {
                text: 'Nilai Rata-rata',
                style: {
                    color: '#D32F2F',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            gridLineColor: '#FFCDD2',
            labels: {
                style: {
                    color: '#B71C1C',
                    fontSize: '14px'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:18px; font-weight:bold;">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            backgroundColor: 'rgba(255, 235, 238, 0.9)',
            borderColor: '#EF5350',
            borderRadius: 15,
            shadow: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                borderRadius: 10,
                colorByPoint: true,
                colors: ['#EF5350', '#E57373', '#EF9A9A', '#FFCDD2', '#FFEBEE', '#FFCDD2'],
                animation: {
                    duration: 2500,
                    easing: 'easeOutElastic'
                }
            }
        },
        series: [{
            name: 'Nilai',
            data: [3.2, 3.4, 3.6, 3.5, 3.7, 3.8]
        }],
        credits: {
            text: 'riskialarsy.github',
            href: 'https://github.com/riskialarsy',
            style: {
                color: '#B71C1C',
                fontSize: '12px'
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        enabled: false
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    }
                }
            }]
        }
    });
}

createBarChart();
