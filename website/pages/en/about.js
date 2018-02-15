/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;

const siteConfig = require(process.cwd() + "/siteConfig.js");

class About extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <h1><translate>About Unity CloudSave</translate></h1>
          <img src={`${siteConfig.baseUrl}img/docusaurus.svg`} />
          <p><translate>
            ...
          </translate></p>
        </Container>
        <Container className="mainContainer">
          <h2><translate>Why</translate></h2>
          <img src={`${siteConfig.baseUrl}img/oss_logo.png`} />
          <p><translate>
            ...
          </translate></p>
        </Container>
        <br/>
      </div>
    );
  }
}

About.defaultProps = {
  language: "en"
};

module.exports = About;