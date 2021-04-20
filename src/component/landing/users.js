import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Polar } from 'react-chartjs-2';
import { useSelector, shallowEqual } from 'react-redux';
import '../../App.css'
import { Grid } from '@material-ui/core';

export default function Users() {
    const counter = useSelector((state) => {
        return {
            data: state.LandingReducer.users,
        };
    }, shallowEqual);
    
    const state = {
        labels: ['Cat#1', 'Cat#2', 'Cat#3', 'Cat#4'],
        datasets: [
            {
                label: 'Rainfall',
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
                <Typography variant="h4" className="title">Users</Typography>
                <div className="action">
                    <MoreHorizIcon className="actionIcon" />
                </div>
            </Grid>

            <Polar
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