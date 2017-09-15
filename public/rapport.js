$(function () {
            let socket = io();
        
    $("form").submit(function(){
                
            var msg = {
              lokal: $("#lokal1").val(),
              parti: $("#parti1").val(),
              antal: $("#antal1").val()
            }
             
            socket.emit("rapport", msg);
        });
});