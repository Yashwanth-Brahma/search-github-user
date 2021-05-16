import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { Bar, Column, Doughnut, Pie } from "./Charts";

const VisualCharts = () => {
  const { repos } = useGlobalContext();

  const lang = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        star: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        star: total[language].star + 1,
      };
    }
    return total;
  }, {});

  const mostused = Object.values(lang)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // console.log(mostused);

  const mostPopular = Object.values(lang)
    .sort((a, b) => {
      return b.star - a.star;
    })
    .map((item) => {
      return { ...item, value: item.star };
    })
    .slice(0, 5);

  // console.log(mostPopular);

  let { star, fork } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.star[stargazers_count] = { label: name, value: stargazers_count };
      total.fork[forks] = { label: name, value: forks };
      return total;
    },
    {
      star: {},
      fork: {},
    }
  );

  star = Object.values(star).slice(-5).reverse();
  fork = Object.values(fork).slice(-5).reverse();

  // console.log(Object.values(star).slice(-5).reverse());

  return (
    <div>
      <Wrapper className="section-center">
        <Pie data={mostused} />
        <Column data={star} />
        <Doughnut data={mostPopular} />
        <Bar data={fork} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem 2rem;
  grid-template-columns: 2fr 3fr;
  margin-top: 2rem;
  width: 95vw;
  @media (max-width: 850px) {
    grid-template-columns: auto;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
  }
`;
export default VisualCharts;
