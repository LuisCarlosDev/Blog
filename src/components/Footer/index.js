import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import {
  Container,
  Link,
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
} from './styles';

const trackClick = item =>
  trackCustomEvent({
    category: 'Social',
    action: 'click',
    label: `Social - ${item}`,
  });

export default function Footer() {
  return (
    <Container>
      <div>
        <Link
          href="https://twitter.com/Luis_Carlos_Ofc"
          title="Twitter"
          onClick={() => trackClick('Twitter')}
        >
          <TwitterIcon />
        </Link>
        <Link
          href="https://github.com/LuisCarlosDev"
          title="GitHub"
          onClick={() => trackClick('GitHub')}
        >
          <GithubIcon />
        </Link>
        <Link
          href="https://www.instagram.com/luis_carlos__ofc"
          title="Instagram"
          onClick={() => trackClick('Instagram')}
        >
          <InstagramIcon />
        </Link>
      </div>
    </Container>
  );
}
