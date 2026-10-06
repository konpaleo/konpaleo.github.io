---
layout: post
title: Markovian Stock Day Trading
repository: https://github.com/konpaleo/Markovian-stock-day-trading
permalink: /projects/stock-day-trading/
date: 2014-07-13
img: stock-day-trading.png

meta-org: Technical University of Crete
meta-date: 2024
meta-type: Research

project-date: April 2014
category: Reinforcement Learning
description: This research project is about RL and deep RL algorithms for simplified stock day-trading scenarios, in which N stocks can alternate between a high (H) and a low (L) state, with a different reward at each state. The aim is to compare tabular Q-learning and deep Q-Network algorithms (where the environment is unknown to the agent) to the ground truth of Policy Iteration (where the environment is known).
challenge: Comparing learning agents is challenging when their performance cannot be measured against a reliable reference. The project uses a controlled trading environment where rewards and state transitions define a known ground truth.
methodology: Policy Iteration provides the reference policy, which is compared with tabular Q-learning and Deep Q-Network agents learning from the environment through interaction.
tags:
    - RL
    - DeepRL
    - Q-learning
    - Deep Q-Network
    - Markov Chains
technologies:
    - Numpy
    - Pandas
    - Pytorch
---
