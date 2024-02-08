// Spinner.js
import React from 'react';
import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const Spinner = () => {
  return (
    <div className="sweet-loading">
      <SyncLoader css={override} size={10} color={'#ffffff'} loading={true} />
    </div>
  );
};

export default Spinner;
