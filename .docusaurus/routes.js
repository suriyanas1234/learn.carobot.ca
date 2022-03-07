
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','c25'),
    routes: [
      {
        path: '/docs/guide',
        component: ComponentCreator('/docs/guide','6de'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/kicad/kicad-basic',
        component: ComponentCreator('/docs/kicad/kicad-basic','464'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/product_guide/glowing-heart',
        component: ComponentCreator('/docs/product_guide/glowing-heart','387'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide','9f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd','509'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial','d49'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino','9cf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires','67e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires','76d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tinkerkit/tinkerkit-lcd-tutorials',
        component: ComponentCreator('/docs/tinkerkit/tinkerkit-lcd-tutorials','3c0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/guide',
    component: ComponentCreator('/guide','ec0'),
    routes: [
      {
        path: '/guide/guide',
        component: ComponentCreator('/guide/guide','d7a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/guide/product_guide/glowing-heart',
        component: ComponentCreator('/guide/product_guide/glowing-heart','759'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/resources',
    component: ComponentCreator('/resources','c35'),
    routes: [
      {
        path: '/resources/kicad/kicad-basic',
        component: ComponentCreator('/resources/kicad/kicad-basic','f89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/resources/ref',
        component: ComponentCreator('/resources/ref','83d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
