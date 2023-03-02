import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import apiService from './PixabayApi';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesOnPage: 0,
    totalImages: 0,
    isLoading: false,
    showModal: false,
    images: [],
    error: null,
    currentImageUrl: null,
    currentImageDescription: null,
    showLoadMoreBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });
      this.fetchQuery(this.state.query, this.state.page);
    }
  }

  onSubmit = FormData => {
    const { query } = FormData;
    this.setState({ query: query, page: 1, images: [] });
  };

  async fetchQuery(query, page) {
    try {
      const api = await apiService(query, page);
      console.log(api.hits);
      console.log(this.state.currentImageDescription);

      const total = api.totalHits;
      const images = api.hits;
      const picsLeft = total - 12 * this.state.page;

      if (images.length === 0) {
        this.setState({ showLoadMoreBtn: false });

        return;
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      }

      if (images.length > 0 && this.state.page === 1) {
      }

      picsLeft > 0
        ? this.setState({ showLoadMoreBtn: true })
        : this.setState({ showLoadMoreBtn: false });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  toggleModal = (currentImageUrl, currentImageDescription) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      currentImageUrl: currentImageUrl,
      currentImageDescription: currentImageDescription,
    }));
  };

  onNextFetch = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
    console.log(this.state.page);
  };

  getSearchRequest = query => {
    this.setState({ query });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            src={this.state.currentImageUrl}
            alt={this.state.currentImageDescription}
          />
        )}
        <Searchbar onSubmit={this.getSearchRequest} />
        {this.state.images && (
          <ImageGallery
            images={this.state.images}
            openModal={this.toggleModal}
          />
        )}
        {this.state.showLoadMoreBtn && <Button loadMore={this.onNextFetch} />}
      </div>
    );
  }
}
