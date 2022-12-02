import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: function (props) {
        switch (props.type) {
            case 'confirmed':
                return { borderLeft: '5px solid #c9302c' };
            case 'recovered':
                return { borderLeft: '5px solid #28a745' };
            default:
                return { borderLeft: '5px solid gray' };
        }
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
    },
    count: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default function HightlightCard({ title, count, type }) {
    const styles = useStyles({ type });

    return (
        <Card className={styles.wrapper}>
            <CardContent>
                <Typography component="p" variant="body2" className={styles.title}>
                    {title}
                </Typography>
                <Typography component="span" variant="body2" className={styles.count}>
                    {count}
                </Typography>
            </CardContent>
        </Card>
    );
}
