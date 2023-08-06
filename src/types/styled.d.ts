import 'styled-components';
import { TDefaultTheme } from '@lib/theme/defaultTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends TDefaultTheme {}
}
