<template>
    <div>
        <navi-bar></navi-bar>
        <div class="sortByName">
            <SortByName></SortByName>
        </div>
    </div>
</template>

<script>
    import NaviBar from "../components/NaviBar";
    import SortByName from "../components/SortByName";
    export default {
        name: "Statistics",
        components: {
            NaviBar,
            SortByName
        }
    }
</script>

<style scoped>

</style>