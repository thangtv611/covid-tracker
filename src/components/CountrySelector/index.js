import {
    FormControl,
    FormHelperText,
    InputLabel,
    NativeSelect,
} from '@material-ui/core';

const CountrySelector = ({ value, handleOnChange, countries }) => {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>Quốc Gia: </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector',
                }}
            >
                {countries.map(({ Slug, Country }) => (
                    <option value={Slug} key={Slug}>{Country}</option>
                ))}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    );
};

export default CountrySelector;
