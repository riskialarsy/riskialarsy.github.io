let charts = window.charts;

function createPieChart() {
    charts.pieChart = Highcharts.chart('pieChart', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#FFCCCB']
                ]
            },
            style: {
                fontFamily: 'Comic Neue, cursive'
            },
            borderRadius: 20,
            animation: {
                duration: 1500,
                easing: 'elastic'
            }
        },
        title: {
            text: 'Distribusi Jurusan Mahasiswa',
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FF0000',
                textOutline: '2px 2px #FFFFFF'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 45,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                        textOutline: '2px 2px #FF0000'
                    }
                },
                showInLegend: true,
                point: {
                    events: {
                        click: function() {
                            updateAllCharts(this.name);
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Jumlah Mahasiswa',
            colorByPoint: true,
            data: [{
                name: 'Teknik',
                y: 30,
                sliced: true,
                selected: true,
                color: '#FF6B6B'
            }, {
                name: 'Ekonomi',
                y: 25,
                color: '#FF8E8E'
            }, {
                name: 'Hukum',
                y: 20,
                color: '#FFA5A5'
            }, {
                name: 'Kedokteran',
                y: 15,
                color: '#FFBDBD'
            }, {
                name: 'Seni',
                y: 10,
                color: '#FFD4D4'
            }]
        }],
        credits: {
            text: 'riskialarsy.github',
            href: 'https://github.com/riskialarsy',
            style: {
                fontSize: '12px',
                color: '#FF0000'
            }
        },
        legend: {
            itemStyle: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#FF0000'
            },
            itemHoverStyle: {
                color: '#FF4500'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} mahasiswa</b>',
            style: {
                fontSize: '14px',
                fontFamily: 'Comic Neue, cursive'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#FF0000',
            borderRadius: 15
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    }
                }
            }]
        }
    });
}

window.createPieChart = createPieChart;

createPieChart();
