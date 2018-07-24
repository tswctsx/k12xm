/**************各省学校分布情况***********8*/
var areaname="全国";
var schooeScaldata= {
    "全国":[['小学',73.06], {name: '高中', y: 5.5, sliced: true, selected: true}, ['初中',21.44]],
    "北京":[['小学',60.37], {name: '高中', y: 20.92, sliced: true, selected: true}, ['初中',18.71]],
    "河北":[['小学',80.05], {name: '高中', y: 4.01, sliced: true, selected: true}, ['初中',15.94]],
    "山西":[['小学',71.97], {name: '高中', y: 5.99, sliced: true, selected: true}, ['初中',22.03]],
    "辽宁":[['小学',67.16], {name: '高中', y: 7.00, sliced: true, selected: true}, ['初中',25.84]],
    "吉林":[['小学',75.18], {name: '高中', y: 4.23, sliced: true, selected: true}, ['初中',20.59]],
    "江苏":[['小学',59.99], {name: '高中', y: 8.49, sliced: true, selected: true}, ['初中',31.52]],
    "浙江":[['小学',58.79], {name: '高中', y: 10.32, sliced: true, selected: true}, ['初中',30.88]],
    "安徽":[['小学',70.47], {name: '高中', y: 8.49, sliced: true, selected: true}, ['初中',23.82]],
    "福建":[['小学',74.48], {name: '高中', y: 8.49, sliced: true, selected: true}, ['初中',17.87]],
    "江西":[['小学',74.48], {name: '高中', y: 4.29, sliced: true, selected: true}, ['初中',19.58]],
    "山东":[['小学',74.10], {name: '高中', y: 4.29, sliced: true, selected: true}, ['初中',21.61]],
    "河南":[['小学',81.01], {name: '高中', y: 2.81, sliced: true, selected: true}, ['初中',16.18]],
    "湖北":[['小学',67.79], {name: '高中', y: 6.70, sliced: true, selected: true}, ['初中',25.51]],
    "湖南":[['小学',67.95], {name: '高中', y: 4.76, sliced: true, selected: true}, ['初中',27.29]],
    "广东":[['小学',69.29], {name: '高中', y: 7.02, sliced: true, selected: true}, ['初中',23.69]],
    "海南":[['小学',75.00], {name: '高中', y: 5.42, sliced: true, selected: true}, ['初中',19.58]],
    "四川":[['小学',56.77], {name: '高中', y: 7.01, sliced: true, selected: true}, ['初中',36.22]],
    "贵州":[['小学',75.51], {name: '高中', y: 4.22, sliced: true, selected: true}, ['初中',20.27]],
    "云南":[['小学',84.43], {name: '高中', y: 3.47, sliced: true, selected: true}, ['初中',12.09]],
    "陕西":[['小学',71.68], {name: '高中', y: 6.31, sliced: true, selected: true}, ['初中',22.01]],
    "甘肃":[['小学',78.82], {name: '高中', y: 4.31, sliced: true, selected: true}, ['初中',16.87]],
    "青海":[['小学',70.39], {name: '高中', y: 8.39, sliced: true, selected: true}, ['初中',21.22]],
    "黑龙江":[['小学',52.05], {name: '高中', y: 9.78, sliced: true, selected: true}, ['初中',38.16]],
    "澳门":[['小学、初中、高中',100]],
    "西藏":[['小学',86.19], {name: '高中', y: 3.32, sliced: true, selected: true}, ['初中',10.49]],
    "香港":[['小学、初中、高中',100]],
    "上海":[['小学',48.46], {name: '高中', y: 16.47, sliced: true, selected: true}, ['初中',35.07]],
    "天津":[['小学',62.42], {name: '高中', y: 13.26, sliced: true, selected: true}, ['初中',24.33]],
    "广西":[['小学',81.81], {name: '高中', y: 3.62, sliced: true, selected: true}, ['初中',14.57]],
    "新疆":[['小学',71.35], {name: '高中', y: 7.16, sliced: true, selected: true}, ['初中',21.49]],
    "内蒙古":[['小学',63.79], {name: '高中', y: 10.66, sliced: true, selected: true}, ['初中',25.55]],
    "重庆":[['小学',72.68], {name: '高中', y: 6.34, sliced: true, selected: true}, ['初中',20.98]],
    "宁夏":[['小学',83.34], {name: '高中', y: 3.36, sliced: true, selected: true}, ['初中',13.29]],
    "台湾":[['小学、初中、高中',100]],
    "":[['小学',73.06], {name: '高中', y: 5.5, sliced: true, selected: true}, ['初中',21.44]],

};

