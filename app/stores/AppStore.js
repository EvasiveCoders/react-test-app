// LIBRARY
import Immutable, {Map} from 'immutable';

// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import immutable from 'alt/utils/ImmutableUtil';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let appStore = makeHot(alt, immutable(class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.state = new Map({
      appState: new Map({}),
      dataByRestApi: new Map({}),
      data: new Map({}),
      userName: new Map({})
    });
  }

  onCreate(text) {
    text = text.trim();
    if (text === '') {
      return false;
    }
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newData = this.state.get('data').set(id, new Map({
      id: id,
      complete: false,
      edit: false,
      text: text
    }));

    this.setState(this.state.set('data', newData));
  }

  onRemove(id) {
    const newData = this.state.get('data').delete(id);
    this.setState(this.state.set('data', newData));
  }

  onRemoveAll() {
    this.setState(this.state.set('data', new Map({})));
  }

  onUpdateComplete(x) {
    let { id, complete } = x;
    this.update(id, { complete });
  }

  onUpdateCompleteAll(x) {
    let { completed } = x;
    let allTodoKeysIt = this.state.get('data').keys();
    for(let value of allTodoKeysIt){
      this.update(value, {complete: completed});
    }
  }

  onUpdateText(x) {
    let { id, text } = x;
    text = text ? text.trim() : '';
    if (text === '') {
      return false;
    }
    this.update(id, { text });
  }

  update(id, updates) {
    const newData = this.state.get('data').update(id, (todo) => {
      const updateKeys = Object.keys(updates);
      updateKeys.forEach((key) => {
        todo = todo.set(key, updates[key]);
      });
      return todo;
    });
    this.setState(this.state.set('data', newData));
  }

  updateAll(updates) {
    for (var id in this.data) {
      this.update(id, updates);
    }
  }

  onFetch(user) {
    let userName = user;
    let exists = Immutable.fromJS(this.state.get('dataByRestApi').get(userName));
    let storedData = {
      info: {},
      repos: {}
    };
    let status = '';

    if (!exists && userName) {
      this.setState(this.state.set('appState', Immutable.fromJS({state: 'loading'})));
      fetch('https://api.github.com/users/' + userName + '?client_id=ee7d879eb7377c4157bf&client_secret=a63a4bd1aa07daa4e490e2f20a4c487a79ebe6ba')
        .then((response) => {
          status = response.status;
          return response.json();
        }).then((json) => {
          if (status >= 200 && status < 300) {
            storedData.info = json;
            fetch('https://api.github.com/users/' + userName + '/repos?client_id=ee7d879eb7377c4157bf&client_secret=a63a4bd1aa07daa4e490e2f20a4c487a79ebe6ba')
              .then((response) => {
                return response.json();
              }).then((json2) => {
                storedData.repos = json2;
                this.setState(this.state.set('userName', Immutable.fromJS({value: userName})));
                this.setState(this.state.set('appState', Immutable.fromJS({state: 'repos'})));
                this.setState(this.state.set('dataByRestApi', Immutable.fromJS({[userName]: storedData, error: false})));
              }
            );
          } else {
            this.setState(this.state.set('userName', Immutable.fromJS({value: userName})));
            this.setState(this.state.set('dataByRestApi', Immutable.fromJS({[userName]: storedData, error: true})));
            this.setState(this.state.set('appState', Immutable.fromJS({state: 'error'})));
          }
        }
      );
    }
  }

  onDestroyCompleted() {
    for (let id in this.data) {
      if (this.data[id].complete) {
        this.onDestroy(id);
      }
    }
  }

  static areAllComplete() {
    let { data } = this.getState();
    for (let id in data) {
      if (!data[id].complete) {
        return false;
      }
    }
    return true;
  }
}), 'AppStore');

module.exports = appStore;
