var ButtonView = Backbone.View.extend({

  tagName: 'div',

  initialize: function (){
    this.render();
  },
  events:{
    'click': function () {
      alert('IM GORGEOUS!!!');
    }
  },
  render: function (){
    return this.$el.html('<button>Gorgeous Button Boay</button>');
  }
});