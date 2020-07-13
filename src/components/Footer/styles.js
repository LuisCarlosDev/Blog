import styled from 'styled-components';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

import {
  StackOrder,
  Sizes,
  Heights,
  Color,
  Animation,
} from '../../styles/constants';

export const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: ${StackOrder.footer};

  width: 100%;

  height: ${Heights.footer};
  padding: 0 ${Sizes.default};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.darker};
  border-top: 1px solid ${Color.border};

  > div {
    display: flex;
  }
`;

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  align-items: center;

  padding: 0 ${Sizes.sm};
  height: ${Heights.footer};

  color: ${Color.primary};
  transition: color ${Animation.delay};

  &:focus,
  &:hover {
    color: ${Color.highlight};
  }
`;

const generateIcon = icon => styled(icon)`
  height: 2rem;
  width: 2rem;
`;

export const TwitterIcon = generateIcon(FaTwitter);
export const GithubIcon = generateIcon(FaGithub);
export const InstagramIcon = generateIcon(FaInstagram);
