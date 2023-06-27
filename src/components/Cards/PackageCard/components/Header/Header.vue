<script setup lang="ts">
    defineProps<{
        id: string,
        status: boolean
    }>()
</script>

<template>
    <div class="header flex align-items-center justify-content-space-between">
        <div class="left flex gap-10 align-items-center">
            <img src="/box.png" alt="box.png">
            <div class="title">
                <div class="text-sm text-grey">N° Package</div>
                <strong class="text-black">{{ id }}</strong>
            </div>
        </div>
        <p :class="{[status ? 'sent' : 'waiting']: true}">
        </p>
    </div>
</template>

<style scoped lang="scss">
    div.header{
        img{
            width: 80px;
            height: 80px;
        }
        div.right{ text-align: right; }
    }

    .sent, .waiting{
        padding: 10px 30px;
        border-radius: 10px;
        font: 15px;
        font-weight: bold;
    }
    .sent{
        background: #E3F7EC;
        color: #75B58B;
        border: 1px solid #75B58B;
        &::before{ content: 'Sent'; }
    }

    .waiting{
        background: #E5E7EB;
        color: #A7A8AF;
        border: 1px solid #A7A8AF;
        &::before{ content: 'Waiting'; }
    }
</style>