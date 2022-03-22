<template>
    <button 
    class="btn"
    @click.prevent="click"
    >
        <slot ></slot>
    </button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
    },

    methods: {
        click() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn{
        margin: 10px;
        color: rgb(68, 179, 41);
        padding: 10px;
        border-radius: 5px;
    }

    
</style>
