// Require basic js libs:
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require wiselinks
//= require require/build/require
//= require underscore/underscore-min
//= require bootstrap-sprockets
//
// Require bower components:
//= require angular/angular
//= require restangular/dist/restangular.min
//= require angular-ui/build/angular-ui
//= require angular-bootstrap/ui-bootstrap.min
//= require angular-bootstrap/ui-bootstrap-tpls.min
//= require angular-ui-select/dist/select.min
//= require angular-google-maps/dist/angular-google-maps.min
//
//= require module
//= require components

$(document).on('ready page:load', function() {
  angular.bootstrap('body', ['nemuApp'])
})

$(function() {
  $('[data-toggle="tooltip"]').tooltip()

  window.wiselinks = new Wiselinks()

  $(document).off('page:loading').on('page:loading', function(event, $target, render, url) {
	$target.addClass('wiselinks-loading')
  })

  $(document).off('page:done').on('page:done', function(event, $target, render, url) {
	$target.removeClass('wiselinks-loading')
  })
})
