import { typography } from '@/core/theme/common/commonStyles';
import { ThemeOptions } from '@mui/material';
import { Mode } from '@mui/system/cssVars/useCurrentColorScheme';

export const themeCreator = (mode: Mode): ThemeOptions => {
  return {
    typography,
  };
};
