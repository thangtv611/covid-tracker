import HighChartsReact from 'highcharts-react-official';
import Highchart from 'highcharts';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Button, ButtonGroup } from '@material-ui/core';

const generateOptions = (data, range) => {
    const categories = data.map((item) =>
        moment(item.Date).format('YYYY-MM-DD')
    );

    return {
        chart: {
            height: 500,
        },
        title: {
            text: 'Tổng số ca nhiễm',
        },
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
        },
        tooltip: {
            headerFormat:
                '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}</td>' +
                '<td style="padding:0"><b>{point.y> ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: 'Tổng số ca nhiễm',
                data: data.map((item) => item.Confirmed),
            },
        ],
    };
};

export default function LineChart({ data }) {
    const [options, setOptions] = useState({});
    const [range, setRange] = useState('all');

    useEffect(() => {
        let customeData;
        switch (range) {
            case 'all':
                customeData = data;
                break;
            case '7day':
                customeData = data.slice(data.length - 7);
                break;
            case '30day':
                customeData = data.slice(data.length - 30);
                break;
            default:
                customeData = data;
                break;
        }

        setOptions(generateOptions(customeData));
    }, [data, range]);

    return (
        <div>
            <ButtonGroup
                size="small"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <Button
                    color={range === 'all' ? 'secondary' : null}
                    onClick={() => setRange('all')}
                >
                    Tất cả
                </Button>
                <Button
                    color={range === '7day' ? 'secondary' : null}
                    onClick={() => setRange('7day')}
                >
                    7 ngày
                </Button>
                <Button
                    color={range === '30day' ? 'secondary' : null}
                    onClick={() => setRange('30day')}
                >
                    30 ngày
                </Button>
            </ButtonGroup>
            <HighChartsReact highcharts={Highchart} options={options} />
        </div>
    );
}
