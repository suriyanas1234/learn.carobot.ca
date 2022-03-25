import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import learnImg from '../../static/img/learn.png';
import buildImg from '../../static/img/build.png';
import createImg from '../../static/img/create.png';

const FeatureList = [
  {
    title: 'LEARN',
    /*Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,*/
    Svg: learnImg, //require('../../static/img/learn.svg').default,
    description: (
      <>
        Here at CARBOT you can learn through our provided tutorials on 
        how to use the components needed for your project!
      </>
    ),
    
  },
  {
    title: 'BUILD',
    Svg: buildImg, // require('../../static/img/build.svg').default,
    description: (
      <>
        Choose the Guide tab, select a guide, and follow with step by step 
        instructions on how to make a cool robotics project!
      </>
    ),
    
  },
  {
    title: 'CREATE',
    Svg: createImg, // require('../../static/img/create.svg').default,
    description: (
      <>
        The skys the limit! You can design and build your own robotics project!!
      </>
    ),
    
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 class={styles.fontColour}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
