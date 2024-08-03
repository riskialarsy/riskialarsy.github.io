function createAreaChart() {
    Highcharts.chart('areaChart', {
        chart: {
            type: 'area',
            backgroundColor: '#FFFFFF',
            style: {
                fontFamily: 'Comic Sans MS, cursive'
            }
        },
        title: {
            text: 'Tren Pendaftaran Mahasiswa Baru',
            style: {
                color: '#FF0000',
                fontWeight: 'bold',
                fontSize: '24px'
            }
        },
        subtitle: {
            text: 'Tahun 2015-2023',
            style: {
                color: '#FF0000',
                fontSize: '18px'
            }
        },
        xAxis: {
            categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            },
            labels: {
                style: {
                    color: '#FF0000'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Jumlah Mahasiswa',
                style: {
                    color: '#FF0000'
                }
            },
            labels: {
                formatter: function () {
                    return this.value;
                },
                style: {
                    color: '#FF0000'
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' mahasiswa',
            backgroundColor: '#FFFFFF',
            borderColor: '#FF0000',
            style: {
                color: '#FF0000'
            }
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#FF0000',
                lineWidth: 2,
                marker: {
                    lineWidth: 2,
                    lineColor: '#FF0000',
                    fillColor: '#FFFFFF'
                },
                fillOpacity: 0.7
            }
        },
        series: [{
            name: 'Teknik',
            data: [502, 635, 809, 947, 1402, 1200, 1300, 1400, 1500],
            color: '#FF6666'
        }, {
            name: 'Ekonomi',
            data: [106, 107, 111, 133, 221, 300, 350, 400, 450],
            color: '#FF9999'
        }, {
            name: 'Hukum',
            data: [163, 203, 276, 408, 547, 500, 550, 600, 650],
            color: '#FFCCCC'
        }, {
            name: 'Kedokteran',
            data: [18, 31, 54, 156, 339, 400, 450, 500, 550],
            color: '#FFE6E6'
        }, {
            name: 'Seni',
            data: [2, 2, 2, 6, 13, 50, 75, 100, 125],
            color: '#FFF0F0'
        }],
        credits: {
            text: 'riskialarsy.github',
            href: 'https://github.com/riskialarsy',
            style: {
                color: '#FF0000'
            }
        },
        legend: {
            itemStyle: {
                color: '#FF0000'
            }
        }
    });
}

createAreaChart();
