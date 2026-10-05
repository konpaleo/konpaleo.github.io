---
layout: post
title: Fisheries Predictive Modeling
repository: https://github.com/konpaleo/TS-clustering-and-predictive-modeling-of-global-fisheries-data
permalink: /projects/fisheries-predictive-modeling/
date: 2014-07-14
img: fisheries.png
project-date: April 2014
category: Fisheries Data Science
description: This project analyzes global fisheries data across capture production, aquaculture, and per-capita consumption. It combines time-series clustering and predictive modelling to identify country-level patterns and forecast future global sustainable level
challenge: The project addresses two related challenges: identifying meaningful similarities between countries with different temporal patterns, and predicting future global trends from a relatively small historical dataset. The analysis therefore explores both country-level time-series structure and global-level predictive modelling.
methodology: The first part uses K-Means, OPTICS, DBSCAN, and time-series clustering with DTW/Soft-DTW to group countries based on their temporal patterns. The resulting clusters are then examined using multivariate time-series models such as VAR and VECM. The second part uses the global time series to build a predictive pipeline for future sustainable levels. I compare Linear Regression, Bayesian Ridge, SVR, and Random Forest models, using automated hyperparameter search with GridSearchCV and cross-validation to evaluate model performance and generalization.
tags:
    - Clustering
    - Time Series Modeling
    - Regression
    - ML Pipeline Automation
    - Model Evaluation
technologies:
    - SKlearn
    - TSlearn
    - Numpy

---
