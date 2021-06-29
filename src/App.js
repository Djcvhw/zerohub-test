import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import FirstQuestionAnswer from './components/FirstQuestionAnswer';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CustomAccordion from './components/CustomAccordion';

const blocks = [
  {
    title: 'General questions',
    anchor: 'general',
    content: [
      {
        title: 'Which is the best Bitcoin wallet?',
        content: <FirstQuestionAnswer/>
      }, {
        title: 'How safe is the process of buying Etherium from your website?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
          ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
          d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
          e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
          ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
           officia deserunt mollit anim id est laborum</p>
      }
    ]
  }, {
    title: 'Payment questions',
    anchor: 'payment',
    content: [
      {
        title: 'Какое количество Биткоин я получу на кошелек?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'How long does the payment process take?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Что будет, если цена Биткоин сильно изменится, пока я буду оформлять заказ?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Which countries UTORG support?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Can I buy Etherium online with American Express?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Какие валюты принимаются для покупки Биткоин?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Что делать, если банк отклонил транзакцию?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'What should I do if my fiat currency is not on the list?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }
    ]
  }, {
    title: 'Transaction',
    anchor: 'transaction',
    content: [
      {
        title: 'Bitcoin transaction time',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'I it possible to cancel or edit the transaction?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Как я могу проверить статус своей транзакции?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Что делать, если я указал неправильный wallet address?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }
    ]
  }, {
    title: 'Verification',
    anchor: 'verification',
    content: [
      {
        title: 'Can I buy ETH with debit card anonymously?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Why do i need to verify my identity?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Сколько раз мне нжно будет проходить верификацию?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Что делать, если я указал неправильный wallet address?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Из чего состоит процесс верификации?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Когда нужно проходить процесс верификации?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Вы списываете деньги перед верификацией?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Что будет с деньгами, если я не завершу процесс верификации?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      },
      {
        title: 'Сколько времени занимает верификация?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }, {
        title: 'Можно проходить верификацию на смартфоне?',
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
        ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut
        e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n
        ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
         officia deserunt mollit anim id est laborum</p>
      }
    ]
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    '&:before': {
      height: 0
    },
  },
  accordionTitle: {
    padding: 0
  },
  menuItem: {
    fontSize: 'inherit'
  },
  menuButton: {
    width: '1em',
    position: 'absolute',
    top: 15,
    right: 15,
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      zIndex: 1200
    }
  },
  menuPanel: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  menuPanelShow: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      position: 'absolute'
    }
  }
}));

function App() {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Container>
      <h1>Frequently asked<br/>questions</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <IconButton color="inherit" aria-label="menu" className={classes.menuButton} onClick={() => setShow(!show)} >
          <MenuIcon />
        </IconButton>
        <AppBar position="sticky" color="transparent" className={`${classes.root} ${classes.menuPanel} ${show ? classes.menuPanelShow : ''}`}>
          <MenuList>
            {blocks.map(block => <MenuItem key={block.anchor} className={classes.menuItem}><Link href={`#${block.anchor}`} component={AnchorLink} onClick={preventDefault}>{block.title}</Link></MenuItem>)}
          </MenuList>
        </AppBar>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
        {blocks.map(block => (
          <Box key={block.anchor} id={block.anchor}>
            <h2>{block.title}</h2>
            <CustomAccordion content={block.content}  />
          </Box>
        ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
