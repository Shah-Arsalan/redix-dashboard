// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import Typography from 'themes/typography';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return (
    <Box>
      <Typography variant="h6" color="text.secondary">Dashboard</Typography>
    </Box>
  );
};

export default Logo;
