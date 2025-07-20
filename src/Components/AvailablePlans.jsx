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
import AppLoader from './FormComponents/Loader';

const AvailablePlans = () => {

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
            setTimeout(()=>setLoading(false), 3000);

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

        return (
            <>
                <Typography variant="h4" component="h2" gutterBottom>
                    Available Plans
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {plans.map(plan => {
                        const details = Object.keys(plan);

                        return (<Grid
                            key={plan.key}
                            item
                            xs={12} sm={6} md={3}
                            sx={{ display: 'flex' }}
                        >
                            <Card elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    {/* Main heading */}
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {plan.title}
                                    </Typography>

                                    <ul className="no-bullets-ul">
                                        {details.map((detail, idx) => (
                                            <li key={idx}><Typography component="span" >{`${detail}:`}</Typography><Typography component="span" color="text.secondary">{plan[detail]}</Typography></li>
                                        ))}
                                    </ul>

                                </CardContent>
                            </Card>
                        </Grid>)
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
