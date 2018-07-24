
var areaname='全国';
var myechartsUrban,myechartsMap,myechartsInput,myechartsnumber;

;(function($){
    $.fn.textSlider = function(options){
        var defaults = { //初始化参数
            scrollHeight:25,
            line:1,
            speed:'normal',
            timer:2000
        };
        var opts = $.extend(defaults,options);
        this.each(function(){
            var timerID;
            var obj = $(this);
            var $ul = obj.children("ul");
            var $height = $ul.find("li").height();
            var $Upheight = 0-opts.line*$height;
            obj.hover(function(){
                clearInterval(timerID);
            },function(){
                timerID = setInterval(moveUp,opts.timer);
            });
            function moveUp(){
                $ul.animate({"margin-top":$Upheight},opts.speed,function(){
                    for(i=0;i<opts.line;i++){ //只有for循环了才可以设置一次滚动的行数
                        $ul.find("li:first").appendTo($ul);
                    }
                    $ul.css("margin-top",0);
                });
            };
            timerID = setInterval(moveUp,opts.timer);
        });
    };
})(jQuery);

$(function(){
    $("#box").textSlider({
        // line:2
    });
});

drawMap();
drawurban(10.36);
drawstudent();
drawInput();
drawnumber();
openHomepage();
$(window).on('resize',function(){
    myechartsUrban.resize();
    myechartsMap.resize();
    myechartsInput.resize();
    myechartsnumber.resize();
});
function refresh(areaname){
    var ratedata=[
        {name:"北京",value:1.6},
        {name:"天津",value:5.7},
        {name:"河北",value:11.42},
        {name:"陕西",value:11.1},
        {name:"内蒙古",value:9.48},
        {name:"辽宁",value:7.32},
        {name:"吉林",value:2.76},
        {name:"黑龙江",value:3.8},
        {name:"上海",value:-0.7},
        {name:"江苏",value:13.42},
        {name:"浙江",value:9.4},
        {name:"安徽",value:11.49},
        {name:"福建",value:10.6},
        {name:"江西",value:11.74},
        {name:"山东",value:11.42},
        {name:"河南",value:12.47},
        {name:"湖北",value:12.9},
        {name:"湖南",value:10.6},
        {name:"广东",value:5.83},
        {name:"广西",value:9.92},
        {name:"海南",value:8.78},
        {name:"重庆",value:12.61},
        {name:"四川",value:11.81},
        {name:"贵州",value:15.04},
        {name:"云南",value:12.03},
        {name:"西藏",value:7.66},
        {name:"山西",value:13.2},
        {name:"甘肃",value:11.1},
        {name:"青海",value:10.7},
        {name:"宁夏",value:11.3},
        {name:"新疆",value:8.71}
    ];
// console.log(ratedata)
    for(var i=0;i<ratedata.length;i++){
        if(areaname==ratedata[i].name){
            drawurban(ratedata[i].value);
            break;
        }
    }
}
function drawMap(){
    myechartsMap = echarts.init(document.getElementById('map'));
    var optionMap = {
        title: {
            text: '【各省城镇化进程】',
            left: 'center',
            top:25,
            textStyle:{
                color:'#fff',
                fontSize:18,
                fontWeight:'normal'
            }
        },
        legend:{
            show:false,
            data:['重点'],
            textStyle:{
                color:'#bb1b1c'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        //值域导航
        visualMap: {
            show:false,
            type:'continuous',
            min: 20,
            max: 88,
            maxOpen:true,
            text: ['高','低'],
            color:['#bf444c','#f6efa6'],
            calculable: true
        },
        series: [
            {
                name: '城镇率',
                type: 'map',
                mapType: 'china',
                roam: false,
                showLegendSymbol:true,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                right:'-10%',
                data:[
                    {name: "北京", value: 86.5},
                    {name:"天津",value:82.93},
                    {name:"河北",value:53.32},
                    {name:"陕西",value:56.21},
                    {name:"内蒙古",value:61.1},
                    {name:"辽宁",value:67.37},
                    {name:"吉林",value:55.97},
                    {name:"黑龙江",value:59.2},
                    {name: "上海", value: 87.9},
                    {name:"江苏",value:67.72},
                    {name: "浙江", value: 67},
                    {name:"安徽",value:51.99},
                    {name: "福建", value: 63.6},
                    {name: "江西", value: 53.1},
                    {name:"山东",value:59.02},
                    {name: "河南", value: 48.5},
                    {name: "湖北", value: 58.1},
                    {name:"湖南",value:52.75},
                    {name: "广东", value: 69.2} ,
                    {name:"广西",value:48.08},
                    {name:"海南",value:56.78},
                    {name: "重庆", value: 62.6},
                    {name:"四川",value:49.21},
                    {name:"贵州",value:44.15},
                    {name:"云南",value:45.03},
                    {name:"西藏",value:29.56},
                    {name:"山西",value:55.34},
                    {name:"甘肃",value:44.69},
                    {name:"青海",value:51.63},
                    {name:"宁夏",value:56.29},
                    {name:"新疆",value:48.35}

                ]
            }
        ]
    };
    myechartsMap.setOption(optionMap);
    //地图点击事件
    myechartsMap.on('click',function(params){
        // console.log(params.data.name);
        areaname=params.data.name;
        refresh(areaname);
    });
}
function drawurban(da){
     myechartsUrban = echarts.init(document.getElementById('urban-rate'));
    var optionUrban=  {
        title:{
            show:true,
            text:'【'+areaname+' 城镇率增长量】',
            x:'center',
            // y:'20',
            textStyle:{
                color:'#fff',
                fontSize:18,
                fontWeight:'normal'
            }

        },

        tooltip : {
            formatter: "{b} : {c}%"
        },
        series: [
            {
                // name:,
                type: 'gauge',
                center:['50%','55%'],
                radius: '80%',

                axisLine:{
                    show:true,
                    lineStyle:{
                        color:[[0.2,'#c23531'],[0.8,'#63869e'],[1,'#91c7ae']],
                        width:18
                    }
                },
                axisTick: {
                    length: 10
                },
                axisLabel: {
                    distance: 0
                },
                title:{
                    show:true,
                    offsetCenter:[0,'85%'],
                    textStyle:{
                        color:'#fff',
                        fontSize:14
                    }
                },
                detail: {
                    formatter:'{value}%',
                    offsetCenter: [0, '60%'],
                    fontWeight: 'bold',
                    fontSize: 24,
                    padding: 10},
                data: [
                    //一条数据代表一个指针
                    {value: da}
                ]
            }
        ]
    };
    myechartsUrban.setOption(optionUrban);
}
function drawstudent(){
     myechartsStudent = echarts.init(document.getElementById('student-number'));
   var  optionStudent = {
       title : {
           text: '【高等学院招生情况】',
           x:'left',
           textStyle:{
               color:'#fff',
               fontSize:18,
               fontWeight:'normal'
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
        toolbox: {

            feature: {
                // dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                // restore: {show: true},
                // saveAsImage: {show: true}


            }
        },
       grid: {
           right:'10%',
           left:'16%',
           bottom:'13%',
           top:'23%'
       },

        legend: {
           top:'13%',
            right:'2%',
            textStyle:{
                color:'#fff',
                //     fontSize:16,
                // fontWeight:'normal'
            },
            data:['985、211总和','本科一批','高等院校']
        },
        xAxis: [
            {
                type: 'category',
                nameRotate:'30%',
                // axisLine: {
                //     lineStyle: {
                //         color: '#fff'
                //     }
                // },
                data: ['天津', '河北', '内蒙古', '江苏', '安徽', '福建', '河南', '广东', '广西', '重庆'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel: {
                    rotate: 30,
                    textStyle:{
                        color:'white'
                    }
                },

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '录取率',
                // min: 0,
                // max: 250,
                // interval: 50,
                axisLabel: {
                    formatter: '{value} %',
                    textStyle:{
                        color:'white'
                    }
                },
                // axisLine: {
                //     lineStyle: {
                //         color: '#fff'
                //     }
                // }
            }
            // {
            //     type: 'value',
            //     name: '温度',
            //     // min: 0,
            //     // max: 25,
            //     // interval: 5,
            //     axisLabel: {
            //         formatter: '{value} °C'
            //     }
            // }
        ],
        series: [
            {
                name:'985、211总和',
                type:'bar',
                data:[18.49,5.90,7.57,6.66,5.20,7.38,5.29,5.95,4.06,7.51]
            },
            {
                name:'本科一批',
                type:'bar',
                data:[25.02,16.45,13.17,7.51,15.90,18.81,8.91,11.50,8.10,13.50]
       },
            {
                name:'高等院校',
                type:'bar',
                data:[94.03,91 ,94.42 ,91.91,83.60,85,84.14,81,89.87,89.16]
            },
            // {
            //     name:'平均温度',
            //     type:'line',
            //     yAxisIndex: 1,
            //     data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            // }
        ]
    };
    myechartsStudent.setOption(optionStudent);
}
function drawInput(){
     myechartsInput = echarts.init(document.getElementById('Family-input'));
    var optionInput = {
        title : {
            text: '【居民教育支出】',
            x:'left',
            textStyle:{
                color:'#fff',
                fontSize:18,
                fontWeight:'normal'
            }
        },
        tooltip : {
            trigger: 'axis',
            formatter:function(params)
            {
                var relVal = params[0].name;
                for (var i = 0, l =2; i < l; i++) {
                    relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"万元";
                }
                relVal += '<br/>' + params[2].seriesName + ' : ' + params[i].value+"千元";
                return relVal;
            },

            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            top:'13%',
            // right:'2%',
            textStyle:{
                color:'#fff',
                //     fontSize:18,
                // fontWeight:'normal'
            },
            data:['人均可支配收入','平均工资','人均教育支出']
        },
        grid: {
            top:'25%',
            left: '5%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value',
                axisLabel: {

                    textStyle:{
                        color:'white'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
                // nameTextStyle: {
                //     color:'#fff'}
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                axisLabel: {
                    textStyle:{
                        color:'white'
                    }
                },
                // axisLine: {
                //     lineStyle: {
                //         color: '#fff'
                //     }
                // },
                data : [2013,2014,2015,2016]
            }
        ],
        series : [
            {
                name:'平均工资',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:[5.1483,5.6360,6.2029,6.7569]
            },
            {
                name:'人均可支配收入',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[2.6467,2.8844,3.1195,3.3616]
            },

            {
                name:'人均教育支出',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[-1.988,-2.142,-2.383,-2.638]
            }

        ]
    };
    myechartsInput.setOption(optionInput);
}
function drawnumber(){
     myechartsnumber = echarts.init(document.getElementById('course-number'));
    var optionnumber = {
        title : {
            text: '【学生参加培训班个数】',
            x:'center',
            textStyle:{
                color:'#fff',
                    fontSize:18,
                fontWeight:'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x:'right',
            // y: 'bottom',
            bottom: '15%',
            textStyle:{
                color:'#fff',
                //     fontSize:16,
                // fontWeight:'normal'
            },
            data:['1','2','3','4']
        },
        series: [
            {
                name:'参加培训班个数',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: "{d}%"
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
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
                    {value:37.8, name:'1'},
                    {value:36.7, name:'2'},
                    {value:18.8, name:'3'},
                    {value:6.7, name:'4'},

                ],
                // itemStyle: {
                //     emphasis: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };
    myechartsnumber.setOption(optionnumber);
}
function openHomepage(){
    $("#header1").on("click",function () {
        window.open("homePage.html")
    })
}