teach();
schoolNum();
briPerson();
schooeScal();
worldNum();
firm();
perNum();
project();

function teach(){
    var myecharts=echarts.init(document.getElementById("teachscale1"));
    var option= {
        title: {
            text: '近8年教育经费占比(%)',
            textStyle: {
                color: '#fffff0',
                fontSize: 14,
                fontWeight:0
            },
            left:"center"
        },
        color:["#f1e007","red"],
        legend: {
            show: true,
            left:0,
            top:18,
            orient: 'vertical',
            textStyle: {
                color: "#ff1205"
            }
        },
        tooltip: {},
        radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#da0b739c',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            center: ['50%', '55%'],
            radius: 72,
            indicator: [
                { name: 2010, max: 12,min:0},
                { name: 2012, max: 12,min:0},
                { name: 2013, max: 12,min:0},
                { name: 2014, max: 12,min:0},
                { name: 2015, max: 12,min:0},
                { name: 2016, max: 12,min:0},
                { name: 2017, max: 12,min:0}
            ],
        },
        series: [{
            type: 'radar',
            data : [
                {
                    value : [3.66,3.93,4.28,4.3,4.1,4.26,5.2,4.1],
                    name : '教育经费占比'
                },
                {
                    value : [10.64,9.54,7.86,7.76,7.7,6.9,6.7,6.9],
                    name : 'GDP增长速率'
                }
            ]
        }]
    }
    myecharts.setOption(option);
}
function schoolNum(){
    var myecharts=echarts.init(document.getElementById("scnum1"));
    var option={
        title: {
            text: '2016年全国小学、中学、高中学校数量',
            left: 'center',
            textStyle: {
                color: '#fffff0',
                fontSize: 18,
                fontWeight:0
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show:false,
            textStyle: {
                color: "red",
            }
        },
        visualMap: {
            type:"piecewise",
            showLabel:true,
            splitNumber:5,
            maxOpen:true,
            min: 0,
            max: 29000,
            left: '30',
            top: 'bottom',
            text: ['高','低'],
            calculable: true,
            color:["red","yellow"],
            textStyle: {
                color: "#ef07c6"
            },
            formatter:function(aa,bb){
                if(aa>=29000){
                    return ">"+aa;
                } else {
                    return aa+"-"+bb;
                }
            }
        },
        series: [
            {
                name: '各省学校数量',
                type: 'map',
                mapType: 'china',
                label: {
                    fontSize:18,
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                right: 30,
                left:120,
                top:25,
                bottom:10,
                data:[
                    {name: '北京',value: 1630 },
                    {name: '江苏',value: 6728 },
                    {name: '广东',value: 14688 },
                    {name: '山东',value: 13531 },
                    {name: '浙江',value: 5560 },
                    {name: '河北',value: 7941 },
                    {name: '上海',value: 1554 },
                    {name: '辽宁',value: 5887 },
                    {name: '四川',value: 10536 },
                    {name: '河南',value: 28171 },
                    {name: '天津',value: 1373 },
                    {name: '黑龙江',value: 3802 },
                    {name: '湖北',value: 7941 },
                    {name: '山西',value: 8396 },
                    {name: '陕西',value: 7683 },
                    {name: '江西',value: 10940 },
                    {name: '安徽',value: 11756 },
                    {name: '福建',value: 6966 },
                    {name: '湖南',value: 12173 },
                    {name: '新疆',value: 4942 },
                    {name: '内蒙古',value: 2712 },
                    {name: '重庆',value: 4099 },
                    {name: '吉林',value: 5694 },
                    {name: '甘肃',value: 8785 },
                    {name: '宁夏',value: 1843 },
                    {name: '云南',value: 13825 },
                    {name: '贵州',value: 10354 },
                    {name: '广西',value: 12435 },
                    {name: '青海',value: 1263 },
                    {name: '海南',value: 2012 },
                    {name: '澳门',value: 0 },
                    {name: '西藏',value: 934 },
                    {name: '台湾',value: 0 },
                    {name: '香港',value: 0 }
                ]
            }
        ]
    };
    myecharts.setOption(option);
    myecharts.on("click",function(params){
        areaname=params.name;
        changeScale();
        return false;
    })
}
function briPerson(){
    var myecharts=echarts.init(document.getElementById("npnum1"));
    var option= {
        title: {
            text: '2012-2016年我国人口出生率(‰)',
            textStyle: {
                color: '#fffff0',
                fontSize: 14,
                fontWeight: 0,
            },
            left:"center"
        },
        tooltip: {
            show: true,
        },
        xAxis: {
            max:2016,
            min:2012,
            name:"年份",
            nameTextStyle: {
                color: "#08e2effc",
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'red',
                }
            },
            axisLabel:{
                color:"#31ff00"
            }
        },
        yAxis: {
            max:13,
            min:12,
            name:"出生率",
            nameTextStyle: {
                color: "#08e2effc",
            },
            axisLine: {
                lineStyle: {
                    color: 'red',
                }
            },
            splitLine: {
                show: false
            },
            axisLabel:{
                color:"#31ff00"
            }
        },
        grid: {
            left:40,
            top: 50,
            right: 40,
            bottom: 30
        },
        series: [{
            symbolSize: 10,
            color:"yellow",
            data: [
                [2012, 12.10],
                [2013, 12.08],
                [2014, 12.37],
                [2015, 12.07],
                [2016, 12.95]
            ],
            type: 'scatter'
        }]
    }
    myecharts.setOption(option);
}
function changeScale(){
    schooeScal();
}
function project(){
    var myecharts=echarts.init(document.getElementById("project1"));
    var option= {
        title: {
            text: '2016年教育细分投资项目分布',
            left: 'center',
            textStyle: {
                color: '#fffff0',
                fontSize: 14,
                fontWeight:0
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} %"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y:"bottom",
            data:['k12','职业培训','早教','兴趣教育','出国留下','高等教育','其他'],
            itemWidth: 20,
            itemHeight: 12,
            textStyle: {
                fontSize: 12,
                color:"#08c721fa"
            }
        },
        series: [
            {
                name:'2016年教育投资比例',
                type:'pie',
                center: ['60%', '55%'],
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                data:[
                    {value:18.6, name:'k12'},
                    {value:17.7, name:'职业培训'},
                    {value:13.2, name:'早教'},
                    {value:4.1, name:'兴趣教育'},
                    {value:8.2, name:'出国留下'},
                    {value:0.9, name:'高等教育'},
                    {value:38.3, name:'其他'},
                ]
            }
        ]
    }
    myecharts.setOption(option);
}
function schooeScal(){
    var chart = Highcharts.chart('scale1', {
        chart: {
            type: 'pie',
            marginBottom: 30,
            marginLeft: 30,
            marginRight: 30,
            marginTop:30,
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0,
                depth: 60,
                viewDistance: 25
            },
            backgroundColor:"rgb(0,0,0,0)"
        },
        credits: {
            enabled:false
        },
        title: {
            text: '2016年'+areaname+'中小学比例',
            style:{"fontSize":14,"color": '#fffff0'}
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    distance: -30
                }
            }
        },
        series: [{
            type: 'pie',
            name: '学校占比',
            data: schooeScaldata[areaname]
        }]
    });
}
function firm(){
    var myecharts=echarts.init(document.getElementById("profit1"));
    var option= {
        title: {
            text: '三家上市公司2017年k12业务对比',
            left: 'center',
            textStyle: {
                color: '#fffff0',
                fontSize: 14,
                fontWeight:0
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        color:["#08d4f7","#eff506"],
        legend: {
            show:true,
            top:18,
            orient: 'vertical',
            textStyle: {
                color: "#31ff00"
            }
        },
        grid: {
            left:40,
            top: 70,
            right: 40,
            bottom: 20
        },
        xAxis: [
            {
                type: 'category',
                data: ['新东方','精锐教育','新南洋'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel :{
                    interval:0,
                    color:"#08c721fa"
                },
                axisLine: {
                    lineStyle: {
                        color: 'red'
                    }
                },
                nameTextStyle: {
                    color: "#08e2effc"
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '收入:亿',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value}',
                    color:"#08c721fa"
                },
                splitLine: {
                    show:false
                },
                axisLine: {
                    lineStyle: {
                        color: 'red'
                    }
                },
                nameTextStyle: {
                    color: "#08e2effc"
                }
            }, {
                type: 'value',
                name: '比例:%',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value} ',
                    color:"#08c721fa"
                },
                splitLine: {
                    show:false
                },
                axisLine: {
                    lineStyle: {
                        color: 'red'
                    }
                },
                nameTextStyle: {
                    color: "#08e2effc"
                }
            }
        ],
        series: [
            {
                name:'k12业务收入',
                type:'bar',
                data:[67,18,12.6],
                barWidth:35,
            },
            {
                name:'总营业占比',
                type:'line',
                data:[55,87.5,72.8],
            },
]
    }
    myecharts.setOption(option);
}
function worldNum(){
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
            marginBottom: 60,
            marginLeft: 10,
            marginRight: -50,
            marginTop:0,
            options3d: {
                enabled: true,
                alpha: 14,
                beta: -15,
                depth: 60,
                viewDistance: 25
            },
            height:280,
            backgroundColor:"rgb(0,0,0,0)"
        },
        yAxis: {
            title: {
                text: '人口数量',
                margin:20,
                style:{"color":"#08e2effc"}
            },
            gridLineWidth:0,
            min: 71 ,
            labels:{
                enabled:false
                /*style:{
                    "color":"#31ff00"
                }*/
            }
        },
        xAxis: {
            categories: [2013, 2014, 2015, 2016, 2017],
            title: {
                text: '年份',
                margin:20,
                style:{"color":"#08e2effc"}
            },
            gridLineWidth:0,
            labels:{
                style:{
                    "color":"#31ff00"
                }
            }
    },
        title: {
            text: '2013-2017年全球人口总数(单位:亿)',
            verticalAlign: 'top',
            style:{"fontSize":14,"color": '#fffff0'}
        },
        credits: {
            enabled:false
        },
        plotOptions: {
            column: {
                depth: 25,
                dataLabels:{
                    enabled:true,
                    style:{
                        color:'#fffff0'
                    },
                    align:"left"
                }
            }
        },
        series: [{
            name:'<span style="font-size:12px;color:red;" >全球人口数量</span>',
            data: [71.7,72.6,73.5,74.3,75],
            color:"#00e6ff",
            dataLabels: {
                color: "red"
            }
        }]
    });

}
function perNum(){
    var myecharts=echarts.init(document.getElementById("stnum1"));
    var option={
        title: {
            text: '2012-2016年民办幼儿园、小学、\n           初中、高中在校人数',
            textStyle: {
                color: '#fffff0',
                fontSize: 14,
                fontWeight:0

            },
            left:10+"%"
        },
        color:["#ffe205","#05ff26","#05ffea","#ff0505"],
        legend: {
            show:true,
            top:35,
            textStyle: {
                color: "#31ff00"
            }
        },
        grid: {
            top:115,
            left: '3%',
            right: 40,
            bottom: '3%',
            containLabel: true
        },
        tooltip:{
            show:true,
            formatter:function (params) {
                var str=params.name+"年"+params.seriesName+":<br>"+params.value;
                return str;
            }
        },
        xAxis: {
            type: 'category',
            data: [2012,2013,2014,2015,2016],
            axisLabel:{
                color:"#31ff00"
            },
            axisLine: {
                lineStyle: {
                    color: 'red',
                }
            },
            name:"年份",
            nameTextStyle: {
                color: "#08e2effc",
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel:{
                color:"#31ff00"
            },
            axisLine: {
                lineStyle: {
                    color: 'red',
                }
            },
            name:"数量:万",
            nameTextStyle: {
                color: "#08e2effc",
            },
        },
        series: [
            {
                name:"幼儿园在校人数",
                data: [1852.74,1990.25,2125.38,2302.44,2437.66],
                type: 'line',
                smooth: true
            }, {
            name:"小学在校人数",
            data: [8852.76,8499.88,8526.1,8693.17,8846.85],
            type: 'line',
            smooth: true
        },{
            name:"初中在校人数",
            data: [3503.22,3234.04,3172,3103.32,3088.24],
            type: 'line',
            smooth: true
        },{
            name:"高中在校人数",
            data: [2481.5911,2446.9522,2415.3687,2380.9905,2371.0461],
            type: 'line',
            smooth: true
        }]
    }
    myecharts.setOption(option);
}

