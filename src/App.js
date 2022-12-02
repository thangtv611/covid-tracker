import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './api';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [report, setReport] = useState([]);

    useEffect(() => {
        getCountries().then((response) => {
            setCountries(response.data);

            setSelectedCountry('vietnam');
        });
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            getReportByCountry(selectedCountry).then((res) => {
                setReport(res.data);
            });
        }
    }, [countries, selectedCountry]);

    function handleChangeCountry(event) {
        setSelectedCountry(event.target.value);
    }

    return (
        <>
            <CountrySelector
                value={selectedCountry}
                handleOnChange={handleChangeCountry}
                countries={countries}
            />
            <Highlight report={report} />
            <Summary report={report} />
        </>
    );
};

export default App;
