import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'LEARN',
    /*Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,*/
    Svg: require('../../static/img/learn.svg').default,
    //Png: '../../static/img/learn.png',
    //<img className={styles.featureSvg} alt={title}></img>
    // 
    description: (
      <>
        Here at CARBOT you can learn through our provided tutorials on 
        how to use the components needed for your project!
      </>
    ),
  },
  {
    title: 'BUILD',
    Svg: require('../../static/img/build.svg').default,
    description: (
      <>
        Choose the <em>Guide tab</em>, select a guide, and follow with step by step 
        instructions on how to make a cool robotics project!
      </>
    ),
  },
  {
    title: 'CREATE',
    Svg: require('../../static/img/create.svg').default,
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
      
      <Svg className={styles.featureSvg} alt={title} />
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
