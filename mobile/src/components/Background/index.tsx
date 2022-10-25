import { ImageBackground } from 'react-native';
import { styles } from './styles';

import backgourndimg from '../../assets/background-galaxy.png';

interface Props {
    children: React.ReactNode;
}

export function Background( {children}: Props) {
  return (
  <ImageBackground 
  source={backgourndimg} 
  style={styles.container}
  defaultSource={backgourndimg}
  >
    {children}
  </ImageBackground>
  );
}