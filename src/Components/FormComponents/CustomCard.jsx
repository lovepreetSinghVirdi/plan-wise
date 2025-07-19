import { Card } from '@mui/material';


const CustomCard = (props) => {
    const { children } = props;
    return (

        <Card
            elevation={6}
            sx={{
                width: '100%',
                height: 300,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                p: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 12,
                },
            }}
        >
            {children}
        </Card>
    );
};

export default CustomCard;