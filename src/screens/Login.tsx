import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native-unistyles';
import { FormDataLogin } from '../utils/types/Types';
import CustomTextInput from '../components/forms/CustomTextInput';

const Login = () => {
  const { control, handleSubmit } = useForm<FormDataLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Login</Text>
      <View>
        <CustomTextInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{ required: 'Email is required' }}
          secureTextEntry={false}
        />
        <CustomTextInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'The password must be at least 8 letters long',
            },
          }}
          secureTextEntry={true}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    backgroundColor: theme.colors.background,
  },
}));

export default Login;
