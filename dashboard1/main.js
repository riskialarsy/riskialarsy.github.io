window.charts = window.charts || {};

function updateAllCharts(selectedData) {
    Object.values(window.charts).forEach(chart => {
        chart.series.forEach(series => {
            series.update({
                data: filterData(series.name, selectedData)
            }, false);
        });
        chart.redraw();
    });
}

function filterData(seriesName, selectedData) {
    // Contoh logika filter sederhana
    if (seriesName === 'Nilai' && window.charts.barChart) {
        return window.charts.barChart.series[0].data.map(point => 
            point.category === selectedData ? point.y : null
        );
    }
    // Tambahkan logika untuk grafik lain
    return null;
}
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Highcharts !== 'undefined') {
        if (typeof createPieChart === 'function') createPieChart();
        if (typeof createBarChart === 'function') createBarChart();
        if (typeof konstruksiGrafikLinearTrendKehadiranMahasiswa === 'function') konstruksiGrafikLinearTrendKehadiranMahasiswa();
        if (typeof createAreaChart === 'function') createAreaChart();
    } else {
        console.error('Highcharts belum dimuat');
    }
});
