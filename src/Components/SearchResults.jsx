import {
    Container,
    Grid,
    Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiURL, makePlansFromRawData, searchPlanByTextUrl } from '../Helpers/helpers';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { motion as Motion } from 'framer-motion';

import AppLoader from './FormComponents/AppLoader';
import PlanCard from './FormComponents/PlanCard';
import AlertMsg from './FormComponents/AlertMsg';

const SearchResults = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [plans, setPlans] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, severity: 'success', title: '', message: '' });

    const showAlert = (sev) => {
        setAlert({
            open: true,
            severity: sev,
            title: sev === 'success' ? 'Success!' : 'Error!',
            message: sev === 'success'
                ? 'Response submited successfully.'
                : 'Something went wrong. Please retry.',
        });
    };


    // Safely grab keyword (or default to empty string)
    const keyword = location?.state?.keyword?.trim() ?? '';



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
            showAlert('error');
        } finally {
            setTimeout(() => setLoading(false), 2000);

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
                Search Results
            </Typography>
            <Grid container spacing={2} >
                {plans.map((plan, index) => {

                    return (
                        <Grid
                            key={`${plan.site}_${index}`}
                            sx={{ display: 'flex' }}
                            size={{ xs: 12, sm: 6, md: 4 }}
                            offset={{ md: plans.length === 1 ? 4 : 0 }}
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
            {isLoading ? <AppLoader /> : null}
            <AlertMsg
                open={alert.open}
                severity={alert.severity}
                title={alert.title}
                onClose={() => setAlert(a => ({ ...a, open: false }))}
            >
                {alert.message}
            </AlertMsg>
            {renderCards()}
        </Container>
    );
};

export default SearchResults;
