import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Flex, Box } from 'reflexbox'

import s from './styles';

const Post = (props) => {
  return (
    <div>
      <Flex
        align="center"
        justify="center"
      >
        <Box px={3}>
          <p style={s.headLine} >
            Head line for the posts content
          </p>
        </Box>
      </Flex>
  <Flex align="center">
    <Box
      auto
      p={2}
    >
      <Card
        zDepth={3}
      >
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
         <img style={s.img} src="http://img15.hostingpics.net/pics/326464dnblandoceanice20121200.jpg"/>
        </CardMedia>
        <CardTitle title="Card title this is for new people"  />
        <CardActions>
          <FlatButton label="Action1" />
        </CardActions>
      </Card>
    </Box>
    <Box
      auto
      p={2}
    >
      <Card
        zDepth={3}
      >
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img style={s.img} src="http://img15.hostingpics.net/pics/326464dnblandoceanice20121200.jpg"/>
        </CardMedia>
        <CardTitle title="Card title this is for new people"  />
        <CardActions>
          <FlatButton label="Action1" />
        </CardActions>
      </Card>
    </Box>
    <Box
      auto
      p={2}
    >
      <Card
        zDepth={3}
      >
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img style={s.img} src="http://img15.hostingpics.net/pics/326464dnblandoceanice20121200.jpg"/>
        </CardMedia>
        <CardTitle title="Card title this is for new people"  />
        <CardActions>
          <FlatButton label="Action1" />
        </CardActions>
      </Card>
    </Box>
  </Flex>
    </div>
  )
};

export default Post;
