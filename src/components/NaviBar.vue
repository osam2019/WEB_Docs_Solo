<template>

        <div class="my_nav" style="font-family: baemin">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"

            >
                <el-menu-item index="1" @click="goMailList()">받은 편지함</el-menu-item>
                <el-submenu index="2" >
                    <template slot="title" >분석</template>
                    <el-menu-item index="2-1" @click="goAnalyze()" >날짜 별 첨부파일 모아보기</el-menu-item>
                    <el-menu-item index="2-2" @click="goName()" >사용자 별 첨부파일 트렌드보기</el-menu-item>
                </el-submenu>
                <el-menu-item index="3" @click="goHome()">로그아웃</el-menu-item>
                <el-menu-item index="4" ><i class ="el-icon-user" style="color: white; padding-left: 2em;"></i></el-menu-item>
            </el-menu>
        </div>

</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    export default {
        name: "NaviBar",
        components: {
            FixedHeader
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            goName(){
                this.$router.push("/stat");
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                console.log('?');
            },
            goHome(){
                this.$router.push("/");
            },
            goAnalyze(){
                this.$router.push("/analyze");
            },
            goMailList(){
                this.$router.push("/mailList");
            },

        }
    }
</script>

<style scoped>
        .my_nav {
            position: fixed;
            left: 0; /* top left corner should start at leftmost spot */
            top: 0; /* top left corner should start at topmost spot */
            width: 100vw; /* take up the full browser width */
            z-index: 200; /* high z index so other content scrolls underneath */
            /* define height for content */
        }



</style>