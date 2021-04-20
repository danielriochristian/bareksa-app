import React from 'react';
import { Avatar, Grid, IconButton, Typography, TextField, Badge, useMediaQuery } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { useTheme } from '@material-ui/core/styles';
import '../../App.css'

export default function Navbar() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Grid container className="header">
                <Grid item xs={2} className="center">
                    <img alt="logo" src={'https://images.bareksa.com/logo/1.0.0/logo.svg'} width="150px" />
                </Grid>
                {isSmall ? (
                    ''
                ) : (
                    <Grid item xs={3} className="center">
                        <Avatar className="avatar">RH</Avatar>
                        <div className="initial">
                            <Typography variant="subtitle2" style={{ fontWeight: 700, fontSize: '16px' }}>
                                Reinhart H.
                    </Typography>
                            <Typography variant="body1" style={{ fontSize: '12px' }}>
                                Kemang, Jakarta
                    </Typography>
                        </div>
                        <KeyboardArrowDownIcon style={{ alignSelf: 'center', marginLeft: '20px', cursor: 'pointer' }} />
                    </Grid>
                )}

                <Grid item xs={3}></Grid>
                {isSmall ? (
                    <Grid container item xs={6} className="center" justify="flex-end">
                        <Badge badgeContent={4} className="center" variant="dot" color="error" style={{ marginLeft: '34px', cursor: 'pointer' }}>
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                        <Badge style={{ marginLeft: '34px', cursor: 'pointer' }} className="center">
                            <SettingsOutlinedIcon />
                        </Badge>
                    </Grid>
                ) : (
                    <Grid container item xs={4} className="center" justify="flex-end">
                        <TextField
                            label="Search text"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            InputLabelProps={{ style: { fontSize: '14px' } }}
                        />
                        <Badge badgeContent={4} className="center" variant="dot" color="error" style={{ marginLeft: '34px', cursor: 'pointer' }}>
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                        <Badge style={{ marginLeft: '34px', cursor: 'pointer' }} className="center">
                            <SettingsOutlinedIcon />
                        </Badge>
                    </Grid>
                )}

            </Grid>
            <Grid container className="secondHeader" justify="flex-end">
                <Typography variant="body1" style={{ fontSize: '12px', display: 'flex', alignSelf: 'center' }}>
                    8 April 2021
                </Typography>
            </Grid>
        </>
    )
}