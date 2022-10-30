<template>
    <div class="item">
        <input type="checkbox" @change="updateCheck()" v-model="item.completed" />

        <span :class="[item.completed ? 'completed' : '', 'itemText']"> {{ item.name }}</span>

        <button @click="deleteItem()" class="trashCan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        methods:{
            updateCheck(){
                axios.put('/api/items/' + this.item.id, {
                    item: this.item
                })
                    .then( response => {
                        if(response.status === 200){
                            this.$emit('itemChanged');
                        }
                    })
                    .catch( error => {
                        console.log(error);
                    })
            },
            deleteItem(){
                axios.delete('/api/items/destroy/' + this.item.id)
                    .then( response => {
                        if(response.status === 200){
                            this.$emit('itemChanged');
                        }
                    })
                    .catch( error => {
                        console.log(error);
                    })
            }
        }
    }

</script>

<style scoped>
    .completed{
        text-decoration: line-through;
        color: #000202;
    }
    .itemText{
        margin-left: 10px;
        width: 100%;
    }
    .item{
    display: flex;
    align-items: center;

    }
    .trashCan{
        background: none;
        border: none;
        cursor: pointer;
    }

</style>
