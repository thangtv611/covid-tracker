import { Grid } from '@material-ui/core';
import HightlightCard from './HighlightCard';

function Highlight({ report }) {
    const data = report[report.length - 1] || {};

    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed || 0,
            type: 'confirmed',
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered || 0,
            type: 'recovered',
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths || 0,
            type: 'death',
        },
    ];

    return (
        <Grid container spacing={3}>
            {summary.map((item) => (
                <Grid item sm={4} xs={12}>
                    <HightlightCard
                        title={item.title}
                        count={item.count}
                        type={item.type}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Highlight;
