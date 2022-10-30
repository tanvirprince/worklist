<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">
                Todo List
            </h2>
            <add-item-form
                v-on:reloadList="getList()"
            />
            <list-view
                :items="items"
                v-on:reloadList="getList()"
            />
        </div>

    </div

<script>
import AddItemForm from "./AddItemForm";
import ListView from "./ListView";

export default {
    name: "App.vue",
    components: {
        AddItemForm,
        ListView
    },
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList () {
            axios.get('api/item')
                .then( response => {
                    this.items = response.data;
                    //console.log(this.items);
                })
                .catch( error => {
                    console.log(error);
                })
        }
    },created(){
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 600px;
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
