export default {
    data: () => ({
        titulo: 'Titulo da lista',
        items: [],
        item: '',
    }),
    methods: {
        adicionarItem() {
            this.items.push(this.item)
            this.item = ''
        }
    }
}