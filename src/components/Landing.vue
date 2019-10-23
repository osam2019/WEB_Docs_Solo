<template>
    <div>
        <div class="logo" style="padding-top: 55px; font-family: cursive; font-size: xx-large">
            <p style="color: white; font-family: baemin">Docs</p>
        </div>
        <div class="loginForm">

            <el-card class="credentials" style="margin: 1.5%" >
                <form v-on:submit="submit()">
                    <el-input placeholder="아이디를 입력해주세요"
                              suffix-icon="el-icon-user"
                              v-model="userid"
                              style="font-family: yanolja">
                    </el-input>
                    <el-input placeholder="비밀번호를 입력해주세요" v-model="input" show-password
                              suffix-icon="el-icon-lock"
                              style="margin-top: 0.3em; color: #475669; font-family: yanolja">
                    </el-input>

                    <b-button type="submit" block pill variant="outline-danger"
                              @click="submit()" style="margin-top: 2em;">로그인
                    </b-button>
                    <b-button type="submit" block pill variant="outline-success"
                              @click="submit()">회원 가입
                    </b-button>
                    <br><br>
                    <el-button-group>
                        <el-button  icon="el-icon-chat-dot-round">카카오</el-button>
                        <el-button  icon="el-icon-s-promotion">페이스북</el-button>
                        <el-button  icon="el-icon-guide">네이버</el-button>
                    </el-button-group>
                </form>
            </el-card>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        methods: {
            submit() {
                this.$router.push("/mailList");
            }
        },
        data() {
            return {
                input: '',
                userid: ''
            }
        }
    }
</script>

<style scoped>
    .loginForm {
        margin-top: 6.5em;
        margin-left: 1em;
        margin-right: 1em;
        background-color: brown;
        overflow: auto;
    }
</style>