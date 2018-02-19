/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: '2DverseStudio',
    image: '/unity-cloudsave/img/logo-menor.png',
    infoLink: 'http://2dversestudio.com.br/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Unity CloudSave' /* title for your website */,
  tagline: 'Open Source cloudsave solution for unity mobile and WebGL.',
  url: 'https://rafaelnsantos.github.io/unity-cloudsave' /* your website url */,
  baseUrl: '/unity-cloudsave/' /* base url for your project */,
  projectName: 'unity-cloudsave',
  headerLinks: [
    {doc: 'server-installation', label: 'Docs'},
    {doc: 'api-documentation', label: 'API'},
    {page: 'help', label: 'Help'},
    {page: 'about', label: 'About'},
    {blog: true, label: 'Blog'},
    {search: true},
    {languages: true}
  ],
  users,
  editUrl: 'https://github.com/rafaelnsantos/unity-cloudsave-site/edit/master/docs/',
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#7541A8',
    secondaryColor: '#000000',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' 2DverseStudio',
  organizationName: 'rafaelnsantos', // or set an env variable ORGANIZATION_NAME
  projectName: 'unity-cloudsave', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/rafaelnsantos/unity-cloudsave',
  algolia: {
    apiKey: 'c2754e9c74461dc7d77daac05ea215ca',
    indexName: 'unity_cloud_save'
  }
};

module.exports = siteConfig;
