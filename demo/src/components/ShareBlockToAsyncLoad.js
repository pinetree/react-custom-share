import React from 'react';

import { ShareButtonRectangle, ShareBlockStandard } from '../../../src';

import { FaTwitter, FaFacebook, FaGooglePlus, FaEnvelope, FaPinterest, FaLinkedin } from 'react-icons/fa';

const ShareBlockToAsyncLoad = props => {
  const shareBlockProps = {
    url: 'https://github.com/greglobinski/react-custom-share',
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Email', icon: FaEnvelope },
      {
        network: 'Pinterest',
        icon: FaPinterest,
        media:
          'https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif',
      },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - react-custom-share component`,
    longtext: `Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.`,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareBlockToAsyncLoad;
