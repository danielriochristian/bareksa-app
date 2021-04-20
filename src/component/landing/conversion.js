import React from 'react';
import { Card , Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Pie } from 'react-chartjs-2';
import '../../App.css'
import { useSelector, shallowEqual } from 'react-redux';

export default function Conversion() {
    const counter = useSelector((state) => {
        return {
            data: state.LandingReducer.users,
        };
    }, shallowEqual);

    const state = {
        labels: ['Item#1', 'Item#2', 'Item#3', 'Item#4'],
        datasets: [
            {
                backgroundColor: [
                    '#725E9C',
                    '#5C8F94',
                    '#EBA45E',
                    '#E4EAEB'
                ],
                hoverBackgroundColor: [
                    '#483c63',
                    '#324f52',
                    '#af7a45',
                    '#b9bdbd'
                ],
                data: counter.data
            }
        ]
    }

    return (
        <Card className="card" variant="outlined">
            <Grid container>
                <Typography variant="h4" className="title">Conversion</Typography>
                <div className="action">
                    <MoreHorizIcon className="actionIcon" />
                </div>
            </Grid>

            <Pie
                data={state}
                options={{
                    title: {
                        display: true,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }}
            />
        </Card>
    )
}