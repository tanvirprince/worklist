<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">
                Todo List
            </h2>
            <add-item-form/>
        </div>
        <list-view/>
    </div>
</template>

<script>
import AddItemForm from "./AddItemForm";
import ListView from "./ListView";
export default {
    name: "App.vue",
    components: {
        AddItemForm,
        ListView
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}
.heading{
    background: aliceblue;
    padding: 10px;
}
#title {
    text-align: center;
}
</style>
