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
            <CardContent sx={{
                flex: 1,
                overflowY: 'auto',
                px: 2,
            }}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>

                {hasItems ? (
                    <Box
                        component="ol"
                        sx={{
                            m: 0,
                            p: 0,
                            pl: '1.25em',         // indent so text lines up under bullet
                        }}
                    >
                        {items.map((item, index) => (
                            <Box component="li" sx={{
                                mb: 1,
                                // allow breaking inside long words/emails:
                                wordBreak: 'break-all',
                                whiteSpace: 'normal',
                                color: 'text.secondary',
                            }}
                                key={index}>
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
