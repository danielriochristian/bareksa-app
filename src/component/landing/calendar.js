import React, { useState } from 'react';
import { Card } from '@material-ui/core';
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

            <Grid container>
                <Grid container item xs={6} justify="flex-end" alignItems="flex-end">
                    <button type="button" className="cancel"> Cancel </button>
                </Grid>
                <Grid item xs={6}>
                    <button type="button" className="filter"> Filter </button>
                </Grid>
            </Grid>
        </Card>
    )
}