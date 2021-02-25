var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.addEventListener("backbutton", onBackKeyDown, false);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function exitFromApp(){
    if (navigator.app) {
        navigator.app.exitApp();
    } else if (navigator.device) {
        navigator.device.exitApp();
    } else {
        window.close();
    }
};
function onBackKeyDown(){
    window.history.back();
    // if( confirm("¿Realmente desea salir de la aplicación?") )
    // {
    //     navigator.app.exitApp();
    // }
    // // return false;
};
app.initialize();
(function($){
    var url2 = window.location.pathname;
    var num2 = jQuery(".thimno").text().replace(/\s/g, "");
    var numsum2 = Number(num2);
    if (numsum2 < 630) {
        $( "<a id='siguiente' class='waves-effect waves-light blue darken-4' href=''><i class='small material-icons'>chevron_right</i></a>").insertAfter( ".thimno");
    };
    if (numsum2 > 1 ) {
        $( "<a id='atras' class='waves-effect waves-light blue darken-4' href=''><i class='large material-icons'>chevron_left</i></a>").insertAfter(".thimno");
    }
})(jQuery);