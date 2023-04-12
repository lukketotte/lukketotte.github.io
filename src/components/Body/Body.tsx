import React from 'react';

const Body = () => {
  return (
    <div className='flex flex-col pt-8 pl-20 pr-20 laptop:pl-0 laptop:pl-4'>
      <h1 className='flex justify-center laptop:justify-start text-2xl laptop:text-5xl tablet:text-3xl font-bold font-serif'>
        Lukas Arnroth
      </h1>
      <h1 className='text-l mt-5 '>
        I am a PhD-candidate at the department of Statistics, Uppsala University. My research
        focuses on the exponential power class and touches on, e.g., linear mixed models, quantile
        regression, Bayesian density estimation and extreme values.
      </h1>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Peer-reviewed publications</h1>
      <ul className='list-disc ml-5'>
        <li>
          Ahmad, R., and Arnroth, L. (2022),{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://www.tandfonline.com/doi/full/10.1080/00949655.2021.2007919'}
          >
            "Neyman's C(α) test for the shape parameter of the exponential power class"
          </a>
          , <em>Journal of Statistical Computation and Simulation</em>
        </li>
        <li>
          Ahmad, R., and Arnroth, L. (2022),{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://www.tandfonline.com/doi/full/10.1080/03610926.2021.1906432'}
          >
            "A robustness evaluation of Bayesian tests for longitudinal data"
          </a>
          , <em>Communications in Statistics - Theory and Methods</em>
        </li>
        <li>
          Arnroth, L., Persson, I., and Thulin, M. (2019),{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://onlinelibrary.wiley.com/doi/full/10.1002/pst.1938'}
          >
            "Multivariate two-sample permutation tests for trials with multiple time-to-event
            outcomes"
          </a>
          , <em>Pharmaceutical statistics</em>
        </li>
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Work in progress</h1>
      <ul className='list-disc ml-5'>
        <li>
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://github.com/lukketotte/SepdQuantile.jl'}
          >
            Quantile regression based on the skewed exponential power distribution
          </a>{' '}
          (with Johan Vegelius)
        </li>
        <li>
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://github.com/lukketotte/CompositeLPQR'}
          >
            Composite Lp-quantile regression
          </a>
        </li>
        <li>
          Posterior contraction rate of Bayesian composite quantile regression (with Shaobo Jin)
        </li>
        <li>
          Spatial extreme values based on the multivariate exponential power distribution (with
          Alexander Engberg)
        </li>
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Software</h1>
      <ul className='list-disc ml-5'>
        <li>
          <b>MultServTests</b>:{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://cran.r-project.org/web/packages/MultSurvTests/index.html'}
          >
            Cran
          </a>
          ,{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://github.com/lukketotte/MultSurvTests'}
          >
            Github
          </a>
        </li>
        <li>
          <b>BayesQR.jl</b>:{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://lukketotte.github.io/BayesQR.jl/dev/'}
          >
            Julia
          </a>
          ,{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://github.com/lukketotte/BayesQR.jl'}
          >
            Github
          </a>
        </li>
        <li>
          <b>Tumly</b> (full-stack dev):{' '}
          <a className='text-blue-600 hover:text-blue-400' href={'http://tumly.se'}>
            tumly.se
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Body;
