/*$('.start').on("click",function(){
    $('.stage1').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png','Hãy làm một chiếc bánh!','Vì hôm nay là sinh nhật của bạn, tôi thấy thật phù hợp khi bạn có thể làm một chiếc bánh sinh nhật của riêng mình. Bắt đầu bằng cách trộn hỗn hợp bánh của bạn, sau đó nướng trong lò nướng và cuối cùng là trang trí. Chúc sinh nhật vui vẻ và hạnh phúc');
})*/

$('.start').addEventListener('touchstart', function() {
    $('.stage1').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png','Hãy làm một chiếc bánh!','Vì hôm nay là sinh nhật của bạn, tôi thấy thật phù hợp khi bạn có thể làm một chiếc bánh sinh nhật của riêng mình. Bắt đầu bằng cách trộn hỗn hợp bánh của bạn, sau đó nướng trong lò nướng và cuối cùng là trang trí. Chúc sinh nhật vui vẻ và hạnh phúc');
})
function start(){
    document.getElementById("stage1").fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png','Hãy làm một chiếc bánh!','Vì hôm nay là sinh nhật của bạn, tôi thấy thật phù hợp khi bạn có thể làm một chiếc bánh sinh nhật của riêng mình. Bắt đầu bằng cách trộn hỗn hợp bánh của bạn, sau đó nướng trong lò nướng và cuối cùng là trang trí. Chúc sinh nhật vui vẻ và hạnh phúc');
}
progress = 1;

$('.modal_content button').click(function(){
    progress++;
    close_modal(progress)
})

function close_modal(callback){
    modal.css('transform','translateY(-50%) scale(0)')
    setTimeout(function(){
        $('.stage' + callback).fadeIn();
    },600)
}


function fire_modal(imgurl,title,content){

    modal = $('.birthday_inner__modal');
    modal.find('h1').html(title);
    modal.find('img').attr('src',imgurl);
    modal.find('p').html(content);
    setTimeout(function(){
        modal.css('transform','translateY(-50%) scale(1)')
    },1000)


}


mixing = false;
mixtimes = 0;

$('.mixer').click(function(){
    if(mixing == false){
        mixing = true
        mixtimes++;
        $('.mix_spoon img').addClass('move')
        setTimeout(function(){
            $('.mix_spoon img').removeClass('move')
            mixing = false;
        },1000)
    }
    if(mixtimes == 6){
        $('.stage2').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png','Trộn thành công!','Xin chúc mừng, hỗn hợp thật hoàn hảo! Sau khi đổ hỗn hợp vào hộp nướng, giờ là lúc cho hỗn hợp vào lò nướng của chúng tôi trong khoảng 3 giây. Đó là thời gian đủ để có một lớp bông lan xốp đẹp.');

    }

})

$('.tin').draggable({
    revert:true
})
$( ".oven" ).droppable({
    drop: function( event, ui ) {
        $('.stage3').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png','Nướng thành công!','Tuyệt vời! Bạn đúng là một đầu bếp bậc thầy. Đế bánh đã được nướng hoàn toàn và trông siêu ngon. Giờ là lúc kết hợp lớp bống lan này với nhiều nguyên liệu khác như mứt, chanh dây, sô cô la, v.v.');
    }
})

bases = 0;
fillings = 0;

$('.sponges .item_inner').click(function(){
    $('.sponges').addClass('inactive')
    $('.fillings').removeClass('inactive')
    t = $(this).attr('class').split(' ').pop();
    bases++
    if(bases < 6){
        add_sponge(t)
    }
})

$('.fillings .item_inner').click(function(){
    $('.fillings').addClass('inactive')
    $('.sponges').removeClass('inactive')
    f = $(this).attr('class').split(' ').pop();
    fillings++
    if(fillings < 7){
        add_filling(f)
    }
})

function add_sponge(t){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
    $('.sponges h5 span').html(bases)
}

$('.startagain').click(function(){
    $('.cakemake').html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $('.sponges h5 span').html(bases)
    $('.fillings h5 span').html(fillings)
     $('.fillings').removeClass('inactive')
    $('.sponges').addClass('inactive')
})
function add_filling(f){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
    $('.fillings h5 span').html(fillings)
}

function fin(){
    $('h1,h2,.options,.startagain,.add').fadeOut();
    
    setTimeout(function(){
        $('.cakemake').fadeIn()
        $('.cakemake').animate({'margin-top':'0px'})
    },1000)
    add_candle()
    $('svg').addClass('text')
}

function add_candle(){
    var stages = $('.cakemake > div').length;
    var h = (stages/2) * 41 + 22 + 'px';
    console.log(stages)
    $('.cakemake').prepend('<div class="candle" ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>')
    $('svg').show()
    setTimeout(function(){
        $('.sa').fadeIn()
    },2200)
    
}

$('.add').click(function(){
    fin();
})

$('.sa').click(function(){
    window.location='timeline.html';
})
