import React from 'react';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
// import { toMatchSnapshot } from "jest-snapshot";


import { getButtonStyles } from '../Button/Button';


test('Button styles to match snapshot', () => {
    const DefaultButton = getButtonStyles();
    const SuccessButton = getButtonStyles('success');
    const ErrorButton = getButtonStyles('error');
    const WarningButton = getButtonStyles('warning');
    const InfoButton = getButtonStyles('info');

    const defaultButtonTree = renderer.create(<DefaultButton>Default</DefaultButton>).toJSON();
    const successButtonTree = renderer.create(<SuccessButton>Success</SuccessButton>).toJSON();
    const errorButtonTree = renderer.create(<ErrorButton>Error</ErrorButton>).toJSON();
    const warningButtonTree = renderer.create(<WarningButton>Warning</WarningButton>).toJSON();
    const infoButtonTree = renderer.create(<InfoButton>Info</InfoButton>).toJSON();

    expect(defaultButtonTree).toMatchSnapshot();
    expect(successButtonTree).toMatchSnapshot();
    expect(errorButtonTree).toMatchSnapshot();
    expect(warningButtonTree).toMatchSnapshot();
    expect(infoButtonTree).toMatchSnapshot();
})