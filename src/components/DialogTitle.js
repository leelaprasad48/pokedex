import React from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CrossIcon from '../assets/svg/crossIcon.svg';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const {children, classes, onClose} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <img src={CrossIcon} alt="Close"/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default DialogTitle;