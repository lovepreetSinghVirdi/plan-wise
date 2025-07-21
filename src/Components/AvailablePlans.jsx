import {
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { apiURL, makePlansFromRawData, searchPlanByTextUrl } from '../Helpers/helpers';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { motion as Motion } from 'framer-motion';

import AppLoader from './FormComponents/Loader';
import PlanCard from './FormComponents/PlanCard';

const AvailablePlans = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [plans, setPlans] = useState([]);
    const [isLoading, setLoading] = useState(false);

    // Safely grab keyword (or default to empty string)
    const keyword = location.state?.keyword?.trim() ?? '';



    const fetchPageData = useCallback(async () => {
        try {
            setLoading(true);
            const url = `${apiURL}${searchPlanByTextUrl}`;
            const { data } = await axios.get(url, {
                params: { q: keyword, max: 50 }
            });

            const parsedPlans = makePlansFromRawData(data)
            setPlans(parsedPlans);

        } catch {
            setPlans([]);
        } finally {
            setTimeout(() => setLoading(false), 3000);

        }
    }, [keyword]);

    useEffect(() => {

        if (!keyword) {
            // replace so user can't go back to this invalid page
            navigate('/', { replace: true });
        } else {
            fetchPageData(keyword)
        }
    }, [fetchPageData, keyword, navigate]);

    // If we redirect, this render won't actually show—
    // but you can optionally early-return null here.

    const renderCards = () => {
        if (!plans.length) return (
            <Typography variant="h5" component="h2" gutterBottom>
                {`No Plans Found For The Keyword: ${keyword}`}
            </Typography>
        )

        return (<>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    color: theme.palette.primary.main,
                    mb: 4
                }}
            >
                Available Plans
            </Typography>
            <Grid container spacing={2} >
                {plans.map((plan, index) => {

                    return (
                        <Grid
                            key={`${plan.site}_${index}`}
                            sx={{ display: 'flex' }}
                            size={{ xs: 12, sm: 6, md: 4 }}
                        >
                            <Motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'   /* ➋ fill the grid‐cell vertically */
                                }}
                            >
                                <PlanCard plan={plan} />
                            </Motion.div>
                        </Grid>
                    )
                })}
            </Grid>
        </>
        )
    }

    return (

        <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
            {isLoading ? <AppLoader /> :
                renderCards()}
        </Container>
    );
};

export default AvailablePlans;
