
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','700'),
    routes: [
      {
        path: '/intro',
        component: ComponentCreator('/intro','283'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/kicad/kicad-basic',
        component: ComponentCreator('/kicad/kicad-basic','f53'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/product_guide/glowing-heart',
        component: ComponentCreator('/product_guide/glowing-heart','b2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide','a97'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd','45e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial','9d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino','972'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires','72f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires',
        component: ComponentCreator('/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires','0c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
