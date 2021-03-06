import React from "react"
import PropTypes from "prop-types"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import Fab from "@material-ui/core/Fab"
import PrevPointCopy from "../Typography/PrevPointCopy"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  mobileVisibility: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    mobileVisibility: {
      display: "table-cell",
    },
  },
}))

const PrevPointTableBody = props => {
  const classes = useStyles()

  return (
    <TableBody aria-label="tbody">
      {props.participants.length < 1 ? (
        <TableRow aria-label="trow">
          <TableCell aria-label="tcell">Sorry no participants found</TableCell>
        </TableRow>
      ) : (
        props.participants.map(participant => (
          <TableRow key={participant.id} aria-label="trow">
            <TableCell aria-label="tcell">
              <PrevPointCopy>{participant.pp_id} </PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell">
              <PrevPointCopy>{participant.first_name}</PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell">
              <PrevPointCopy>{participant.last_name}</PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell" className={classes.mobileVisibility}>
              <PrevPointCopy>{participant.sep_id} </PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell" className={classes.mobileVisibility}>
              <PrevPointCopy>{participant.gender}</PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell" className={classes.mobileVisibility}>
              <PrevPointCopy>{participant.date_of_birth}</PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell" className={classes.mobileVisibility}>
              <PrevPointCopy>{participant.race}</PrevPointCopy>
            </TableCell>
            <TableCell aria-label="tcell">
              <Link
                to="/existingParticipant/visits"
                onClick={() => props.handleClick(participant)}
              >
                <Fab color="primary" size="small" aria-label="add">
                  <AssignmentIndIcon />
                </Fab>
              </Link>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  )
}

PrevPointTableBody.propTypes = {
  participants: PropTypes.array,
  handleClick: PropTypes.func,
}

export default PrevPointTableBody
