$(document).ready(function (){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;
    // kjh


    const car = ['./asserts/Img_05.png','./asserts/Img_06.png']

    $(document).on('keypress',function (e){
        if (e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspensions');
        }
    })

    $(document).on('keypress',function (e){
        if (e.which == 119){
            if (flag){
                flag = false;
                $img.attr('src',car[0]);
            }else {
                flag = true;
                $img.attr('src',car[1]);
            }
        }
    })

})