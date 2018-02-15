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
  algolia: {
    apiKey: "db51bcd5e513cfe52faa7ea59f2566b5",
    indexName: "test"
  },
  title: 'Unity CloudSave' /* title for your website */,
  tagline: 'A website for testing',
  url: 'https://rafaelnsantos.github.io/unity-cloudsave' /* your website url */,
  baseUrl: '/unity-cloudsave/' /* base url for your project */,
  projectName: 'unity-cloudsave',
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {page: 'about', label: 'About'},
    {blog: true, label: 'Blog'},
    {search: true},
    {languages: true}
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
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
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/rafaelnsantos/unity-cloudsave',
};

module.exports = siteConfig;
