<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24">
                <div id="mapContainer" style="width:100%; height:750px">

                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
    import echarts from 'echarts'
    import option from './mapOptions'  //引入配置项
    import china from  './china'  //引入china.js地图文件

    export default {
        name: '',
        data () {
            return {}
        },
        methods: {
            drawChinaMap() {
                var myChart = echarts.init(document.getElementById('mapContainer'));
                myChart.setOption(option);
            }
        },
        mounted() {
            this.drawChinaMap();
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
</style>