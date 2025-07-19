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
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const AvailablePlans = ({ plans = [
    { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
    { key: 'bell', title: 'Bell', text: 'This is the second card.' },
    { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
    { key: 'teksavvy', title: 'Teksavvy', text: 'This is the fourth card.' },
] }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Safely grab keyword (or default to empty string)
    const keyword = location.state?.keyword?.trim() ?? '';

    useEffect(() => {
        if (!keyword) {
            // replace so user can't go back to this invalid page
            navigate('/', { replace: true });
        } else {
            console.log('keyword is ----', keyword);
        }
    }, [keyword, navigate]);

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
            {renderCards()}
        </Container>
    );
};

export default AvailablePlans;
