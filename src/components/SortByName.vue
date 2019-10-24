<template>
    <div class="statContainer">
        <div class="search" style="padding-top: 2.4em; margin: 1px">
            <el-input type="text"
                      placeholder="찾고싶은 이름을 입력해주세요.   ex)홍길동, 박철수"
                      v-model="userName">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>

        <div class="graph" style="padding-top: 3em; color: #bcbcbc">
            <div v-for="(obj, idx) in data">
                <div v-if="userName == obj.name">
                     Attached File Trend from <i class="el-icon-user"/> {{obj.name}}
                    <div class="drawingTrend" style="padding-top: 3em">
                        <trend
                                :data="obj.freq"
                                :gradient="['#e3500b', '#dff261', '#70ff33  ']"
                                auto-draw
                                autoDrawDuration="5000"


                        >
                        </trend>
                    </div>


                </div>
            </div>
        </div>

        <div class="wholeTable" style="font-family: yanolja">
            <div>
                <vue-good-table
                        :columns="columns"
                        :rows="rows"
                        theme="nocturnal"
                        :pagination-options="{
                         enabled: true,
                         mode: 'pages',
                         }"
                        :search-options="{
                         enabled: true
                         }"
                >
                </vue-good-table>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "SortByName",
        data() {
            return {
                userName: '',
                columns: [
                    {
                        label: '이름',
                        field: 'name',
                        width: '70px'
                    },
                    {
                        label: '1월',
                        field: 'jan',
                        width: '60px'
                    },
                    {
                        label: '2월',
                        field: 'feb',
                        width: '60px'
                    },
                    {
                        label: '3월',
                        field: 'mar',
                        width: '60px'
                    },
                    {
                        label: '4월',
                        field: 'apr',
                        width: '60px'
                    },
                    {
                        label: '5월',
                        field: 'may',
                        width: '60px'
                    },
                    {
                        label: '6월',
                        field: 'june',
                        width: '60px'
                    },
                    {
                        label: '7월',
                        field: 'jul',
                        width: '60px'
                    },
                    {
                        label: '8월',
                        field: 'aug',
                        width: '60px'
                    },
                    {
                        label: '9월',
                        field: 'sep',
                        width: '60px'
                    },
                    {
                        label: '10월',
                        field: 'oct',
                        width: '68px'
                    },
                    {
                        label: '11월',
                        field: 'nov',
                        width: '68px'
                    },
                    {
                        label: '12월',
                        field: 'dec',
                        width: '68px'
                    },
                ],
                rows: [
                    {
                        name: '홍길동', jan: 10, feb: 0, mar: 30, apr: 15, may: 20, june: 40, jul: 20, aug: 30, sep: 8,
                        oct: 12, nov: 30, dec: 20
                    },
                    {
                        name: '박철수', jan: 0, feb: 90, mar: 33, apr: 23, may: 30, june: 20, jul: 12, aug: 2, sep: 1,
                        oct: 3, nov: 5, dec: 6
                    },

                    {
                        name: '이지윤', jan: 30, feb: 90, mar: 33, apr: 23, may: 30, june: 20, jul: 4, aug: 20, sep: 10,
                        oct: 20, nov: 14, dec: 12
                    },
                ],

                data: [
                    {
                        name: '홍길동',
                        freq: [5, 10, 19, 4, 20, 9, 15, 30, 40, 10, 60, 24, 30]
                    },
                    {
                        name: '박철수',
                        freq: [0, 50, 30, 45, 20, 8, 10, 18, 30, 29, 14, 23, 5]

                    },
                    {
                        name: '이지윤',
                        freq: [30, 90, 33, 23, 30, 20, 4, 18, 20, 10, 20, 14, 12]

                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>