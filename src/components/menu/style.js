import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../token';

export default css`
  .menu {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 2rem 0.75rem;
    width: 100%;
  }

  @media ${mq.phone} {
    .menu {
      padding: 1.5rem 1.5rem 2rem 1.5rem;
    }
  }

  @media ${mq.tablet} {
    .menu {
      flex-direction: row;
    }
  }

  .main-menu {
    ${mixins.resetList()}

    display: none;
    margin-top: 1rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .main-menu {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-left: 0.5rem;
      margin-top: 0;
    }
  }

  @media ${mq.desktop} {
    .main-menu {
      margin-left: 1.5rem;
    }
  }

  li {
    align-items: center;
    display: flex;
  }

  li + li {
    margin-left: 1rem;
  }

  @media ${mq.desktop} {
    li + li {
      margin-left: 2.5rem;
    }
  }
`;

export const link = css.resolve`
  a {
    ${mixins.text('small')}

    border-bottom: 0.2rem solid transparent;
    color: ${colors.blueBrand};
    display: inline-block;
    font-weight: 700;
    letter-spacing: 0.05rem;
    line-height: 1.3;
    padding-top: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    a {
      ${mixins.text('small', 'tablet')}

      border-bottom-width: 0.3rem;
      font-weight: 700;
      line-height: 1.4;
    }
  }

  @media ${mq.desktop} {
    a {
      ${mixins.text('regular', 'desktop')}

      border-bottom-width: 0.3rem;
      font-weight: 700;
      line-height: 1.4;
    }
  }

  a:hover,
  a:focus {
    border-bottom-color: currentColor;
  }
`;

export const linkActive = css.resolve`
  a {
    border-bottom-color: currentColor;
    color: ${colors.greenBrand};
    font-weight: 700;
  }
`;

export const socialMediaLink = css.resolve`
  a {
    color: ${colors.blueBrand};
    display: inline-block;
  }

  a:hover,
  a:focus {
    color: ${colors.blueActionActive};
  }
`;

export const socialMediaLabel = css.resolve`
  position: absolute;
`;

export const socialMediaIcon = css.resolve`
  svg {
    height: 1rem;
    margin-left: 0.5rem;
    width: 1rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 1.5rem;
      margin-left: 1rem;
      width: 1.5rem;
    }
  }
`;

export const logo = css.resolve`
  svg {
    height: 3.5rem;
    width: 8.5rem;
  }

  @media ${mq.desktop} {
    svg {
      height: 6rem;
      width: 14.5rem;
    }
  }
`;

export const logoLink = css.resolve`
  a {
    margin-right: 1rem;
  }
`;
