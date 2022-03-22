<template>
    <div 
    class="book-template"
    :class="{animate:isActive}"
    @click="click()"
    >
        <span class="side">
            <slot name="side"></slot>
        </span>
        
        <h1 class="front">
            <slot name="front"></slot>
        </h1>
    </div>
</template>


<script>

export default ({
   
    data() {
        return{
            isActive: false
        }
    },

    methods: {
        click() {
            this.$emit('click')
            this.isActive = !this.isActive
        }
    },
})
</script>



<style lang="scss" scoped>
    .book-template{
       display: flex;
        margin: 5px;
        height: 220px;
        width: 50px;
        border: 3px solid rgb(81, 87, 81);
        text-align: center;
        align-items: center;
        justify-content: center;
        span {
            writing-mode: tb-rl;
            transform:rotate(180deg);
            font-size:20px;
        }

        h1{
            display: none;
        }
        .front {
            height: 220px;
            width: 200px;
        }
    }

    .animate{
        position: relative;
        color: rgb(206, 204, 204);
        transform: translateX(100%);
        z-index: 3;
        
        .side{
            display: none;
        }

        .front{
            display: block;
            border: 3px solid rgb(81, 87, 81);
            background-color: rgb(81, 87, 81);
            border: 7px solid black;
        }
         transition: all 900ms ease  0s;

    }
    
</style>