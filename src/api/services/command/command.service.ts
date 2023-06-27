import { CommandClient } from "../../client/client.api"

export default {
    find: async () => await CommandClient.get('/command'),
    findOne: async (id: string) => await CommandClient.get(`/command/one/${id}`),
    deliver: async (idpackage: string) => await CommandClient.put(`/command/${idpackage}`)
}