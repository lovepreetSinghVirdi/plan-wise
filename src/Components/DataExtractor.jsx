import { Container, Grid, Typography, useTheme } from '@mui/material';

import { motion as Motion } from 'framer-motion';
import DynamicListCard from './FormComponents/DynamicListCard';
import UrlSearchField from './FormComponents/UrlSearchField';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { apiURL, crawlSiteUrl } from '../Helpers/helpers';
import AppLoader from './FormComponents/AppLoader';
import AlertMsg from './FormComponents/AlertMsg';

const DataExtractor = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [crawledData, setCrawledData] = useState({
    });
    const [alert, setAlert] = useState({ open: false, severity: 'success', title: '', message: '' });

    const cards = [{ key: 'phoneNumbers', title: 'Phone Numbers' }, { key: 'links', title: 'URLs' }, { key: 'emails', title: 'Emails' }];

    const showAlert = (sev) => {
        setAlert({
            open: true,
            severity: sev,
            title: sev === 'success' ? 'Success!' : 'Error!',
            message: sev === 'success'
                ? 'Data crawled successfully.'
                : 'Something went wrong. Please retry.',
        });
    };
    const handleSearch = useCallback(async (searchUrl) => {
        try {
            setLoading(true);
            const config = { params: { url: searchUrl } }
            const result = await axios.get(`${apiURL}${crawlSiteUrl}`, config);

            setCrawledData(result.data || []);
            showAlert('success');
        } catch {
            setCrawledData([]);
            showAlert('error');
        } finally {
            setLoading(false);
        }
    }, [setCrawledData, setLoading,]);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
            {loading ? <AppLoader message='Please wait, crawling the site...' /> : null}
            <AlertMsg
                open={alert.open}
                severity={alert.severity}
                title={alert.title}
                onClose={() => setAlert(a => ({ ...a, open: false }))}
            >
                {alert.message}
            </AlertMsg>

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
                Data Extractor
            </Typography>
            < Grid container spacing={2} sx={{ mt: 10 }}>
                <Grid size={{ xs: 12, sm: 8, md: 8 }} offset={{ sm: 2, md: 2 }}>
                    <UrlSearchField onSearch={handleSearch} />
                </Grid>


            </Grid>
            {Object.keys(crawledData).length ? <Grid container spacing={2} sx={{ mt: 10 }} >
                {cards.map((card, index) => {

                    return (
                        <Grid
                            key={`card_${index}`}
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
                                    height: '100%'
                                }}
                            >
                                <DynamicListCard title={card.title} items={crawledData[card.key]} />
                            </Motion.div>
                        </Grid>
                    )
                })}
            </Grid> : null}

        </Container>
    );
};


export default DataExtractor;