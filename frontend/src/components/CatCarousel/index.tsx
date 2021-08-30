import React, { FC, useCallback } from "react";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
} from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  Create as EditIcon,
  Height as HeightIcon,
  Wc as GenderIcon,
  EmojiEmotions as TemperamentIcon,
  ChevronLeft as LeftIcon,
  ChevronRight as RightIcon,
} from "@material-ui/icons";
import { useStyles } from "./style";

import { Cat } from "../../types";

interface CatCarouselProps {
  items: Cat[];
}

interface ClickInterface {
  id?: number;
  name: string;
}

const CatCarousel: FC<CatCarouselProps> = ({ items }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentItem = items[currentIndex];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = useCallback(
    (obj: ClickInterface) => () => {
      switch (obj.name) {
        case "btnEdit":
          break;
        case "btnRemove":
          break;
        case "btnLeft":
          if (currentIndex > 0) {
            setCurrentIndex((prev) => --prev);
          }
          break;
        case "btnRight":
          if (currentIndex < items.length - 1) {
            setCurrentIndex((prev) => ++prev);
          }
          break;
        default:
          break;
      }
    },
    // eslint-disable
    [currentIndex, items]
  );
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        }
        title={`Name: ${currentItem.name}`}
        subheader={`Breed: ${currentItem.breed.name}`}
      />
      <CardMedia
        className={classes.media}
        image={
          currentItem.breed?.image_url ??
          "https://img-9gag-fun.9cache.com/photo/2292467_460s.jpg"
        }
        title="cat image"
      />
      <Fade in={!expanded}>
        {!expanded ? (
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemIcon>
                      <HeightIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Metric: ${currentItem.breed.metric} Imperial ${currentItem.breed.imperial}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GenderIcon />
                    </ListItemIcon>
                    <ListItemText primary={currentItem.gender.name} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TemperamentIcon />
                    </ListItemIcon>
                    <ListItemText primary={currentItem.breed.temperament} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        ) : (
          <div />
        )}
      </Fade>
      <CardActions disableSpacing>
        <IconButton onClick={handleClick({ name: "btnLeft" })}>
          <LeftIcon />
        </IconButton>
        <IconButton onClick={handleClick({ name: "btnRight" })}>
          <RightIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Description</Typography>
          <Typography paragraph>{currentItem.breed.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CatCarousel;
