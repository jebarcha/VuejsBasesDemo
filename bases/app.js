

//console.log(Vue)
//const app = Vue.createApp({
    // template: `
    // <h1>Hello World</h1>
    // <p> {{ [1,2,3,4,5,6] }} </p>
    // <p> {{ {a:1, b:2} }} </p>
    // <p> {{ [{a:1, b:2},{},{},[]] }} </p>
    // <p> {{  true ? 'Activo' : 'Inactivo' }}</p>
    // `

    // methods: {},
    // watch: {},
    // setup() {}
//})
const app = Vue.createApp({
    // template: `
    // <h1>Hello World</h1>
    // <p> {{ [1,2,3,4,5,6] }} </p>
    // `

    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hello World again');
            this.author = 'Jose'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})


app.mount('#myApp')
