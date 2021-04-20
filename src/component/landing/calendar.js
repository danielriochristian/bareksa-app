import React, { useState } from 'react';
import { Card, useMediaQuery, useTheme } from '@material-ui/core';
import { DateRange } from 'react-date-range';
import { Grid } from '@material-ui/core';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../../App.css';

export default function Users() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date('2021, 04, 24'),
            key: 'selection'
        }
    ]);

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card className="card" variant="outlined" style={{ height: '380px' }}>
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
                ranges={state}
                color="#8772B0"
            />

            <Grid container justify="center">
                <Grid item xs={isSmall ? 11 : 8}>
                    <button type="button" className="cancel"> Cancel </button>
                    <button type="button" className="filter"> Filter </button>
                </Grid>
            </Grid>
        </Card>
    )
}