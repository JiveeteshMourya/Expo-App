import { NavigationIndependentTree } from '@react-navigation/native';
import AuthStack from './routes/AuthStack';

export default function HomeScreen() {
  return (
    <NavigationIndependentTree>
      <AuthStack/>
    </NavigationIndependentTree>
  );
}
