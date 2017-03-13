import React, { PropTypes, Component  } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends Component {

  render() {
    return (
      <Layout className={s.content}>
        <Card
          zDepth={3}>
          <CardMedia
            overlayContentStyle={styles}
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
          >
            <video id="background-video" muted loop autoPlay>
              <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" />
            </video>
          </CardMedia>
        </Card>
      </Layout>
    );
  }

}

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const styles = {
  height: "100%",
  paddingTop: 0
}

export default HomePage;
