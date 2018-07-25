/*************中国地图*********/






var areaname="全国";
var areavalue="350";
function zheXian() {
    // var myecharts=echarts.init(document.getElementById('echarts1'));
    var myecharts=echarts.init($('#left_top')[0]);
    var options= {
        // title: {
        //     text:'k12线上教育的的发展速度及预测',
        //
        // },
        title: {
            text: 'k12线上教育的发展速度及预测',
            top:0,
            left:left,

            textStyle:{
                color:"#ffffff",
                fontSize:17,
            }

        },

        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                },
            },
            textStyle: {
                color: 'red',}
        },
        legend: {
            data:['预测的发展速度','实际发展速度'],
            right:20,
            top:30
        },


        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type: 'category',
                boundaryGap: true,
                data: [2013, 2014, 2015, 2016, 2017, 2018],


            }
        ],
        yAxis : [
            {

                axisLabel: {
                    formatter: '{value} %'
                },


            }
        ],
        series : [
            {
                name:'预测的发展速度',
                type:'line',
                // stack: '总量',
                // areaStyle: {normal: {}},
                data:[13,15,17,19,22,24],
                lineStyle: {color:'red'},
                itemStyle: {color:'yellow'},
                emphasis:{itemStyle: {
                        color: 'blue',
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid'}}
            },
            {
                name:'实际发展速度',
                type:'line',
                // stack: '总量',
                // areaStyle: {normal: {}},
               data:[14,17,19,22,16,18],
                lineStyle: {color:'yellow'},
                itemStyle: {color:'green'},
                emphasis:{itemStyle: {
                        color: 'blue',
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid'}}
                },

        ]
    };
    myecharts.setOption(options);

}
function china() {

    var myChart = echarts.init($('#con_top')[0]);
    option = {
        title: {
            text: 'k12线上教育各省分布图',
            top:20,
            left: 'center',
            textStyle:{
                color:"#ffffff",
                fontSize:25,
            }
        },
        visualMap: {
            min: 0,
            max: 140,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: false,
            orient: 'horizontal',
            inRange: {
                color: ['#ffffff', 'blue'],
                symbolSize: [30, 100]
            }
        },
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
            // position: function (point, params, dom, rect, size) {
            //   return [point[0], point[1]];
            // },
        },
        series: [{
            name: 'K12在线教育的分布',
            type: 'map',
            mapType: 'china',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[{
                name: '北京',
                value: 136,
                tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
            },
                {
                    name: '天津',
                    value: 40,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '上海',
                    value: 67,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '重庆',
                    value: 14,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '河北',
                    value: 22,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '河南',
                    value: 24,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '云南',
                    value: 1,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '辽宁',
                    value: 27,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '黑龙江',
                    value:1,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '湖南',
                    value: 22,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '安徽',
                    value: 3,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '山东',
                    value: 4,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '新疆',
                    value: 0,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '江苏',
                    value: 30,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '浙江',
                    value:12,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '江西',
                    value: 11,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '湖北',
                    value: 25,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '广西',
                    value: 12,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '甘肃',
                    value: 11,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '山西',
                    value: 8,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '内蒙古',
                    value: 0,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '陕西',
                    value:2,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '吉林',
                    value:3,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '福建',
                    value: 23,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '贵州',
                    value: 1,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '广东',
                    value: 22,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '青海',
                    value: 0,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '西藏',
                    value:0,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '四川',
                    value: 8,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '宁夏',
                    value: 6,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '海南',
                    value: 15,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '台湾',
                    value: 18,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '香港',
                    value: 1,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
                {
                    name: '澳门',
                    value: 1,
                    tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                },
            ]

        },]
    }
    myChart.setOption(option);
    var count = 0;
    var timeTicket = null;
    var dataLength = option.series[0].data.length;
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }, 1000);

    myChart.on('mouseover', function (params) {
        // console.log(params)
        clearInterval(timeTicket);
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
    });
    myChart.on('mouseout', function (params) {

        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            count++;
        }, 1000);
    });
    myChart.on('click',function(things){
        // console.log(things.name);

       // area=areaname=""?"全国":things.name;

        areaname=things.name;
        areavalue=things.value;
        refresh(areaname,areavalue);
    });
}
function refresh(areaname,areavalue){
    // console.log(areaname);
    yiBiao(areaname,areavalue)

}
function bingMap() {
    var myecharts = echarts.init($('#right_top')[0]);
    var options ={
        // title: {
        //     text: 'k12的分类信息表',
        //     x: 'center'
        // },

        title: {
            text: 'k12线上教育类型图',
            top:0,
            left:75,
            textStyle:{
                color:"#ffffff",
                fontSize:17,
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['语数英','其他科目','美术音乐体育','留学培训','益智培训','技能培训','其他类培训'],
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '57%',
                center: ['60%', '70%'],
                data:[
                    {value:'4062345',name:'语数英'},
                    {value:'2280444',name:'其他科目'},
                    {value:'830442',name:'美术音乐体育'},
                    {value:'860327',name:'留学培训'},
                    {value:'580213',name:'益智培训'},
                    {value:'400312',name:'技能培训'},
                    {value:'120321',name:'其他类培训'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myecharts.setOption(options);

}
function zhuZhuang(){
    var myecharts = echarts.init($('#right_foot')[0]);

    var options ={
        title: {
            text: 'k12线上教育省份排行榜',
            top:0,
            left:75,
            textStyle:{
                color:"#ffffff",
                fontSize:17,
            }
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type: 'category',
                data: ['北京',"上海","天津","江苏","辽宁","湖北","河南"]
                ,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
            }
        ],
        series : [
            {
                name: 'k12在线教育的产品个数',
                type: 'bar',
                barWidth: '60%',
                data:[136,67,40,30,27,25,24]

            }
        ]
    };

    myecharts.setOption(options);
}
function yiBiao(areaname,areavalue){
    var myChart = echarts.init($('#con_foot')[0]);
    var option = {
        title:{
            show:true,
            text:`k12线上教育${areaname}的占比`,
            x:'center',
            textStyle:{
                fontSize:20,
                fontFamily:'微软雅黑',
                color:'#ffffff',
            }
        },
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        // toolbox: {
        //     feature: {
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        series: [
            {
                name: '',
                type: 'gauge',
                splitNumber:10,
                detail: {formatter:'{value}%',
                    offsetCenter:[0,"60%"]},
                data: [{value:(areavalue/350*100).toFixed(2)}],


            }
        ]
    };

    myChart.setOption(option);
}
function bingHuan(){
    var myChart = echarts.init($('#left_foot')[0]);
    var option = {
        title: {
            text: 'k12线上教育城市分布图',
            top:0,
            left:75,
            textStyle:{
                color:"#ffffff",
                fontSize:17,
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            top:20,
            data:['一线城市','二线城市','三线城市','四线城市'],
        },
        series: [
            {
                name: 'k12线上教育的占比',
                type: 'pie',
                radius: ['33%','55%'],
                //百分之50是内半径，75%为外半径
                center: ['50%', '60%'],
                data:[
                    {value:32434457, name:'一线城市'},
                    {value:13567889, name:'二线城市'},
                    {value:9909023, name:'三线城市'},
                    {value:6234334, name:'四线城市'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}


zheXian();
china();
bingMap();
zhuZhuang();
yiBiao(areaname,areavalue);
bingHuan();