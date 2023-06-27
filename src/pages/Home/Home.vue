<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Command } from '../../@types/command'
import CommandService from '../../api/services/command/command.service'
import Card from '../../components/Cards/Card/Card.vue'
import { router } from '../../routes'
import Button from '../../components/Button/Button.vue'

const commands = ref<Command[]>([])
const error = ref<boolean>(false)

onMounted(async () => {
    try{
        const res = await CommandService.find()
        commands.value = res.data 
    }catch(e){ error.value = true }
})

const navigate = (id: string) => router.push(`/${id}`) 
const reload = () => location.reload()

</script>

<template>
    <div class="grid" v-if="!error">
        <Card v-for="item in commands" :key="item._id" 
            @click="navigate(item._id)"
            :command="item"
        />
    </div>
    <div class="error" v-else>
        <h1>Oupss, an error occured</h1>
        <div style="width: 250px;">
            <Button @click="reload">Reload</Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .grid{
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    div.error{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        overflow: hidden;
    }
</style>