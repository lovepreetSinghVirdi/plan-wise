import { Container, Grid, Typography, useTheme } from '@mui/material';

import { motion as Motion } from 'framer-motion';
import DynamicListCard from './FormComponents/DynamicListCard';
import UrlSearchField from './FormComponents/UrlSearchField';

const DataExtractor = () => {
    const theme = useTheme();
    const cards = [{ title: 'Phone Numbers' }, { title: 'URLs' }, { title: 'Emails' }];
    return (
        <Container maxWidth="lg" sx={{ mt: 4, minHeight: '100vh' }}>
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
                <Grid size={{ xs: 12, sm: 8, md: 8 }} offset={{ sm: 2, md:2 }}>
                    <UrlSearchField />
                </Grid>


            </Grid>
            <Grid container spacing={2} sx={{ mt: 10 }} >
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
                                <DynamicListCard title={card.title} items={[]} />
                            </Motion.div>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};


export default DataExtractor;