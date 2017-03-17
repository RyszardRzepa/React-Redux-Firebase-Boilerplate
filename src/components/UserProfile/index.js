import React, { PropTypes, Component } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';

import { addImage } from '../../actions/userActions';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = { file: {} };

  }

  _handleSubmit(e) {
    e.preventDefault();
    const uid = this.props.currentUser.uid;

    console.log('handle uploading-', this.state.file, uid);
    this.props.addImage(this.state.file, uid);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
      });
    }
    reader.readAsDataURL(file)
  }

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

            </video>
          </CardMedia>
        </Card>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className="fileInput"
                 type="file"
                 onChange={(e) => this._handleImageChange(e)}/>
          <button className="submitButton"
                  type="submit"
                  onClick={(e) => this._handleSubmit(e)}>Upload Image
          </button>
        </form>
      </Layout>
    );
  }
}

const propTypes = {};

const styles = {
  height: "100%",
  paddingTop: 0
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.user,
  }
}

export default connect(mapStateToProps, { addImage })(HomePage);
