import { css, cx } from 'emotion'
import React from 'react'
import { render } from 'react-dom';

import { FaFacebook, FaLinkedin, FaGooglePlus, FaLine, FaKakao } from '../../src/styled/icons'
import { ShareButtonIconOnly, ShareBlockStandard } from '../../src'

const App = props => {
  const shareBlockProps = {
    url: 'https://code.ubai.co',
    button: ShareButtonIconOnly,
    buttons: [
      { network: 'Facebook', icon: FaFacebook },
      { network: 'Linkedin', icon: FaLinkedin },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Line', icon: FaLine },
      { network: 'Kakao', icon: FaKakao }
    ],
    text: `Learn Solidity`,
    longtext: `become solidity programmer`
  }

  const styles = css`
    display: flex;
    flex-direction: column;

    & .rcs-header {
      font-family: '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      font-size: 24px;
      line-height: 1;
      margin: 0 0 0.5em 0;
      text-align: center;
    }

    & .rcs-buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
  `

  return (
    <div className={cx(styles)}>
      <ShareBlockStandard {...shareBlockProps} />
    </div>
  )
}

render(<App />, document.getElementById('root'));
