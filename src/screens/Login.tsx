import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native-unistyles';
import { loginSchema, LoginFormInputs } from '../utils/types/ValidationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import LoginTitle from '../components/login-signup/LoginTitle';
import RecoverySection from '../components/login-signup/RecoverySection';
import CustomTextInput from '../components/forms/CustomTextInput';
import PrimaryButton from '../components/buttons/CustomButton';
import Logo from '../components/Logo';
import Separator from '../components/login-signup/Separator';
import SignUpSection from '../components/login-signup/SignUpSection';
import GoogleSignIn from '../components/buttons/GoogleSignIn';
import FacebookSignIn from '../components/buttons/FacebookSignIn';

const Login = () => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo size="small" />
      </View>
      <View style={styles.formContainer}>
        <LoginTitle type="Login" />
        <View style={styles.textInputContainer}>
          <CustomTextInput
            name="email"
            placeholder="Email"
            control={control}
            secureTextEntry={false}
          />
          <CustomTextInput
            name="password"
            placeholder={t('password')}
            control={control}
            secureTextEntry={true}
          />
          <RecoverySection />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton
              title={t('login')}
              handler={handleSubmit(onSubmit)}
              type="primary"
            />
          </View>
        </View>

        <View style={styles.separatorContainer}>
          <Separator />
        </View>

        <View style={styles.secondaryButtonContainer}>
          <View style={styles.button}>
            <GoogleSignIn handler={handleSubmit(onSubmit)} />
          </View>

          <View style={styles.button}>
            <FacebookSignIn handler={handleSubmit(onSubmit)} />
          </View>
        </View>
        <SignUpSection />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    paddingTop: {
      xs: 0,
      md: 20,
      lg: 40,
    },
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 8,
    width: '80%',
    justifyContent: 'center',
  },

  textInputContainer: {
    flex: 2,
    width: '100%',
    gap: 20,
    justifyContent: 'flex-start',
  },

  logoContainer: {
    flex: 3,

    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    minHeight: 50,
  },
  separatorContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonContainer: {
    flex: 1,
    flexDirection: {
      xs: 'column',
      md: 'row',
      lg: 'row',
    },
    marginBottom: {
      xs: 20,
      md: 0,
      lg: 0,
    },
    justifyContent: 'space-between',
    gap: 10,
  },

  button: {
    flex: 1,
  },
}));

export default Login;
