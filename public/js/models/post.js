var App = App || {};
App.Model = App.Model || {};

App.Model.Post = Backbone.Model.extend({
  defaults: {
    title: 'untitled'
  },

  initialize: function() {
    console.log('created Post');
  },

  description: function() {
    return this.get('title') + ", " + this.get('author');
  }
});