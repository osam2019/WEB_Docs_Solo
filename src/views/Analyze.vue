<template>
    <div class="sort_container">
        <navi-bar></navi-bar>
        <div class="sortByDate">
            <SortByDate></SortByDate>
        </div>
    </div>
</template>

<script>
    import NaviBar from "../components/NaviBar";
    import SortByDate from "../components/SortByDate";
    export default {
        name: "Analyze",
        components: {SortByDate, NaviBar}
    }
</script>

<style scoped>

</style>