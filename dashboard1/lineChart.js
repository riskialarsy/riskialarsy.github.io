function konstruksiGrafikLinearTrendKehadiranMahasiswa() {
    Highcharts.chart('lineChart', {
        chart: {
            type: 'line',
            zoomType: 'xy',
            events: {
                load: function() {
                    this.showLoading('Sedang memproses data...');
                    setTimeout(() => {
                        this.hideLoading();
                    }, 1000);
                }
            },
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#FFE0E0']
                ]
            },
            style: {
                fontFamily: 'Comic Sans MS, Comic Neue, cursive'
            },
            borderRadius: 20,
            animation: {
                duration: 1000
            }
        },
        title: {
            text: 'Analisis Longitudinal Kehadiran Mahasiswa',
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FF0000',
                textOutline: '2px 2px #FFFFFF'
            }
        },
        subtitle: {
            text: 'Periode Akademik: Semester Ganjil Tahun 2023',
            style: {
                fontSize: '18px',
                color: '#FF4444',
                fontStyle: 'italic'
            }
        },
        xAxis: {
            categories: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4', 'Minggu 5', 'Minggu 6', 'Minggu 7', 'Minggu 8'],
            labels: {
                style: {
                    fontSize: '14px',
                    color: '#FF0000'
                },
                rotation: -45
            },
            lineColor: '#FF6666',
            tickColor: '#FF6666'
        },
        yAxis: [{
            title: {
                text: 'Persentase Kehadiran (%)',
                style: {
                    color: '#FF0000',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            min: 80,
            max: 100,
            labels: {
                format: '{value}%',
                style: {
                    color: '#FF0000',
                    fontSize: '14px'
                }
            },
            gridLineColor: '#FFCCCC'
        }, {
            title: {
                text: 'Jumlah Absolut Mahasiswa Hadir',
                style: {
                    color: '#FF0000',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            opposite: true,
            min: 0,
            max: 200,
            labels: {
                format: '{value}',
                style: {
                    color: '#FF0000',
                    fontSize: '14px'
                }
            }
        }],
        series: [{
            name: 'Persentase Kehadiran',
            data: [90, 85, 88, 92, 95, 91, 93, 97],
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FF0000'],
                    [1, '#FF6666']
                ]
            },
            lineWidth: 4,
            marker: {
                symbol: 'circle',
                radius: 8,
                fillColor: '#FF0000',
                lineWidth: 2,
                lineColor: '#FFFFFF'
            },
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            name: 'Jumlah Absolut Mahasiswa Hadir',
            data: [180, 170, 176, 184, 190, 182, 186, 194],
            yAxis: 1,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFFFFF'],
                    [1, '#FFCCCC']
                ]
            },
            lineWidth: 4,
            marker: {
                symbol: 'diamond',
                radius: 8,
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: '#FF0000'
            },
            tooltip: {
                valueSuffix: ' mahasiswa'
            }
        }],
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    format: '{y}',
                    style: {
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#FF0000',
                        textOutline: '1px 1px #FFFFFF'
                    }
                },
                enableMouseTracking: true
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderWidth: 2,
            borderColor: '#FF0000',
            borderRadius: 15,
            shadow: true,
            useHTML: true,
            formatter: function() {
                let s = '<div style="font-size: 16px; padding: 10px; font-family: Comic Sans MS, Comic Neue, cursive;">';
                s += '<span style="font-weight: bold; color: #FF0000;">' + this.x + '</span>';
                this.points.forEach(function(point) {
                    s += '<br/><span style="color:' + point.series.color.stops[0][1] + '">●</span> ' + point.series.name + ': <b>' + point.y + (point.series.name === 'Persentase Kehadiran' ? '%' : ' mahasiswa') + '</b>';
                });
                s += '</div>';
                return s;
            }
        },
        credits: {
            text: 'Sumber: riskialarsy.github',
            href: 'https://github.com/riskialarsy',
            style: {
                fontSize: '12px',
                color: '#FF0000'
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    },
                    yAxis: [{
                        title: {
                            text: null
                        }
                    }, {
                        title: {
                            text: null
                        }
                    }],
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        },
        exporting: {
            buttons: {
                contextButton: {
                    symbolStroke: '#FF0000',
                    theme: {
                        fill: '#FFFFFF'
                    }
                }
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                }
            },
            fallbackToExportServer: false
        },
        legend: {
            itemStyle: {
                fontSize: '16px',
                color: '#FF0000'
            },
            itemHoverStyle: {
                color: '#FF4444'
            }
        }
    });
}

konstruksiGrafikLinearTrendKehadiranMahasiswa();
