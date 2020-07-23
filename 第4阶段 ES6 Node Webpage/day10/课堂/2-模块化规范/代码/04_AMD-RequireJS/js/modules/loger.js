define(['dataService', 'jquery'], function (dataService, $) {
    let name = 'Tom2'

    function showMsg() {
        $('body').css('background', '#36a')
        console.log(dataService.getMsg() + ', ' + name)
    }
    return { showMsg }
});