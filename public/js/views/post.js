var App = App || {};
App.View = App.View || {};

App.View.Post = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#post-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});