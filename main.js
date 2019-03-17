// Add a description to the data object with the value "A pair of warm, fuzzy socks". 
// Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    computed: {
        image () {
            return this.variants[this.selectedVariant].image;
        },
        title () {
            return this.brand + ' ' + this.product;
        }
    },
    data: {
        brand: 'Vue Mastery',
        cart: 0,    
        description: 'A pair of warm fuzzy socks',
        details: ['80% cotton', '20% polyester', 'gender-neutral'],
        hmUrl: 'https://www2.hm.com/sv_se/index.html',
        inventory: 5,
        onSale: true,
        product: 'Socks',
        selectedVariant: 0,
        sizes: ['S', 'M', 'L'],
        variants: [
            { 
                color: '#42b883',
                id: 0,
                image: './images/green-socks.png',
                quantity: 10,
                type: 'green',
            },
            {
                color: '#35495e',
                id: 1,
                image: './images/blue-socks.png',
                quantity: 0,
                type: 'blue',
            }]
    },
    methods: {
        decrementCart () {
            if(this.cart > 0){
                this.cart--;
                this.inventory++;
            }
        },
        incrementCart () {
            if(this.inventory > 0){
                this.cart++;
                this.inventory--;
            }
        },
        selectVariant(id){
            this.selectedVariant = id;
        }
    }
  })
  