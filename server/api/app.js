export default defineEventHandler(async()=>{

    // const {name} = useQuery(event)
    // const {age} = await useBody(event)

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=V6b6C8rjSkK9YxaZeFfhNJlupSmc63pREgGlWot4')

    return data;
})