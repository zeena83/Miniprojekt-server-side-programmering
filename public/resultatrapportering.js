$(function () {
  var socket = io();
  
  socket.on("rapport", (msg) => {
    $("#klient").append($("<tr>")
      .append($("<td>").text(`${msg.lokal}`))
      .append($("<td>").text(`${msg.parti}`))
      .append($("<td>").text(`${msg.antal}`))
    );
  })
});
    

