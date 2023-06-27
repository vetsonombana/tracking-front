<script setup lang="ts">
    import moment from 'moment'

    defineProps<{
        status?: boolean, 
        mass?: string,
        date?: string,
        estimation?: number,
        from?: string,
        to?: string
    }>()
</script>

<template>
    <div style="margin-bottom: 15px;">
        <div class="full-width flex align-items-center justify-content-space-between">
            <p class="text-orange text-sm">{{ moment(date).format('DD MMM YYYY') }}</p>
            <strong class="mass text-orange">
                {{ mass }} Kg
            </strong>
            <p class="text-orange text-sm">{{ moment(date).add(estimation, 'days').format('DD MMM YYYY') }}</p>
        </div>
        <div class="full-width flex align-items-center justify-content-space-between">
            <p class="text-grey text-sm">From</p>
            <p class="text-grey text-sm">Destination</p>
        </div>
    </div>

     <div class="destination flex align-items-center justify-content-space-between gap-10">
        <div class="state checked"></div>
        <div class="dot"></div>
        <div :class="{state: true, checked: status}">
        </div>
    </div>

    <div style="margin-top: 10px;">
        <div class="text-container full-width flex align-items-center justify-content-space-between">
            <strong style="font-size: 12px;">{{ from }}</strong>
            <strong style="font-size: 12px;">{{ to }}</strong>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .mass{
        padding: 10px;
        border: dashed #E0C8C0 1px;
        border-radius: 10px;
        background-color: #FFEBE5;
    }

    div.destination{
        div.dot{
            width: 90%;
            border: dashed 1px #7D8EA6;
        }
        .state{
            &::before{
                font-size: 20px;
                font-family: "Font Awesome 5 Free";
                font-weight: 200;
                content: '\f111';
                color: #7D8EA6;
            }

            &.checked::before{
                color: #7DE2A4;
                font-weight: 900;
                content: '\f058';
            }
        }
    }

</style>