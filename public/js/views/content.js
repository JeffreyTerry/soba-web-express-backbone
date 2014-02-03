var App = App || {};
App.View = App.View || {};

App.View.Content = Backbone.View.extend({
  tagName: 'div',
  id: 'actual-content',
  className: 'stuff',

  template: _.template( $('#content-template').html() ),

  events: {
    'click a[href="http://news.bbc.co.uk"]': 'clickedLink',
    'click h5': 'clickedHeader'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  clickedLink: function(event) {
    console.log('intercepted click event');
    return false;
  },

  clickedHeader: function(event) {
    console.log('intercepted header click event');
    return false;
  }
});