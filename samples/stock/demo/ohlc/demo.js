$(function() {
	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function(data) {

		// create the chart
		chart = new Highcharts.StockChart({
			chart : {
				renderTo : 'container'
			},

			rangeSelector : {
				selected : 2
			},

			title : {
				text : 'AAPL Stock Price'
			},

			series : [{
				type : 'ohlc',
				name : 'AAPL Stock Price',
				data : data,
				dataGrouping : {
					units : [[
						'week', // unit name
						[1] // allowed multiples
					], [
						'month', 
						[1, 2, 3, 4, 6]
					]]
				}
			}]
		});
	});
});
