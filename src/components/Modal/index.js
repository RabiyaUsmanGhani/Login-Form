import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./style.scss";

function MyModal(props) {
  const divProps = Object.assign({}, props);
  delete divProps.dispatch;

  const res = divProps.userdata;
  return (
    <Modal
      {...divProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="mdl-hdr">
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          Response
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mdl-bdy">
        {res.data ? (
          <>
            <h5 className="success">{res.message}</h5>
            <p>Name: {res.data.Name}</p>
            <p>Email: {res.data.Email}</p>
          </>
        ) : (
          <>
            <h5 className="fail">{res.message}</h5>
            <p>Try Again</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="mdl-ftr">
        <Button onClick={props.onHide} className="mdl-btn">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    userdata: state.login.userData,
  };
};

export default connect(mapStateToProps)(MyModal);
