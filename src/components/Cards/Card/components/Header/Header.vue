<script setup lang="ts">
    defineProps<{
        id: string,
        count: number
    }>()
</script>

<template>
    <div class="header flex align-items-center justify-content-space-between">
        <div class="left flex gap-10 align-items-center">
            <img src="/box.png" alt="box.png">
            <div class="title">
                <div class="text-sm text-grey">Order No</div>
                <strong class="text-black">{{ id }}</strong>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <div class="text-sm text-grey">Packages</div>
                <strong class="text-blue">{{ count }} Packages</strong>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    div.header{
        img{
            width: 50px;
            height: 50px;
        }
        div.right{ text-align: right; }
        strong{ font-size: 12px; }
    }

</style>