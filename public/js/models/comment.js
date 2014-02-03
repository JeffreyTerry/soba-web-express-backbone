var App = App || {};
App.Model = App.Model || {};

App.Model.Comment = Backbone.Model.extend({
  defaults: {
    
  },

  initialize: function() {
    console.log('created comment');
  }
});