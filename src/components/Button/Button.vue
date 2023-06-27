<script setup lang="ts">

defineSlots<{
    default(props: {      
    }): string
}>()

defineProps<{disabled?: boolean}>()

</script>

<template>
    <button :disabled="disabled" class="button full-width">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
    .button{
        padding: 10px 0px;
        font-size: 15px;
        border-radius: 10px;
        border: 1px solid #1B31B2;
        color: #1B31B2;
        &:not(:disabled){ cursor: pointer; }
        background: transparent;
        transition: 200ms background-color, 100ms color;
        &:active:not(:disabled){ box-shadow: 0px 0px 5px 2px #5588ff66; }

        &:hover:not(:disabled){
            color: white;
            background-color: #1B31B2;
        }

        &:disabled{
            border: 1px solid #1B31B244;
            color: #1B31B244;
        }
    }
</style>