$(document).ready(function() {
  $('body').on('keypress', function(event) {
    switch (event.keyCode) { //keycodes
      case 43:
        $('#numBox').append('+');
        break;
      case 48:
        $('#numBox').append('0');
        break;
      case 49:
        $('#numBox').append('1');
        break;
      case 50:
        $('#numBox').append('2');
        break;
      case 51:
        $('#numBox').append('3');
        break;
      case 52:
        $('#numBox').append('4');
        break;
      case 53:
        $('#numBox').append('5');
        break;
      case 54:
        $('#numBox').append('6');
        break;
      case 55:
        $('#numBox').append('7');
        break;
      case 56:
        $('#numBox').append('8');
        break;
      case 57:
        $('#numBox').append('9');
        break;
      case 61:
        submitNums();
        break;
      case 42:
        $('#numBox').append('*');
        break;
      case 43:
        $('#numBox').append('+');
        break;
      case 45:
        $('#numBox').append('-');
        break;
      case 46:
        $('#numBox').append('.');
        break;
      case 47:
        $('#numBox').append('/');
        break;
      case 61:
        submitNums();
        break;
      case 99:
        clearNums();
        break;
    }
  }); //end keycodes
  $('#0').on('click', function() {
    $('#numBox').append('0');
  });
  $('#1').on('click', function() {
    $('#numBox').append('1');
  });
  $('#2').on('click', function() {
    $('#numBox').append('2');
  });
  $('#3').on('click', function() {
    $('#numBox').append('3');
  });
  $('#4').on('click', function() {
    $('#numBox').append('4');
  });
  $('#5').on('click', function() {
    $('#numBox').append('5');
  });
  $('#6').on('click', function() {
    $('#numBox').append('6');
  });
  $('#7').on('click', function() {
    $('#numBox').append('7');
  });
  $('#8').on('click', function() {
    $('#numBox').append('8');
  });
  $('#9').on('click', function() {
    $('#numBox').append('9');
  });
  $('#add').on('click', function() {
    $('#numBox').append('+');
  });
  $('#subtract').on('click', function() {
    $('#numBox').append('-');
  });
  $('#divide').on('click', function() {
    $('#numBox').append('/');
  });
  $('#multiply').on('click', function() {
    $('#numBox').append('*');
  });
  $('#dot').on('click', function() {
    $('#numBox').append('.');
  });
  $('#clear').on('click', clearNums);
  $('#submit').on('click', submitNums);
});

var newNumbers = [];

function submitNums() {
  console.log('added numbers!');
  newNumbers = $('#numBox').text();
  console.log('sending: ', newNumbers);
  $.ajax({
    type: 'POST',
    url: '/resultNumber',
    data: {
      input: newNumbers
    },
    success: function(response) {
      console.log('posted: ', response);
      $('#numBox').text(response);
    }
  });
}

function clearNums() {
  $('#numBox').empty();
  console.log('cleared inputs');
}
