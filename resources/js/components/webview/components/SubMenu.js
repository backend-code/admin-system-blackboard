import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { GET } from 'api-request-json';
import PropTyeps from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 75,
    },
});

function ImgMediaCard(props) {
    const { id, path, title, image } = props;
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Card className={classes.root} elevation={0}>
                <CardActionArea key={id}>
                    <Link to={path}>
                        <CardMedia
                            component="img"
                            alt={title}
                            height="75"
                            image={image}
                            title={title}
                        />
                        <CardContent style={{
                            padding: '0px'
                        }}>
                            <Typography gutterBottom component="p" style={{
                                textAlign: 'center',
                                fontSize: 'unset',
                                color: '#4d4e5b'
                            }}>
                                {title}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

ImgMediaCard.propTyeps = {
    id: PropTyeps.string,
    name: PropTyeps.string,
    path: PropTyeps.string,
    title: PropTyeps.string,
    image: PropTyeps.string
}

export function SubMenu(props) {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        GET('/api/submenu').then(data => {
            setData(data)
        })
    }, [])
    return (
        <Fragment>

            {data !== undefined ? (
                <Grid container spacing={0} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                
                }}>
                    <Grid container item xs={12} spacing={2}>
                {data.map((i, key) => (
                    <ImgMediaCard
                        key={key}
                        id={i.id}
                        name={i.name}
                        path={i.link_url}
                        title={i.title}
                        image={i.image}

                    />
                ))}
            </Grid>
                </Grid>
    ) : (
        <Fragment>

        </Fragment>
    )
}

        </Fragment >
    )
}