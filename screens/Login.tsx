import React from 'react';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/styles';


const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo source={require('./../assets/logo.png')} resizeMode="cover" />
                <PageTitle> TempLogin </PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;