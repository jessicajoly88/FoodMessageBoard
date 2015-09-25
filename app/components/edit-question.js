import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  	update(model) {
  	  var params = {
  	    question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
  	  };
  	  this.sendAction('update', model, params);
  	}
  }
});
