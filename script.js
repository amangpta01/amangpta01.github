$(function(){
$('#myModal').modal({
   show:true,
   backdrop:'static'
});
 //now on button click
  $('#myModal').modal('show');
});

$(document).ready(function() {
    $("#MyModal").modal();
  });

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
