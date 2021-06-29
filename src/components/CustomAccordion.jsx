import { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    '&:before': {
      height: 0
    }
  },
  accordionTitle: {
    padding: 0
  }
}));

const CustomAccordion = ({content}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('Which is the best Bitcoin wallet?');

  const handleChange = (panel) => () => {
    setExpanded(expanded === panel? '' : panel);
  };
  return (content.map(question => (
      <Accordion className={classes.root} expanded={expanded === question.title} onClick={handleChange(question.title)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.accordionTitle}>
          <h4>{question.title}</h4>
        </AccordionSummary>
        <AccordionDetails>
          {question.content}
        </AccordionDetails>
      </Accordion>))
  )
}

export default CustomAccordion;