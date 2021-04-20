import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { useSelector, shallowEqual } from 'react-redux';
import Moment from 'react-moment';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

export default function Orders() {
    const dataOrders = useSelector((state) => {
        return {
            data: state.LandingReducer.orders,
        };
    }, shallowEqual);

    const label = ['Order Number', 'Status', 'Operator', 'Location', 'Start Date', 'Due Date'];

    const handleBadge = (data) => {
        if (data === 'pending') {
            return (
                <div className="pending">
                    {data}
                </div>
            )
        } else if (data === 'completed') {
            return (
                <div className="completed">
                    {data}
                </div>
            )
        }else{
            return (
                <div className="canceled">
                    {data}
                </div>
            )
        }
    }

    return (
        <Box style={{ marginTop: '27px' }}>
            <Typography
                variant="h4"
                className="title"
                style={{ marginBottom: '27px' }}
            >
                Orders
            </Typography>

            <div className="table">
                <Table hover >
                    <thead style={{ backgroundColor: '#F5F5F5', position: 'sticky', top: '0' }}>
                        <tr>
                            {label.map((data, i) => {
                                return (
                                    <th key={i}>{data}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {dataOrders.data.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {data.order_id}
                                    </td>
                                    <td>
                                        {handleBadge(data.status)}
                                    </td>
                                    <td>
                                        {data.full_name}
                                    </td>
                                    <td>
                                        {data.location}
                                    </td>
                                    <td>
                                        <Moment format="YYYY/MM/DD hh:mm">
                                            {data.start_date}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="YYYY/MM/DD hh:mm">
                                            {data.due_date}
                                        </Moment>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </Box>
    )
}