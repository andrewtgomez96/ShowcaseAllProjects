function viewPage () {
    var el = document.body;
    toggleScreen(el);
}

function toggleScreen(el) {
    if(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement){
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }
    }else {
        if(document.documentElement.requestFullscreen){
            document.body.requestFullScreen();
        }else if(document.documentElement.mozrequestFullScreen){
            document.body.mozrequestFullScreen();
        }else if(document.documentElement.webkitrequestFullscreen){
            document.body.webkitrequestFullscreen();
        }else if(document.documentElement.msrequestFullscreen){
            document.body.msrequestFullscreen();
        }
    }
}