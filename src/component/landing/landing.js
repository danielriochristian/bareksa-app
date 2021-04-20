import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import '../../App.css'
import Conversion from './conversion';
import Users from './users';
import Revenue from './revenue';
import Calendar from './calendar';
import Orders from './orders';
import { useDispatch } from 'react-redux';
import { UsersAction, OrdersAction } from '../../action/ActionTypes';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

export default function Landing() {
    const axios = require('axios');
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard').then(res => {
            let dataChart = res.data.data.user_category
            let label = []
            let dataOrders = res.data.data.orders

            Object.keys(dataChart).forEach((data, i) => {
                label.push(dataChart[data])
            })
            dispatch({
                type: UsersAction.SET_DATA,
                data: label,
            });
            dispatch({
                type: OrdersAction.SET_ORDER,
                orders: dataOrders,
            })

        })
    })
    return (
        <Grid container className="secondContainer" spacing={2}>
            <Grid item xs={isSmall ? 12 : 3}>
                <Conversion />
            </Grid>
            <Grid item xs={isSmall ? 12 : 3}>
                <Users />
            </Grid>
            <Grid item xs={isSmall ? 12 : 6}>
                <Revenue />
            </Grid>

            <Grid item xs={isSmall ? 12 : 4}>
                <Calendar />
            </Grid>
            <Grid item xs={isSmall ? 12 : 8}>
                <Orders />
            </Grid>
        </Grid>
    )
}