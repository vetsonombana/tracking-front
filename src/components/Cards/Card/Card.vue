<script setup lang="ts">

import { computed } from 'vue'
import { Command } from '../../../@types/command.ts'
import Header from './components/Header/Header.vue'
import Destination from '../../Destination/Destination.vue'

const { command } = defineProps<{ command: Command }>()

const mass = computed(() => (command.packages.reduce((previous, current) => previous + current.products.reduce((_prev, _curr) => _prev + _curr.mass, 0), 0) / 1000).toFixed(2))

const count  = computed(() => command.packages.length)

const status = computed(() => command.packages.reduce((previous, current) => previous && current.state, true))

const estimation = computed(() => command.packages.reduce((max, pack) => pack.estimation > max ? pack.estimation : max, 0))

</script>

<template>
    <div class="card gap-20 flex flex-column">
        <Header :id="command._id" :count="count" />
        <div class="body">
           <Destination :date="command.created_at" 
                :mass="mass" 
                :status="status" 
                :estimation="estimation"
                :from="command.from"
                :to="command.to"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
    div.card{
        max-width: 342px;
        width: 100%;
        background-color: white; 
        padding: 25px;
        border-radius: 10px;
        cursor: pointer;
        transition: 200ms box-shadow;
        &:hover{ box-shadow: 0px 0px 6px 2px #00000033; }

        &:active{ box-shadow: 0px 0px 0px 1px #00000022; }
    }

</style>