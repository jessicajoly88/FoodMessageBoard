import Ember from 'ember';

export default Ember.Component.extend({
  formShowing:false,
  actions: {
  	save() {
  	  var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
  	  };
  	  this.sendAction('save', params);
  	  this.set('formShowing',false);
  	},
  	
  	formShow() {
  	  this.set('formShowing', true);	
  	}
  }
});
