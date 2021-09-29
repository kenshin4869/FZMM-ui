<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>房长制管理平台</h2>
      </el-col>
    </el-row>
    <el-divider />
    <div ref="charts" class="righttop"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {

    };
  },
  mounted() {
    this.mycharts();
  },
  methods: {
    mycharts() {
      const myChart = echarts.init(this.$refs.charts, "macarons");
      myChart.setOption(
        {
          color: ["rgb(8,252,7)", "rgb(255,168,0)", "rgb(0,121,254)"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              crossStyle: {
                color: "#999"
              }
            },

            position: function(pt) { // 提示框的位置
              return [pt[0], 30];
            }
          },
          grid: { // 图表和父盒子之间的距离
            left: "3%",
            right: "4%",
            bottom: "3%",
            top: "17%",
            containLabel: true
          },
          legend: { // 图例
            data: [
              {
                name: "考核评分",
                textStyle: {
                  color: "#000000"
                }
              },
              {
                name: "隐患整改率",
                textStyle: {
                  color: "#000000"
                }
              },
              {
                name: "能耗达标率",
                textStyle: {
                  color: "#000000"
                }
              }
            ]
          },
          xAxis: { // x轴
            type: "category",
            // boundaryGap: false,
            data: ["崇仁", "东乡", "广昌", "金溪", "乐安", "黎川", "临川", "南城", "南丰", "文昌", "宜黄", "资溪"],
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#000000",
                fontSize: 10
              },
              margin: 8
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(2,121,253)"
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: "value",
            axisLabel: { // x轴的坐标文字
              show: true,
              textStyle: {
                color: "#050505" // 文字的颜色
              }

            },
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(2,121,253)"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: { // 坐标在grid区域的分割线
              lineStyle: { // 设置分割线的样式(图表横线颜色)
                color: ["#153a8a"]
              }
            }
          },
          series: [
            {
              name: "考核评分",
              type: "bar", // 柱状图
              data: [67, 67, 79, 82, 82, 83, 81, 90, 85, 82, 92, 92],
              barWidth: "8%" // 柱状体的宽度
            },
            {
              name: "隐患整改率",
              type: "bar",
              data: [67, 89, 97, 100, 63, 100, 60, 57, 50, 100, 100, 83],
              barWidth: "8%"
            },
            {
              name: "能耗达标率",
              type: "bar",
              data: [91, 81, 86, 87, 78, 100, 100, 95, 84, 82, 90, 100],
              barWidth: "8%"
            }
          ]
        }
      );
      // 让图表自适应
      window.addEventListener("resize", function() {
        myChart.resize(); // myChart 是实例对象
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .home {
    blockquote {
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      border-top: 1px solid #eee;
    }

    .col-item {
      margin-bottom: 20px;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    color: #676a6c;
    overflow-x: hidden;

    ul {
      list-style-type: none;
    }

    h4 {
      margin-top: 0px;
    }

    h2 {
      margin-top: 10px;
      font-size: 26px;
      font-weight: 100;
    }

    p {
      margin-top: 10px;

      b {
        font-weight: 700;
      }
    }

    .update-log {
      ol {
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 40px;
      }
    }
  }
  .righttop{
    width: 100%;
    height: 400px;
    background: rgb(251, 251, 255);
}
</style>

