import _ from 'lodash';
import React from 'react';
import Select from 'react-select';
import {observable, computed, action} from 'mobx';
import {observer} from 'mobx-react';

import fallacies from '../../../data/records';

@observer
export default class HomeView extends React.Component {
  @observable currentFallacy = null;
  @observable currentFallacyExample = null;
  @observable selectedFallacy = null;
  @observable totalGuesses = 0;
  @observable correctGuesses = 0;
  @observable answeredExamples = [];
  @observable drawAnswered = false;

  constructor(props) {
    super(props);

    this.drawUnansweredExample();
  }

  @computed get selectedFallacyIsCorrect() {
    if (!this.selectedFallacy) return false;

    return this.selectedFallacy.id === this.currentFallacy.id;
  }

  @computed get correctGuessesPercentage() {
    return Math.round(this.correctGuesses / this.totalGuesses * 100);
  }

  @computed get guessesStatsLabel() {
    let percentage = '';

    if (!isNaN(this.correctGuessesPercentage)) {
      percentage = `(${this.correctGuessesPercentage}%)`;
    }

    return `${this.correctGuesses}/${this.totalGuesses} guesses ${percentage}`;
  }

  @computed get allExamples() {
    return _.reduce(fallacies, (memo, flc) => {
      memo.push(...flc.examples);

      return memo;
    }, []);
  }

  @computed get unansweredExamples() {
    return _.filter(this.allExamples, example => {
      return !_.includes(this.answeredExamples, example);
    });
  }

  @computed get unansweredExamplesFallacies() {
    return _.filter(fallacies, flc => {
      return _.intersection(flc.examples, this.unansweredExamples).length;
    });
  }

  @action drawExample() {
    this.selectedFallacy = null;
    this.currentFallacy = _.sample(fallacies);
    this.currentFallacyExample = _.sample(this.currentFallacy.examples.slice());
  }

  @action drawUnansweredExample() {
    this.selectedFallacy = null;
    this.currentFallacyExample = _.sample(this.unansweredExamples);
    this.currentFallacy = this.getFallacyByExample(this.currentFallacyExample)
  }

  @action resetUnansweredExamples() {
    this.answeredExamples.length = 0;
  }

  @action selectFallacy(fallacy) {
    this.selectedFallacy = fallacy;
    this.totalGuesses += 1;

    if (this.selectedFallacyIsCorrect) {
      this.correctGuesses += 1;
    }

    if (!_.includes(this.answeredExamples.slice(), this.currentFallacyExample)) {
      this.answeredExamples.push(this.currentFallacyExample);
    }
  }

  getFallacyByExample(example) {
    return _.find(fallacies, flc => {
      return _.includes(flc.examples, example);
    });
  }

  render() {
    return <div className="HomeView">
      {
        _.isEmpty(this.unansweredExamples)
        ?
        <div>
          <p>All examples answered</p>

          <button onClick={e => this.resetUnansweredExamples()}>Retry</button>
        </div>
        :
        <div>
          <div>
            <p>{this.currentFallacyExample}</p>
          </div>

          <div>
            <div>
              <p>{this.guessesStatsLabel}</p>
            </div>

            <div>
              <Select
              options={_.map(fallacies, flc => {
                return {
                  value: flc.id,
                  label: flc.name,
                };
              })}
              value={_.get(this.selectedFallacy, 'id')}
              disabled={this.selectedFallacyIsCorrect}
              clearable={false}
              onChange={obj => {
                const fallacy = _.find(fallacies, {id: obj && obj.value});

                this.selectFallacy(fallacy);
              }}
              />
            </div>

            <div>
              {
                this.selectedFallacy
                &&
                <div>
                  <p>{this.selectedFallacyIsCorrect ? 'correct' : 'incorrect'}</p>

                  <button>Report wrong answer</button>

                  <button
                  disabled={!this.selectedFallacyIsCorrect}
                  onClick={e => this.drawUnansweredExample()}
                  >Next</button>
                </div>
              }

              <p>{this.currentFallacy.info}</p>
              <p>{this.currentFallacy.description}</p>
            </div>
          </div>

          <div>
            {
              _.isEmpty(this.unansweredExamples)
              ?
              'All examples answered'
              :
              `${this.unansweredExamples.length} unanswered examples in ${this.unansweredExamplesFallacies.length} fallacies`
            }
          </div>
        </div>
      }
    </div>
  }
}