import React from 'react';
import RootStyle from '../root';

describe('RootStyle', () => {
  it('applicationView should have correct layout', () => {
    expect(RootStyle.applicationView.flex).to.equal(1);
  });

  it('applicationContainer should have correct layout', () => {
    expect(RootStyle.applicationContainer.flex).to.equal(1);
    expect(RootStyle.applicationContainer.alignItems).to.equal('center');
    expect(RootStyle.applicationContainer.justifyContent).to.equal('center');
  });
});
