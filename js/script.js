$(function () {

  var html = $('#tmpl').html();
  var data ={
    name: 'Климов Юрий Викторович',
    foto: 'img/my-foto.jpg',
    position: 'Системный администратор',
    number: '+380501314543',
    vk: 'http://vk.com/id30746756',
    fidback: 'могу запилить сервер'

  }
  var content = tmpl(html, data);


  $('.main').append(content);

});
