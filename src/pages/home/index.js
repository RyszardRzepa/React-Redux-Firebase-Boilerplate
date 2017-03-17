import React from 'react';
import { Flex, Box, Grid } from 'reflexbox'
import { Card } from 'material-ui/Card';

import Post from '../../components/Post';
import Layout from '../../components/Layout';

const UserProfile = (props) => {
  return (
    <Layout>
      <Flex
        align="center"
      >
        <Box
          style={styles.red}
          auto
          ml={4}
          mr={4}
          mt={1}
          md={8}
        >
          <Card
            zDepth={3}
          >
            <iframe
              width="100%" height="500"
              src="https://www.youtube.com/embed/dDbPwLODAx0?modestbranding=1&autoplay=0&showinfo=0&controls=0">
            </iframe>
          </Card>
        </Box>
      </Flex>
      <Post />
    </Layout>
  )
}

const styles = {
  red: {
    maxHeight: 500
  },
  green: {}
}
export default (UserProfile);

