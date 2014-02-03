var App = App || {};
App.View = App.View || {};

App.View.Posts = Backbone.View.extend({
  tagName: 'div',
  template: _.template( $('#posts-template').html() ),

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'add', this.addAll);
  },

  render: function() {
    this.$el.html( this.template() );
    this.$postsList = this.$el.find('#posts-list');
    return this;
  },

  addAll: function() {
    this.$postsList.empty();
    this.collection.each(this.addOne, this);
  },

  addOne: function(post) {
    var postView = new App.View.Post({model: post});
    this.$postsList.append( postView.render().el );
  }
});