import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

import Thermometer from 'react-thermometer-component';
import { Humidity } from 'react-environment-chart';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function CubicleCard({ color = 'primary', title, temperature = 21, humidity = 20 }) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
        {title}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" alignItems="flex-end">
        <Thermometer
          theme="light"
          value={temperature}
          max="100"
          format="°C"
          size="small"
          height="75"
        />
        <Humidity value={humidity} height={65} />
      </Stack>
    </MainCard>
  );
}

CubicleCard.propTypes = {
  title: PropTypes.string,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
};
