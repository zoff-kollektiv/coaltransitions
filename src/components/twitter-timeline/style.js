import css from 'styled-jsx/css';

import { mixins, colors, mq } from '../../token';

export default css`
  ul {
    ${mixins.resetList()}

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2.5rem;
  }

  li {
    flex: 0 0 33%;
  }

  .title {
    ${mixins.text('extra-big')}

    color: ${colors.blueBrand};
  }

  @media ${mq.tablet} {
    .title {
      ${mixins.text('extra-big', 'tablet')}
    }
  }

  @media ${mq.desktop} {
    .title {
      ${mixins.text('extra-big', 'desktop')}
    }
  }
`;
