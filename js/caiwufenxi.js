var area;
var areaname="all";
$(function () {

    var str=parseInt($(".ren3").html());
    var std=parseInt($(".ren4").html());
    setInterval(function(){
        var date = new Date();
        var str = show_num(date.getHours())+":"+show_num(date.getMinutes())+":"+show_num(date.getSeconds());
        $("#time_label").html(date.toLocaleDateString()+" "+str);
    },1000);
    function show_num(n){
        var str2;
        if(n<10){
            str2 = "0"+n;
        }else{
            str2 = n;
        }
        return str2;
    }
    setInterval(function () {
       var  s=Math.ceil(Math.random()*10)*0.01;
       var  d=Math.ceil(Math.random()*10)*0.01;
        $(".ren3").html((str+=s).toFixed(2));
        $(".ren4").html((std+=d).toFixed(2));
    },1000);
});
$(function () {
    var str=[],std=[],stb=[],stf=[];
    var   url="http://localhost:8080/ajaxsys/o.do";
    var sql="SELECT\n" +
        "time1,\n" +
        "cunhuoday,\n" +
        "liuzhuanlv,\n" +
        "zongzhunlv\n" +
        "FROM\n" +
        "worksheet\n" +
        "ORDER BY\n" +
        "time1\n";
    var  data={"sql":sql};
    $.ajax(
        {
            url:url,
            type:"get",
            data:data,
            success:function (d) {
                for(var i=0;i<d.length;i++){
                    str.push(d[i].time1);
                    std.push(d[i].cunhuoday);
                    stb.push(d[i].liuzhuanlv);
                    stf.push(d[i].zongzhunlv);
                }
                yunying(str,std,stb,stf)

            }
        }
    )

});
//地图
$(function () {
    var str = [];
    var url = "http://localhost:8080/ajaxsys/o.do";
    var sql = "SELECT\n" +
        "city as name,numbei as value\n" +
        "FROM\n" +
        "sheet1";
    var data = {"sql": sql};
    $.ajax({
        url: url,
        type: "get",
        data: data,
        success: function (d) {
            console.log(d);

            for (var i = 0; i < d.length; i++) {
                str.push({"name": d[i].name, "value": d[i].value})
            }
            drawMap(str)
        }
    });


});
//复购率
$(function () {
    var   url="http://localhost:8080/ajaxsys/o.do";
    var   sql="SELECT\n" +
        "ROUND(SUM(fugou)/COUNT(city),2) as value\n" +
        "FROM\n" +
        "sheet1";
    var data={"sql":sql};
    $.ajax({
        url:url,
        type:"get",
        data:data,
        success:function (d) {
            fugou(d[0].value)
        }


    })
});
//复购点击函数
function res() {
    console.log(areaname);
    var   url="http://localhost:8080/ajaxsys/o.do";
    var   sql="SELECT\n" +
        "fugou\n" +
        "FROM\n" +
        "sheet1\n" +
        "WHERE\n" +
        "city='"+areaname+"'";
    var data={"sql":sql};

    $.ajax({
        url:url,
        type:"get",
        data:data,
        success:function (d) {
            fugou(d[0].fugou)
        }
    })
}
//利润
$(function () {
    var str=[],std=[],stb=[];
    var   url="http://localhost:8080/ajaxsys/o.do";
    var   sql="SELECT\n" +
        "time1,\n" +
        "jinglirun,\n" +
        "ROUND(jinglv*100,2) as lilv\n" +
        "FROM\n" +
        "totle\n" +
        "ORDER BY\n" +
        "time1";
    var data={"sql":sql};
    $.ajax({
        url:url,
        type:"get",
        data:data,
        success:function (d) {
            for(var i=0;i<d.length;i++){
                str.push(d[i].time1);
                std.push(d[i].jinglirun);
                stb.push(d[i].lilv);
            }
            drawlirun(str,std,stb)
        }



    })
});
//偿债能力
$(function(){
    var str=[],std=[],stb=[],stf=[];
    var url="http://localhost:8080/ajaxsys/o.do";
    var sql="SELECT\n" +
        "time1,\n" +
        "liudonglv,\n" +
        "sudonglv,\n" +
        "chanlv\n" +
        "FROM\n" +
        "worksheet\n"+
        "ORDER BY\n"+
        "time1\n";


    var data={"sql":sql};
    $.ajax({
        url:url,
        type:"get",
        data:data,
        success:function(d){
            for(var i=0;i<d.length;i++)
            {
                str.push(d[i].liudonglv);
                std.push(d[i].time1);
                stb.push(d[i].sudonglv);
                stf.push(d[i].chanlv);
            }
            changzhai(std,stb,str,stf);

        }
    })
});
openHomepage();
//地图
function drawMap(value){
    myechartsMap = echarts.init(document.getElementById('china'));
    var optionMap = {
        title: {
            left: 'center',
            top:25,
            textStyle:{
                color:'#fff',
                fontSize:18,
                fontWeight:'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#9abbde'
                }

            },

            backgroundColor:'rgba(12,0,38,0.7)',
            textStyle:{
                color: '#c8cfe9'
            }
        },
        //值域导航
        visualMap: {
            show:false,
            type:'continuous',
            min: 0,
            max: 130,
            maxOpen:true,
            text: ['高','低'],
            color: ['orangered','yellow','lightskyblue'],
            calculable: true
        },
        series: [
            {
                name: '教学点',
                type: 'map',
                mapType: 'china',
                roam: false,
                showLegendSymbol:true,
                // label: {
                //     normal: {
                //         show: true
                //     },
                //     emphasis: {
                //         show: true
                //     }
                // },
                data:value
            }
        ]
    };
    myechartsMap.setOption(optionMap);
   // 地图点击事件
    myechartsMap.on('click',function(params){
        areaname=params.name;
        res()
    });
}
//复购
function fugou(s) {
    area=areaname=="all"?"全国":areaname;
    myechartsfugou = echarts.init(document.getElementById('right'));
    var fugou_option={
        title:{
            text:area+'复购率',
            textStyle:{
                color:'#bee3f3'
            },
            left:'center'
        },
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },

        series: [
            {
                name: '复购率',
                type: 'gauge',
                detail: {
                    formatter:'{value}%',
                    color: '#c8cfe9',
                    offsetCenter: [0, '70%'],
                    fontSize:20,
                    fontWeight:'bold',
                    width:50,
                    height:30,
                    backgroundColor:'#2551ba',
                    borderRadius: 8
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:[[0.2,'#5aa488'],[0.8,'#84b62b'],[1,'#bb9c0c']],
                        width:20
                    }
                },
                splitLine: {
                    show: true,
                    length: 20
                },
                pointer: {
                    show: true,
                    length: '80%',
                    width: 5
                },
                itemStyle: {
                    color: '#c8cfe9'
                },
                data: [{value:s}],
                radius:100,
                splitNumber:5


            }

        ]
    };


    myechartsfugou.setOption(fugou_option)
}
//偿债能力
function changzhai(t,s,l,c) {
    myechartschangzhai = echarts.init(document.getElementById('changzhai'));
    var Chang_option=
        option = {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#9abbde'
                    }

                },

                backgroundColor:'rgba(12,0,38,0.7)',
                textStyle:{
                    color: '#c8cfe9'
                }
            },

            legend: {
                type:'scroll',
                pageButtonItemGap:40,
                data:['流动比率','速动比率','产权比率'],
                top:20,
                left:40,
                textStyle:{
                    color:"#c8cfe9"
                },
                padding: [
                    15,  // 上
                    0, // 右
                    25,  // 下
                    0 // 左
                ]
            },
            xAxis: [
                {
                    type: 'category',
                    data:t,
                    position:'bottom',
                    axisLabel: {
                        show: true,
                        interval:2,
                        inside: false,
                        rotate: 0,
                        color:'#e2edff'
                    },
                    axisLine:{
                        lineStyle: {
                            color: '#6e7aa2',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#172248', '#172248']
                        }
                    }



                }


            ],
            yAxis: [
                {
                    type: 'value',
                    nameTextStyle: {
                        color:'#eae9ef'


                    },
                    min: 0,
                    max: 5,
                    axisLabel: {
                        formatter: '{value}',
                        show: true,
                        interval:0,
                        inside: false,
                        rotate: 0,
                        color:'#e2edff'
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    nameTextStyle: {
                        color:'#eae9ef'


                    },
                    min: 0,
                    max: 10,
                    axisLabel: {
                        formatter: '{value}%',
                        show: true,
                        interval:0,
                        inside: false,
                        rotate: 0,
                        color:'#e2edff'
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: ['#172248', '#172248']
                        }
                    }
                }
            ],
            series: [
                {
                    name:'流动比率',
                    type:'bar',
                    data:s,
                    itemStyle: {   //配置样式，设置每个柱子的颜色
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#00badb' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#a212e5' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                        }





                        },

                {
                    name:'速动比率',
                    type:'bar',
                    data:l,
                    itemStyle: {   //配置样式，设置每个柱子的颜色
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#03bb85' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#e39227' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                {
                    name:'产权比率',
                    type:'line',
                    yAxisIndex: 1,
                    data:c,
                    itemStyle: {   //配置样式，设置每个柱子的颜色
                        color:'#d3b157'
                    }
                }
            ]
        };



    myechartschangzhai.setOption(Chang_option);
}
//运营能力
function yunying(t,cday,cunhuo,liudong) {
    myechartsyunying = echarts.init(document.getElementById('yunying'));
    var Yun_option= {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#9abbde'
                }

            },
            backgroundColor:'rgba(12,0,38,0.7)',
            textStyle:{
                color: '#c8cfe9'
            }
        },
        legend: {
            data: ['存货天数', '流动周转率', '总周转率'],
            top: 30,
            textStyle: {
                color: "#c8cfe9"
            }

        },

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: t,
                position: 'bottom',
                axisLabel: {
                    show: true,
                    interval: 0,
                    inside: false,
                    rotate: 0,
                    color: '#e2edff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#6e7aa2',
                        width: 2,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    show: true,
                    interval: 0,
                    inside: false,
                    rotate: 0,
                    color: '#e2edff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#6e7aa2',
                        width: 2,
                        type: 'solid'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#172248', '#172248']
                    }

                }

            }
        ],
        series: [
            {
                name: '存货天数',
                type: 'line',
                // stack: '总量',
                markPoint: {
                    symbolSize: 30,
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                itemStyle: {
                    color: '#5abee0'
                },
                data: cday
            },
            {
                name: '流动周转率',
                type: 'line',
                // stack: '总量',
                markPoint: {
                    symbolSize: 30,
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                itemStyle: {
                    color: '#c6a74a'
                },
                data: cunhuo
            },
            {
                name: '总周转率',
                type: 'line',
                markPoint: {
                    symbolSize: 30,
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                // stack: '总量',
                itemStyle: {
                    color: '#990cff'
                },

                data: liudong
            }

        ]

      };
    myechartsyunying.setOption(Yun_option)
}
//利润
function drawlirun(t,std,stb) {
    myechartslirun = echarts.init(document.getElementById('yingshou'));
    var lirun_option= {

        legend: {
            data: ['净利润', '净利率'],
            top: 30,
            textStyle: {
                color: "#c8cfe9"
            }

        },


        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#9abbde'
                }

            },

            backgroundColor:'rgba(12,0,38,0.7)',
            textStyle:{
                color: '#c8cfe9'
            }
        },
        toolbox: {
            show : true,
            left:10,
            top:10,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']}
            }
        },
        calculable : true,
        xAxis : [
            {
                type: 'category',
                boundaryGap: false,
                data: t,
                position: 'bottom',
                axisLabel: {
                    show: true,
                    interval: 2,
                    inside: false,
                    rotate: 0,
                    color: '#e2edff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#6e7aa2',
                        width: 2,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    show: true,
                    interval: 0,
                    inside: false,
                    rotate: 0,
                    color: '#c8cfe9'
                },
                axisLine: {
                    lineStyle: {
                        color: '#6e7aa2',
                        width: 2,
                        type: 'solid'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#172248', '#172248']
                    }

                }

            },


            {
                type: 'value',
                min: 0,
                max: 50,
                axisLabel: {
                    formatter: '{value}',
                    show: true,
                    interval: 0,
                    inside: false,
                    rotate: 0,
                    color: '#c8cfe9'
                },
                axisLine: {
                    lineStyle: {
                        color: '#6e7aa2',
                        width: 2,
                        type: 'solid'
                    }
                },


                splitLine: {
                    show: false,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#172248', '#172248']
                    }

                }
            }
        ],
        series : [
            {
                name:'净利润',
                type:'bar',
                data:std,
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // },
                barWidth:10,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#2552b7' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#7eb444' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false

                    }
                }

            },
            {
                name:'净利率',
                type: 'line',
                yAxisIndex: 1,
                data:stb,
                label: {
                    show: false,
                    position: 'inside',
                    color: '#fff'
                },
                itemStyle: {
                    color: '#d3b157'
                }

            }

        ]

    };
    myechartslirun.setOption(lirun_option)
}
//业务能力
function yewu() {
    myecharts = echarts.init(document.getElementById('yewu'));
   var  option = {

       tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c} ({d}%)",
           axisPointer: {
               type: 'cross',
               crossStyle: {
                   color: '#9abbde'
               }

           },
           backgroundColor:'rgba(12,0,38,0.7)',
           textStyle:{
               color: '#c8cfe9'
           }
       },
       color:['#76a942', '#6d26c0','#2591c2','#cc9800','#cb5c24'],

       legend: {
            orient: 'horizontal',
            x: 'left',
            left:10,
            top:30,
            data:['课程研发','营业租金','教师酬劳','在线工具研发','营销费用'],
            textStyle: {
                color: '#e2edff'}
        },

        series: [
            {
                name:'访问来源',
                type:'pie',
                center: ['55%', '70%'],
                radius: ['30%', '40%'],
                label:{
                    show:true,
                    position:'outside',
                    color:"#edf1fc"
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },


                data:[
                    {value:904, name:'课程研发'},
                    {value:790, name:'营业租金'},
                    {value:689, name:'教师酬劳'},
                    {value:1535, name:'在线工具研发'},
                    {value:256, name:'营销费用'}
                ]
            }
        ]
    };
    myecharts.setOption(option)

}
yewu();

function openHomepage(){
    $("#header1").on("click",function () {
        window.open("homePage.html")
    })
}