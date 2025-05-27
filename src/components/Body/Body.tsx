import React from "react";
//https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1780028&dswid=-7812
const Body = () => {
  return (
    <div className='flex flex-col pt-8 pl-20 pr-20 laptop:pl-0 laptop:pl-4 mb-6'>
      <h1 className='flex justify-center laptop:justify-start text-2xl laptop:text-5xl tablet:text-3xl font-bold font-serif'>
        Lukas Arnroth, PhD
      </h1>
      <h1 className='text-l mt-5 '>
        <p className='py-1'>
          Currently, I am a postdoctoral researcher in the{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://www.vickovictechinnovation.com/"}
          >
            Vickovic lab
          </a>
          , focusing on Bayesian inference in spatial transcriptomics.
        </p>
        <p className='py-1'>
          I hold a PhD from the Department of Statistics at Uppsala University.
          My{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1780028&dswid=-7812"
            }
          >
            doctoral thesis
          </a>{" "}
          explores the exponential power class and addresses topics such as
          linear mixed models, quantile regression, and Bayesian density
          estimation.
        </p>
        <p className='py-1'>
          My additional research interests include spatial statistics and
          extreme value analysis.
        </p>
      </h1>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>
        &#128214; Peer-reviewed publications
      </h1>
      <ul className='list-disc ml-5 mt-1'>
        <li className='mb-1'>
          <b>Arnroth, L.</b>, and Shaobo, J. (2024),{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://www.tandfonline.com/doi/full/10.1080/03610926.2024.2438312"
            }
          >
            "Posterior rates of convergence for composite quantile regression"{" "}
          </a>
          , <em>Communications in Statistics - Theory and Methods</em>
        </li>
        <li className='mb-1'>
          Arnroth, L. (2024),{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://link.springer.com/article/10.1007/s00184-024-00950-8"
            }
          >
            "Composite Lp-quantile regression"
          </a>
          , <em>Metrika</em>
        </li>
        <li className='mb-1'>
          <b>Arnroth, L.</b>, and Vegelius, J. (2023),{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://www.tandfonline.com/doi/full/10.1080/03610918.2023.2224945"
            }
          >
            "Quantile regression based on the skewed exponential power
            distribution"
          </a>
          , <em>Communications in Statistics - Simulation and Computation</em>
        </li>
        <li className='mb-1'>
          Ahmad, R., and <b>Arnroth, L.</b> (2022),{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://www.tandfonline.com/doi/full/10.1080/00949655.2021.2007919"
            }
          >
            "Neyman's C(α) test for the shape parameter of the exponential power
            class"
          </a>
          , <em>Journal of Statistical Computation and Simulation</em>
        </li>
        <li className='mb-1'>
          Ahmad, R., and <b>Arnroth, L.</b> (2022),{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://www.tandfonline.com/doi/full/10.1080/03610926.2021.1906432"
            }
          >
            "A robustness evaluation of Bayesian tests for longitudinal data"
          </a>
          , <em>Communications in Statistics - Theory and Methods</em>
        </li>
        <li className='mb-1'>
          <b>Arnroth, L.</b>, Persson, I., and Thulin, M. (2019),{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://onlinelibrary.wiley.com/doi/full/10.1002/pst.1938"}
          >
            "Multivariate two-sample permutation tests for trials with multiple
            time-to-event outcomes"
          </a>
          , <em>Pharmaceutical statistics</em>
        </li>
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>
        &#128679; Work in progress
      </h1>
      <ul className='list-disc ml-5'>
        <li className='mb-1'>
          <b>Arnroth, L.</b>, Vickovic, S. (2025), "INLAomics for Scalable and
          Interpretable Spatial Multiomic Data Integration",{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://www.biorxiv.org/content/10.1101/2025.05.02.651831v1"}
          >
            Biorxiv preprint
          </a>
        </li>
        <li className='mb-1'>
          Spatial extreme values based on the multivariate exponential power
          distribution (with Alexander Engberg)
        </li>
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>
        &#128172; Selected talks
      </h1>
      <ul className='list-disc ml-5'>
        <li className='mb-1'>2025 - SciLifeLab Uppsala Spring Symposium</li>
        <li className='mb-1'>
          2024 -{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://www.furthlab.xyz/moltools#all"}
          >
            Molecular Tools for Functional Genomics
          </a>
          , Dept. of IGG (UU)
        </li>
        <li className='mb-1'>2023 - UppUpp, Dept. of Statistics (UU)</li>
        <li className='mb-1'>2023 - Seminar, Dept. of Mathematics (UU)</li>
        <li className='mb-1'>
          2020 -{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://linstat2024.science.upjs.sk/"}
          >
            LinStat
          </a>
          , (Poprad, Slovakia)
        </li>
        <li className='mb-1'>
          2019 -{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://www.cmstatistics.org/"}
          >
            CMStatistics
          </a>
          , (London, UK)
        </li>
        <li className='mb-1'>2019 - UppUpp, Dept. of Statistics (UU)</li>
      </ul>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>&#128187; Software</h1>
      <ul className='list-disc ml-5'>
        <li className='mb-1'>
          <b>MultServTests</b>
          {"("}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://www.datasciencemeta.com/rpackages"}
          >
            {">"} 9000 downloads
          </a>
          {")"}:{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={
              "https://cran.r-project.org/web/packages/MultSurvTests/index.html"
            }
          >
            Cran
          </a>
          ,{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://github.com/lukketotte/MultSurvTests"}
          >
            Github
          </a>
        </li>
        <li className='mb-1'>
          <b>BayesQR.jl</b>:{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://lukketotte.github.io/BayesQR.jl/dev/"}
          >
            Julia
          </a>
          ,{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"https://github.com/lukketotte/BayesQR.jl"}
          >
            Github
          </a>
        </li>
        <li className='mb-1'>
          <b>Tumly</b> (full-stack dev):{" "}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={"http://tumly.se"}
          >
            tumly.se
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Body;
