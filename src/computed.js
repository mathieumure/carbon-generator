export default {
    computed: {
        dataList () {
            return this.$store.getters[DATA_LIST] || []
        },
        fiteredList () {
            return this.dataList.fiter(it => it.amount > 3)
        }
    }
}