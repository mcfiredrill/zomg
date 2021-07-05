import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TransitionComponentComponent extends Component {
  @service router;
  @tracked term;

  @action
  doTransition(){
    console.log(this.term);
    this.router.transitionTo({
      queryParams: {
        term: this.term
      }
    });
  }
}
