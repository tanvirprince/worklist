<template>
    <div>
        <div v-for="(item, index) in items" :key="index" >
            <list-item
                :item="item"
                class="item"
                v-on:itemChanged="$emit('reloadList')"
            />
        </div>
    </div>
</template>

<script>
    import ListItem from "./ListItem";
    export default {
        props: ['items'],
        components: {
            ListItem
        }
    }
</script>

<style scoped>
.item{
    background: #a5bae0;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}
</style>
