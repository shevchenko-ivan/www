var cart = { }; //Моя корзина

$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods(){
        $.getJSON('goods.json', function(data){
            var out = '';
            for (var key in data){
                out+='<div class="single-goods">';
                out+='<img class="img-fluid img-thumbnail" src="'+data[key].image +'">';
                out+='<p>'+data[key] ['name']+'</p>';
                out+='<p>Ціна: '+data[key] ['cost']+'- грн</p>';
                out+='<button type="button" class="add-to-cart btn btn-danger"data-art=" '+key+' ">ЗАМОВ</button>';
                out+='</div>';
            }
            $('.goods').html(out);
            $('button.add-to-cart').on('click', addToCart);
        });
}

function addToCart(){
    var articul = $(this).attr('data-art');
    if ( cart[articul] !=undefined){
         cart[articul]++;
    }
    else{
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    showMiniCart();
    //Добавлє товар в корзину
}

function checkCart(){
    //провіряю наявність корзини в localStorage
    if( localStorage.getItem('cart') != null){
        cart = JSON.parse ( localStorage.getItem('cart'));
    }
}

checkCart();

function showMiniCart() {
    var out = '';
    for (var w in cart){
        out += cart[w];
    }
    $('#mini-cart').html(out);
}
    //Загружаю товари на сторінку
