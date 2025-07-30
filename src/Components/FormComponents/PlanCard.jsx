import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CustomCard from './CustomCard';
import { brandLogo, capitalize } from '../../Helpers/helpers';
import LaunchIcon from '@mui/icons-material/Launch';


export default function PlanCard(props) {
  const { plan } = props;
  const {features, price, planName, url, technology } = plan;


  // fallback to raw JSON keys if camelCase isn't provided
  const downloadSpeed =
    plan.downloadSpeed ?? plan.DownloadingSpeed ?? null;
  const uploadSpeed =
    plan.uploadSpeed ?? plan.uploadingspeed ?? null;

  return (
    <CustomCard
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexGrow: 1,
        height: '35rem',
        minHeight: '35rem',

      }}>
      <CardHeader
        title={capitalize(plan.site)}
        action={
          <Box
            component="img"
            src={brandLogo(plan.site)}
            alt={`${plan.site} logo`}
            sx={{ width: 80, height: 80 }}
          />

        }
        sx={{ pb: 0 }}
      />

      <CardContent sx={{ flexGrow: 1}}>
        <Typography variant="h6">
          {planName}
        </Typography>

        {downloadSpeed && (
          <Typography sx={{ display: 'flex', mt: 1, justifyContent: 'space-between' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Download Speed:</strong> <Box component={'span'}>{downloadSpeed}</Box>
          </Typography>
        )}
        {uploadSpeed && (
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Upload Speed:</strong>  <Box component={'span'}> {uploadSpeed}</Box>
          </Typography>
        )}
        {technology && (
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Technology:</strong>  <Box component={'span'}> {technology}</Box>
          </Typography>
        )}

        {features?.length > 0 && (<>
          <Typography sx={{ display: 'flex' }} variant="body2" color="text.secondary">
            <strong style={{ marginRight: '1rem' }}>Features:</strong>
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 2,         // indent
              m: 0,          // remove default margin
              '& li': {
                mb: 0.5,    // vertical spacing between items
                color: 'text.secondary',
              },
            }}
          >
            {features.map((feat, i) => (
              <Box component="li" key={i}>
                {feat}
              </Box>
            ))}
          </Box>
        </>)
        }
      </CardContent>

      <CardActions
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          mt: 'auto',
          justifyContent: 'center',
          pb: 2,
          mb: 2
        }}
      >
        <Typography variant="h5" gutterBottom>
          {price}
        </Typography>
        {url && (
          <Button
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            variant="contained"
            endIcon={<LaunchIcon />}
          >
            Shop Now
          </Button>
        )}
      </CardActions>
    </CustomCard>
  );

}
