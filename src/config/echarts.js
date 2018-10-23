const echarts = (r) =>{
    var echarts = require('echarts');
    var myChart = echarts.init(r);
    var options = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    // restore: {},
                    // saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };
    myChart.setOption(options,true);
}
export default echarts;