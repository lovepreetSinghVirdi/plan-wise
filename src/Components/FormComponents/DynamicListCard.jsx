import { CardContent, Typography, Box } from '@mui/material'
import CustomCard from './CustomCard'

/**
 * A reusable MUI Card that displays a dynamic title and a bulleted list of strings.
 * If the items array is empty, it shows a "No records found" message.
 *
 * Props:
 * - title: string (required) - The card title
 * - items: string[] (optional) - Array of list items (defaults to empty)
 */
export default function DynamicListCard({ title, items = [] }) {
    const hasItems = Array.isArray(items) && items.length > 0

    return (
        <CustomCard>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                {hasItems ? (
                    <Box
                        component="ul"
                        sx={{
                            pl: 2,
                            m: 0,
                            '& li': {
                                mb: 0.5,
                                color: 'text.secondary',
                            },
                        }}
                    >
                        {items.map((item, index) => (
                            <Box component="li" key={index}>
                                {item}
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No records found
                    </Typography>
                )}
            </CardContent>
        </CustomCard>
    )
}
