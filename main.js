// Add a description to the data object with the value "A pair of warm, fuzzy socks". 
// Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
      description: 'A pair of warm fuzzy socks',
      details: ['80% cotton', '20% polyester', 'gender-neutral'],
      hmUrl: 'https://www2.hm.com/sv_se/index.html',
      image: './images/green-socks.png',
      inventory: 8,
      onSale: true,
      product: 'Socks',
      sizes: ['S', 'M', 'L']
    } 
  })
  