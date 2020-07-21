import React, { useState } from 'react';
import Modal from '../Modal/Modal.component';
import CreateItem from '../CreateItem/CreateItem.component';
import './Header.styles.scss';

const Header = () => {
  const [showCreateItemModal, setShowCreateItemModal] = useState(false);

  const showCreateItem = () => {
    setShowCreateItemModal(true);
  };

  const hideCreateItem = () => {
    setShowCreateItemModal(false);
  };

  return (
    <div>
      <div className="header container">
        <div className="left">
          <div className="link">
            Insure App
          </div>
        </div>
        <div className="right">
          <div className="link" onClick={showCreateItem} data-testid="add-item">
            Add Item
          </div>
        </div>
      </div>
      <Modal isModalVisible={showCreateItemModal}
        handleModalClose={hideCreateItem}
      >
        <CreateItem closeModal={hideCreateItem} />
      </Modal>
    </div>
  );
};

export default Header;
