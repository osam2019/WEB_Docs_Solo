<template>
    <div class="mail_container">

        <navi-bar></navi-bar>
        <div class="mail_render">
            <mail-render></mail-render>
        </div>

    </div>
</template>

<script>
    import MailRender from "../components/MailRender";
    import NaviBar from "../components/NaviBar";

    export default {
        name: "MailList",
        components: {
            MailRender,
            NaviBar
        }
    }
</script>

<style scoped>
    .mail_container{
        background-color: #2c3e50;

    }

</style>