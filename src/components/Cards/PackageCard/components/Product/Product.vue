<script setup lang="ts">

import VueQrious from 'vue-qrious'
import { Product } from '../../../../../@types/command';

const { product } = defineProps<{
    product: Product
}>()

const mass = (product.mass / 1000).toFixed(2)

</script>

<template>
    <div class="product flex justify-content-space-between">
        <div class="detail flex align-items-center gap-20">
            <img :src="product.image" alt="image">
            <div>
                <div><strong>{{ product.name }}</strong></div>
                <div>
                    <p class="text-sm text-grey">{{ mass }} Kg </p>
                </div>
            </div>
        </div>
        <div>
            <vue-qrious 
                :value="product.key" 
                :style="{width: '80px', height: '80px'}" />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .product{
        padding: 20px;
        background-color: #F8F9FD;
        border-radius: 5px;
        .detail{
            img{
                width: 80px;
                height: 80px;
                border-radius: 5px;
                object-fit: cover;
                object-position: center;
                border: 1px solid #0000001C;
            }
        }
    }
</style>