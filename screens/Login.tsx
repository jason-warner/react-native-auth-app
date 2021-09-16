import React, { useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
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
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';

const { brand, darkLight, primary } = Colors;

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }: {
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
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                    <Ionicons
                        name={hidePassword ? 'md-eye-off' : 'md-eye'}
                        size={30} color={darkLight}
                    />
                </RightIcon>
            )}
        </View>
    )
}

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true)
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
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton google={false}>
                                <ButtonText google={false}>
                                    Login
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true}>
                                <Fontisto name="google" color={primary} size={25} />
                                <ButtonText google={true}>
                                    Sign in with Google
                                </ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>
                                    No Account?
                                </ExtraText>
                                <TextLink>
                                    <TextLinkContent>
                                        Sign Up
                                    </TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;