<template>
    <div class="analyzeContainer">
        <div class="dateChooser" style="padding-top: 30px">
            <div class="block">
                <span class="demonstration">With quick options</span>
                <el-date-picker
                        v-model="value2"
                        type="daterange"
                        align="right"
                        unlink-panels
                        @click=""
                        range-separator="~"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        :picker-options="pickerOptions">
                </el-date-picker>
            </div>
            <div class="displayResult" v-if="value2 != -1" style="margin: 3%">
                <div style="padding-top: 10em;">
                    <el-carousel :interval="500" type="card" height="200px">
                        <el-carousel-item v-for="(obj) in emailResult">

                            <div style="color: #566063; padding-top: 1em; font-size: 20px;">
                                <div v-if="obj.doc == 'pdf'">
                                    <img :src='require(`../../public/pdf.png`)' class="myIcon">
                                </div>
                                <div v-if="obj.doc == 'word'">
                                    <img :src='require(`../../public/word.png`)' class="myIcon">
                                </div>
                                <div v-if="obj.doc == 'han'">
                                    <img :src='require(`../../public/hangul.png`)' class="myIcon">
                                </div>
                                <div style="padding-top: 0.7em">
                                    <i class="el-icon-message"/>
                                    {{obj.title}}

                                </div>

                            </div>
                            <div class="sender" style="padding-top: 25px">
                                <i class="el-icon-user"/>{{obj.name}}
                            </div>

                            <div class="arrivedTime" style="font-size: small; font-family: 'Arial Narrow'">
                                {{obj.timestamp}}

                            </div>

                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: "SortByDate",
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: 'Last week',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: 'Last month',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: 'Last 3 months',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: '-1',
                emailResult: [{
                    name: '홍길동',
                    timestamp: '2019-10-22 20:10',
                    title: '첫번째 이메일',
                    doc: "pdf"
                }, {
                    name: '박철수',
                    timestamp: '2019-10-21 05:30',
                    title: '두번째 이메일',
                    doc: "han"
                }, {
                    name: '이서윤',
                    timestamp: '2019-10-21 23:15',
                    title: '세번째 이메일',
                    doc: "word"
                }, {
                    name: '강지훈',
                    timestamp: '2019-10-19 01:18',
                    title: '네번째 이메일',
                    doc: "word"
                }, {
                    name: '김민지',
                    timestamp: '2019-10-18 00:15',
                    title: '다섯번째 이메일',
                    doc: "pdf"
                },
                    {
                        name: '이재중',
                        timestamp: '2019-10-20 23:15',
                        title: '여섯째 이메일',
                        doc: "han"
                    },
                    {
                        name: '최재훈',
                        timestamp: '2019-10-22 12:15',
                        title: '다섯번째 이메일',
                        doc : "word"
                    },
                ]
            };
        }
    }
</script>

<style scoped>
    .myIcon {
        height: 40px;
        width: 50px;
    }

    .myCol {
        color: white;
        border: 2px solid whitesmoke;
        border-collapse: collapse;
        width: 5em;
        height: 5em;
    }

    .myRow {
        border: 2px solid whitesmoke;
        border-collapse: collapse;

    }

    .docResult {
        background-color: #2c3e50;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #e6fcff;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #e4e9f0;
    }
</style>