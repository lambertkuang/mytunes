var ButtonModel = Backbone.Model.extend({

  initialize: function (){
    this.set('playList', new SongQueue());
  }
});