<script setup lang="ts">

import { computed, ref } from 'vue'
import { Package } from '../../../@types/command';
import Destination from '../../Destination/Destination.vue';
import Header from './components/Header/Header.vue'
import Button from '../../Button/Button.vue'
import Product from './components/Product/Product.vue'

const { pack } = defineProps<{
    pack: Package,
    date: string,
    from: string,
    to: string
}>()

const _pack = ref(pack)

const productsShowed = ref<boolean>(false)

const mass = computed(() => (pack.products.reduce((sum, product) => sum + product.mass, 0) / 1000).toFixed(2) )

const emits = defineEmits(['send'])

</script>

<template>
    <div class="package-card">
        <Header :status="_pack.state" :id="_pack._id"/>
        
        <div class="body flex flex-column gap-20">
            <Destination :status="_pack.state"
                :date="date"
                :estimation="pack.estimation"
                :mass="mass"
                :from="from"
                :to="to"
            />

            <div v-show="productsShowed" class="product" v-for="product in pack.products" :key="product._id">
                <Product :product="product" />
            </div>
            
            <Button @click="productsShowed = !productsShowed">
                {{!productsShowed ? `Show Product (${_pack.products.length})` : 'Hide Products'}}
            </Button>

            <Button :disabled="_pack.state" @click="emits('send')">
                Sent
            </Button>
        </div>

    </div>
</template>

<style scoped lang="scss">
    div.package-card{
        width: 100%;
        background-color: white;
        padding: 35px;
        max-width: 900px;
        border-radius: 10px;
    }
</style>