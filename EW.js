var jsHeader = document.getElementById('jsHeader');
jsHeader.addEventListener('click', function(){
    jsHeader.style.color = 'purple'
})
function dataAlert(form) {
    var name = form.name.value;
    var address = form.address.value;
    alert('Get ready '  + name +'. A transport will be with you at ' + address + ' shortly.');
}
$(function(){
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function(){
        let i, stop;
        i = 1;
        stop = 4; //num elements
        setInterval(function(){
            if (i > stop){
                return;
            }
            $('#len'+(i++)).toggleClass('bounce');
        }, 500)
    });
});