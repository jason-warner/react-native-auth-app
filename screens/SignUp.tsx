import React, { useState } from 'react';
import { View, TouchableOpacity, Platform, Modal, Alert } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const MyTextInput = ({
    label,
    icon,
    isPassword,
    hidePassword,
    setHidePassword,
    isDate,
    showDatePicker,
    ...props }: {
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
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
            </TouchableOpacity>}
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

const SignUp = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [dob, setDob]: any = useState();
    const onChange = async (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }
    const showDatePicker = () => {
        Alert.alert('pressed')
        setShow(true);
    }
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle> TempLogin </PageTitle>
                <SubTitle> Account Sign Up </SubTitle>

                {/* {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )} */}
                {
                    Platform.OS === 'ios' && show &&
                    (
                        <Modal
                            visible={true}
                            onDismiss={() => setShow(false)}
                        >
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        </Modal>
                    )
                }

                <Formik
                    initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
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
                                label="Full Name"
                                icon="person"
                                placeholder="John Doe"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleChange('fullName')}
                                value={values.fullName}
                            />
                            <MyTextInput
                                label="Date Of Birth"
                                icon="calendar"
                                placeholder="YYYY / MM / DD"
                                // placeholderTextColor={darkLight}
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur={handleChange('dateOfBirth')}
                                value={dob ? dob.toDateString() : ''}
                                isDate={true}
                                editable={false}
                                showDatePicker={showDatePicker}
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
                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleChange('confirmPassword')}
                                value={values.confirmPassword}
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
                            <ExtraView>
                                <ExtraText>
                                    Have Account?
                                </ExtraText>
                                <TextLink>
                                    <TextLinkContent>
                                        Sign In
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

export default SignUp;