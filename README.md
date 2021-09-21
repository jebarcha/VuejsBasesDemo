# Vue.js Bases

This is a demo using Vue.js cdn

## Topics
* Options Api
* Methods
* Events
* Event modifiers
* Reactive Properties
* Directives
	v-if
	v-show
	v-for

Vue is a progressive javascript framework
Progressive means that we can migrate an application to vue, I mean to integrate vue to existing applications.
* Vue.js is very fast
* Easy to start
* Scalable

1. Import Vue cdn  (<script src="https://unpkg.com/vue@next"></script>)
2. Create and reference our app.js
3. Add code to app.js

**index.html**
<body>
    <div id="myApp"></div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
</body>

**app.js**
const app = Vue.createApp({
    template: `
    <h1>Hello World</h1>
    <p>Desde app.js</p>
    `
})

app.mount('#myApp')

--------------------------------------------------------------------------------
### We can work in Vue.js with **options api**

const app = Vue.createApp({
    // template: `
    // <h1>Hello World</h1>
    // <p> {{ [1,2,3,4,5,6] }} </p>
    // <p> {{ {a:1, b:2} }} </p>
    // <p> {{ [{a:1, b:2},{},{},[]] }} </p>
    // <p> {{  true ? 'Activo' : 'Inactivo' }}</p>
    // `

    methods: {},
    watch: {},
    setup() {}
})

and **Composition api** (using the setup() {} )

--------------------------------------------------------------------------------------
### Component state - Data

all below properties are reactive and its properties as well.
Meaning that if we make any change, then Vue will reflect the change in the ui.

const app = Vue.createApp({
    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    }
})

index.html
<div id="myApp">
        <h3>{{ quote }}</h3>
        <blockquote> -{{ author }}</blockquote>
    </div>

--------------------------------------------------------------------------------------
### Events - intro

const app = Vue.createApp({
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

index.html
<div id="myApp">
        <h3>{{ quote }}</h3>
        <blockquote> -{{ author }}</blockquote>

        <button v-on:click="changeQuote">
            Change quote
        </button>
    </div>

--------------------------------------------------------------------------------------------
### Directive v-for

<ul>
            <li v-for="quote in quotes">
                <span>{{ quote.quote }}</span>
                <blockquote>-{{ quote.author}}</blockquote>
            </li>
        </ul>

use index
            <li v-for="(quote, index) in quotes">

desestructuring
            <li v-for="({quote,author}, index) in quotes">

--------------------------------------------------------------------------------------------
### Directive v-model and event modifiers

	<input
          type="text"
          v-model="newQuote"
          v-on:keypress.enter="addQuote">

app.js
const app = Vue.createApp({
    data() {
        return {
            quotes,
            newQuote: 'Hello World'
        }
    },
    methods: {
        addQuote({charCode}) {
            //if (charCode !== 13) return

            if (this.newQuote) {
                this.quotes.unshift({
                    quote: this.newQuote
                })
            }
        }
    }

})

event modifiers:  https://v3.vuejs.org/guide/events.html#event-modifiers

-----------------------------------------------------------------------------------------------------
### Directives v-if and v-show
https://v3.vuejs.org/guide/conditional.html#v-show

            <!-- <blockquote v-if="author !== undefined">-{{ author}}</blockquote> -->
            <blockquote v-show="author !== undefined">-{{ author}}</blockquote>




