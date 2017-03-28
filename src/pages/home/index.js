import React, { PropTypes, Component  } from 'react';

import Map from '../../components/GoogleMap';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends Component {


  render() {
    return (
      <Layout className={s.content}>
       <Map/>
      </Layout>
    );
  }
}

const propTypes = {

};

export default HomePage;
