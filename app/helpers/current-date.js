import Ember from 'ember';

export function currentDate() {
  return moment().format('LLL');
}

export default Ember.Helper.helper(currentDate);
