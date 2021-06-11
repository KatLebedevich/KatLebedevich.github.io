$(document).ready(function() {
    new WOW().init();
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});
$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});
document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
};
document.querySelectorAll('#menu > *').forEach((item) =>{
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }})

    $('#arrange').click( function (){
        $('.error-input').hide();

        let loader = $('#loader');
        let name = $('#name');
        let add = $('#address');
        let phone = $('#phone');

        let hasError = false;

        if (!name.val()){
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            hasError = true;
        } else {
            name.css('border-color', 'rgb(185, 145, 80)');
        }
        if (!add.val()){
            add.siblings('.error-input').show();
            add.css('border-color', 'red');
            hasError = true;
        } else {
        add.css('border-color', 'rgb(185, 145, 80)');
    }
        if (!phone.val()){
            phone.siblings('.error-input').show();
            phone.css('border-color', 'red');
            hasError = true;
        } else {
        phone.css('border-color', 'rgb(185, 145, 80)');
    }
        if (!hasError){
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://itlogia.ru/test/checkout',
                data:{name: name.val(), address: add.val(), phone: phone.val()}
            })
                .done(function(massage){
                    loader.hide();
                    console.log(massage);
                    if (massage.success) {
                        $('#order-form').css('display', 'none');
                        $('#order-container').css('display', 'flex').css('align-items', 'center');

                        $('#massage').css('display', 'block');
                    }
                    else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                    }
                });
        }

    })
