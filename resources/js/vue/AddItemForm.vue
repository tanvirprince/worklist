<template>
    <div class="addItemForm">
        <input type="text" v-model="item.name" />
        <font-awesome-icon
            icon="plus-square"
            :class="[item.name ? 'active' : 'inactive','plus']"
            @click="addItem()"
        />

    </div>
</template>

<script>
export default {

    data: function(){
        return{
            item: {
                name: "",
            }
        }
    },
    methods: {
        addItem(){

            if (this.item.name === '') {
                //console.log(this.item);
                return;
            }
            //console.log(this.item.name);
            axios.post('/api/items',{
                item: this.item
            })
                .then( response => {
                    console.log(response);
                    if(response.status === 201){
                        this.item.name = "";
                        this.$emit('reloadList');
                    }
                })
                .catch( error =>{
                    console.log(error);
                })
        }
    }

}
</script>

<style scoped>
.addItemForm{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
input{
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}
.plus{
    font-size: 20px;
    cursor: pointer;
}
.inactive{
    color: #ccc;
}
.active{
    color: #000;
}
.inactive:hover{
    color: #ccc;
}

</style>
