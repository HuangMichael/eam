<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <figure>
                    <div id="chartPie" class="chart"></div>
                </figure>
            </el-col>
            <el-col :span="12">
                <figure>
                    <div id="chartColumn" class="chart"></div>
                </figure>
            </el-col>
            <el-col :span="24">
                <figure>
                    <div id="chartBar" class="chart"></div>
                </figure>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    // built-in theme
    import 'echarts/theme/dark'
    import china from './china.json'
    //    import theme from './theme.json'
    import utils from '../../../../common/js/util.js'
    export default {
        data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartPie: null
            }
        },
        mounted: function () {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            this.chartColumn = echarts.init(document.getElementById('chartColumn'));
            this.chartBar = echarts.init(document.getElementById('chartBar'));
            this.chartPie = echarts.init(document.getElementById('chartPie'));

            this.chartColumn.setOption({
                color: utils.getEchartColors(),
                title: {
                    text: '最近三个月报修完成情况',
                    x: 'center'
                },
                tooltip: {},
                xAxis: {
                    data: ["2017-11", "2017-12", "2018-01"],
                    splitLine: {
                        show: false
                    }
                },

                legend: {
                    show: true,
                    orient: "horizontal",
                    x: "center",
                    y: "bottom",
                    data: ["报修数量", "完工数量"]
                },

                yAxis: {
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '报修数量',
                    type: 'bar',
                    data: [5, 20, 36]
                }, {
                    name: '完工数量',
                    type: 'bar',
                    data: [15, 40, 26]
                }]
            });

            this.chartBar.setOption({
                color: utils.getEchartColors(),
                title: {
                    text: '维修单状态按线别统计',
                    subtext: '2018-01',
                    x: 'center'
                },
                tooltip: {},
                xAxis: {
                    data: ["2号线", "8号线", "10号线", '13号线'],
                    splitLine: {
                        show: false
                    }
                },
                legend: {
                    show: true,
                    orient: "horizontal",
                    x: "center",
                    y: "bottom",
                    data: ["待分配", "维修中", "完工", "暂停", "取消"]
                },
                yAxis: {
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    name: '待分配',
                    type: 'bar',
                    data: [5, 20, 11, 23]
                }, {
                    name: '维修中',
                    type: 'bar',
                    data: [11, 21, 40, 26]
                }, {
                    name: '完工',
                    type: 'bar',
                    data: [15, 32, 11, 26]
                }, {
                    name: '暂停',
                    type: 'bar',
                    data: [15, 40, 33, 22]
                }, {
                    name: '取消',
                    type: 'bar',
                    data: [5, 30, 26, 11, 22]
                }]
            });

            this.chartPie.setOption({
                color: utils.getEchartColors(),
                title: {
                    text: '报修按设备类型统计',
                    subtext: '2018-01',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    show: true,
                    orient: "horizontal",
                    x: "center",
                    y: "bottom",
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
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
            });
        }

    }

</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }

    figure {
        /*display: inline-block;*/
        margin: 1em;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 8px;
        box-shadow: 0 0 45px rgba(0, 0, 0, .2);
        padding: 1em 1em
    }

    .chart {
        width: 100%;
        height: 280px;
    }

</style>