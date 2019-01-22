export const fetchData = {
    data () {
        return { apiData: [] };
    },
    async mounted () {
        this.apiData = await this.apiName.fetch();
    }
}