import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader';
import Button from './Loader/Button';
import apiService from './PixabayApi';

export class App extends Component {
  state = {
    showModal: false,
    query: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  async boo(query) {
    try {
      const data = await apiService(query);
      console.log(data);
    } catch {
      console.log('error');
    }
  }

  getSearchRequest = query => {
    this.setState({ query });
    this.boo(query);
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div>
              <h2>Hi friends</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                perspiciatis, enim animi blanditiis sequi obcaecati harum vitae
                explicabo, accusantium voluptate et sapiente quasi libero, eum
                aliquid quam maxime sunt nam?
              </p>
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </div>
          </Modal>
        )}
        <Searchbar onSubmit={this.getSearchRequest} />
      </div>
    );
  }
}
