import React from "react"

import { AppBar } from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {IconButton} from '@material-ui/core';

export default function NavBar({}) {
    
    return(
        <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            sx={{ mr: 2 }}
            href={`/`}
          >
            Home
          </IconButton>

          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Santa Magical World
          </Typography>

          <IconButton
            color="inherit"
            sx={{ mr: 2 }}
            href="Add"
          >
            Add new toy
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>

      </div>
    </>
    )
}