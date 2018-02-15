/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const translate = require('../../server/translate.js').translate;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Users extends React.Component {
  render() {
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who's Using This?</h1>
            </div>
            <div className="logos">{showcase}</div>
            <p><translate>Are you using this project?</translate></p>
            <a
              href="https://github.com/rafaelnsantos/unity-cloudsave-site/edit/master/website/siteConfig.js"
              className="button">
              <translate>Add your company</translate>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
