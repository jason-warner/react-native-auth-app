import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors
} from './../components/styles';

const { brand, darkLight } = Colors;

const MyTextInput = ({ label, icon, ...props }: {
    [x: string]: any;
    label: string;
    icon: any;
}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )
}

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo source={require('./../assets/logo.png')} resizeMode="cover" />
                <PageTitle> TempLogin </PageTitle>
                <SubTitle> Account Login </SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => { console.log(values) }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="jdoe@mail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleChange('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleChange('password')}
                                value={values.password}
                                secureTextEntry={true}
                                isPassword={true}
                            />
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;