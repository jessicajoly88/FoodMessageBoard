import Ember from 'ember';

export default Ember.Component.extend({
  updateShowing: false,
  actions: {
  	updateShow() {
      this.set('updateShowing',true);
  	},
    deleteQuestion(model) {
      if (confirm('Are you sure you want to delete this question?')) {
      	this.sendAction('destroyQuestion', model);
      }	
    },
  	update(model) {
  	  var params = {
  	    question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes'),
  	  };
  	  this.sendAction('update', model, params);
  	  this.set('updateShowing',false);
  	}
  }
});
