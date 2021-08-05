import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './dino.js'

$(document).ready(function() {
  $('#').click(function() {
    let userParagraph = $('#paragraph').val();
    $('#paragraph').val("");
    let promise = Dino.getDinos();
    promise.then(function(response) {
      const body =JSON.parse(reponse);
      $()
    })
  })
})


