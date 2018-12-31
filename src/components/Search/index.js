import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { filterPosts } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchInput, Input } from './styles';

function Search({ filterPosts, visiblePosts, value }) {
  return (
    <SearchInput className="search">
      <FontAwesomeIcon icon={faSearch} />
      <Input type="text" onChange={(e => filterPosts(e.target.value, visiblePosts))} value={value} />
    </SearchInput>
  );
};

function mapStateToProps (state) {
  return {
    visiblePosts: state.visiblePosts
  };
};

const mapDispatchToProps = dispatch => ({
  filterPosts: posts => dispatch(filterPosts(posts))
})

Search.propTypes = {
  filterPosts: PropTypes.func,
  visiblePosts: PropTypes.array,
  value: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);