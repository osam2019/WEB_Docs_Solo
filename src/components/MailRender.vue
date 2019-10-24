<template>
    <div class="list">
        <ul v-for="(email, index) in list">
            <div :class="'mail'+index" >
                <el-card class="box-card" style="max-width: 20rem; background-color: #f0f6fa">
<!--                    <div slot="header" class="clearfix">-->

<!--                        <i class="el-icon-user"/>-->
<!--                        {{email.sender}} - -->
<!--                        <i class="el-icon-message"/>-->
<!--                          {{email.title}}-->
<!--                    </div>-->
                    <div class="text_head">
                        <i class="el-icon-user"/>
                        {{email.sender}} -
                        <i class="el-icon-message"/>
                        {{email.title}}
                        <hr class="rule  rule--dotted">
                    </div>
                    <div class="text_body" >
                        <i class="el-icon-watch"/>
                        {{email.timestamp}}

                        <hr class="rule  rule--dotted">
                        <div class="fileInfo">
                            <i class="el-icon-document-copy"/>{{email.attached}}
                            <el-dropdown @command="handleCommand">
                                <span class="el-dropdown-link" style="color: #f08411">
                                더보기<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" style="font-family: baemin">
                                    <el-dropdown-item></el-dropdown-item>
                                    <el-dropdown-item>문서 위변조 상태: {{email.status}}</el-dropdown-item>
                                    <el-dropdown-item divided :command="index"   >문서 수정이력 보기</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>

                        </div>
                    </div>
                </el-card>
            </div>
            <div class="histDrawer">
                <el-drawer
                        :visible.sync="drawer"
                        :direction="direction"
                        size="55%"
                        style="font-family: baemin"
                >
                    <div class="title" style="padding-left: 40px; padding-bottom: 20px">
                        문서 변경 히스토리
                    </div>

                    <div class="block" v-if="idx > -1">
                        <el-timeline>
                            <el-timeline-item
                                    v-for="(activity, index) in list[idx].history"
                                    :key="index"
                                    :icon="activity.icon"
                                    :type="activity.type"
                                    :color="activity.color"
                                    :size="activity.size"
                                    :timestamp="activity.timestamp">
                                    {{activity.name}}
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                    <div class = "chain" style="font-size: small; padding-top: 20px; padding-left: 35px">
                        <i class ="el-icon-bank-card"/> {{email.chain}}
                    </div>

                </el-drawer>
            </div>
        </ul>
    </div>
</template>

<script>
    const data = [{
        title: "첫 이메일",
        timestamp: "2019-10-22 20:43:20",
        sender: "홍길동",
        attached: "첨부파일.docx",
        chain: "3c416306be6121d297",
        status: '원본',
        history: [{
            name:'홍길동1',
            timestamp: '2019-10-01 20:10',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-place'
            },
            {
                name:'이철수',
                timestamp: '2019-09-28 12:56',
            },
            {
                name: '박지훈',
                timestamp: '2019-09-26 04:20',
            },
            {
                name: '김민지',
                timestamp: '2019-09-26 02:12',
            },

            {
                name: '이재중',
                timestamp: '2019-09-25 17:28',
            },
            {
                name: '최서윤',
                timestamp: '2019-09-24 09:30',
                color: '#f55d42'
            }]
    }, {
        title: "두번째 이메일",
        timestamp: "2019-10-22 08:20",
        sender: "박철수",
        attached: "계약서.pdf",
        chain: "3c416306be6121d297",
        status: '원본',
        history: [{
            name:'홍길동2',
            timestamp: '2019-10-01 20:10',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-place'
        },
            {
                name:'이철수',
                timestamp: '2019-09-28 12:56',
            },
            {
                name: '박지훈',
                timestamp: '2019-09-26 04:20',
            },
            {
                name: '최서윤',
                timestamp: '2019-09-24 09:30',
                color: '#f55d42'
            }]
    }, {
        title: "세번째 이메일",
        timestamp: "2019-10-22 08:59",
        sender: "최지훈",
        attached: "성적표.docx",
        chain: "3c416306be6121d297",
        status: '위조',
        history: [{
            name:'홍길동3',
            timestamp: '2019-10-01 20:10',
            size: 'large',
            type: 'warning',
            icon: 'el-icon-place'
        },
            {
                name:'이철수',
                timestamp: '2019-09-28 12:56',
            },
            {
                name: '박지훈',
                timestamp: '2019-09-26 04:20',
            },
            {
                name: '최서윤',
                timestamp: '2019-09-24 09:30',
                color: '#f55d42'
            }]
    }, {
        title: "네번째 이메일",
        timestamp: "2019-10-21 13:14",
        sender: "이서윤",
        attached: "첨부파일.docx",
        chain: "3c416306be6121d297",
        status: '원본',
        history: [{
            name:'홍길동3',
            timestamp: '2019-10-01 20:10',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-place'
        },
            {
                name:'이철수',
                timestamp: '2019-09-28 12:56',
            },
            {
                name: '박지훈',
                timestamp: '2019-09-26 04:20',
            },
            {
                name: '최서윤',
                timestamp: '2019-09-24 09:30',
                color: '#f55d42'
            }]
    }, {
        title: "다섯번째 이메일",
        timestamp: "2019-10-20 01:45",
        sender: "최석현",
        attached: "계획표.pdf",
        chain: "3c416306be6121d297",
        status: '원본',
        history: [{
            name:'홍길동4',
            timestamp: '2019-10-01 20:10',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-place'
        },
            {
                name:'이철수',
                timestamp: '2019-09-28 12:56',
            },
            {
                name: '박지훈',
                timestamp: '2019-09-26 04:20',
            },
            {
                name: '최서윤',
                timestamp: '2019-09-24 09:30',
                color: '#f55d42'
            }]
    }
    ];

    import NavBar from "./NaviBar";

    export default {
        name: "MailRender",
        components: {
            NavBar
        },
        data: function () {
            return {
                list: data,
                drawer: false,
                direction: 'rtl',
                selected:'',
                histData:'',
                idx: '-1'
            }
        },
        methods: {
            clicked(index) {
                this.$router.push({
                    path: `/mailInfo/${index}`,
                    query: data[index]
                })
            },
            handleCommand(command) {
                    // alert(command);
                    if(command != null){
                        this.drawer=true;
                        this.idx = command;
                    }



            },
            setHist(parm){
                this.histData=parm;
            }

        }
    }
</script>

<style scoped>

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    .list {
        padding-top: 100px;
    }

    .block{
        padding-top: 30px;
        border: 2px dashed #bcbcbc;

    }


</style>