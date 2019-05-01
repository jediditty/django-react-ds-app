import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      marginLeft: "auto",
      
    }
  });

function NavBar(props) {
    const { classes } = props;
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Sample DS app
                </Typography>
                <Button 
                    href='http://localhost:9200/datatobe-index/_search?pretty=true&q=*:*' 
                    target='_blank' 
                    variant="outlined" 
                    className={classes.button}>
                        ElasticSearch
                </Button>
                <Button 
                    href="http://localhost:5601/app/kibana#/visualize/edit/523a67a0-6af2-11e9-971d-2b928b24a014?_g=(refreshInterval:(pause:!f,value:900000),time:(from:now-7d,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(language:lucene,query:''),uiState:(vis:(legendOpen:!t)),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:field_5_char.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,isDonut:!t,labels:(last_level:!t,show:!f,truncate:100,values:!t),legendPosition:right,type:pie),title:test,type:pie))" 
                    target='_blank' 
                    variant="outlined" 
                    className={classes.button}
                    style={{marginLeft: '.5em'}}>
                        kibana
                </Button>
                <Button 
                    href='http://localhost:8000/data/datatobe/'
                    target='_blank' 
                    variant="outlined" 
                    className={classes.button}
                    style={{marginLeft: '.5em'}}>
                        DRF
                </Button>
                <Button 
                    href="http://localhost:8000/admin"
                    target='_blank' 
                    variant="outlined" 
                    className={classes.button}
                    style={{marginLeft: '.5em'}}>
                        admin
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar);