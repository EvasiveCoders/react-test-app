// NODE
import fs from 'fs';

// EXTERNALS
import _ from 'lodash';
import Helmet from 'react-helmet';
import Iso from 'iso';
import React from 'react';
import Router from 'react-router';

// CORE
import routes from '../../app/routes';
import alt from '../../app/alt';

let html = '';

var renderer = {
  init: (type) => {
    html = type === 'dev' ?
      fs.readFileSync('./assets/index-dev.html', {encoding: 'utf8'})
      :
      fs.readFileSync('./dist/index-prod.html', {encoding: 'utf8'});
  },
  render: (req, res, next) => {
    let markup = '',
      iso = new Iso();

    const oneItemBootstraped = {
      'AppStore': {
        'dataByRestApi': {},
        'data': {
          'iaqpor7p': {
            'id': 'iaqpor7p',
            'complete': false,
            'text': 'fsfsdf'
          }
        }
      }
    };
    alt.bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));

    try {
      Router.run(routes, req.path, (Handler, state) => {
				// alt flux flush
        let content = React.renderToString(React.createElement(Handler));
        iso.add(content, alt.flush());

        res.contentType = 'text/html; charset=utf8';
        let notFound = _.find(state.routes, {isNotFound: true});

        if (notFound !== undefined) {
          res.status(404);
        }

				// RENDERING back to client
        let markupContent = iso.render();
        // DOM <head> instrumentation
        let head = Helmet.rewind();
        markup = html.replace('META', head.meta).replace('TITLE', head.title).replace('LINK', head.link).replace('CONTENT', markupContent);
        // SEND response
        res.send(markup);
      });
    }
    catch (e) {
      return next(e);
    }
  }
};

export default renderer;
