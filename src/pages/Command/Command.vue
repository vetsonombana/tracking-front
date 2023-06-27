<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Command, Package } from '../../@types/command'
import commandService from '../../api/services/command/command.service';
import { router } from '../../routes';
import PackageCard from '../../components/Cards/PackageCard/PackageCard.vue'

const command = ref<Command>()

onMounted(async () => {
    try{
        const params = router.currentRoute.value.params
        const res = await commandService.findOne(params.idcommand as string)
        command.value = res.data
    }catch(e){ router.push('/') }
})

const deliver = async (_package: Package) => {
    await commandService.deliver(_package._id)
    _package.state = true
}

</script>

<template>
    <div class="grid" v-if="command">
        <router-link to="/">Back</router-link>
        <div class="item" v-for="(item, index) in command?.packages" :key="item._id">
            <h3>Colis Number: {{ index + 1 }}</h3>
            <PackageCard 
                :pack="item"
                :date="command.created_at"
                :from="command.from"
                :to="command.to" 
                @send="deliver(item)"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
  div.grid{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    div.item{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }
  }
</style>