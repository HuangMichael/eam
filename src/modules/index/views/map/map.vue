<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24">
                <figure>
                    <div id="mapContainer" style="width:100%; height:680px"></div>
                </figure>
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

    figure {
        /*display: inline-block;*/
        margin: 1em auto;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 8px;
        box-shadow: 0 0 45px rgba(0, 0, 0, .2);
        padding: 1em 1em
    }

</style>