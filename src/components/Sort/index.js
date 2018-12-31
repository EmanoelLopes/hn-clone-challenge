import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { SortItems } from './styles';
import { sortByComments, sortByUpvotes, sortByDate } from '../../store/actions';

function Sort(props) {
  const { sortByComments, sortByUpvotes, sortByDate, visiblePosts } = props;
  return (
    <SortItems>
      <span>Sort By: </span>
      <Button label="Comments" click={() => sortByComments(visiblePosts)}></Button>
      <Button label="Up Votes" click={() => sortByUpvotes(visiblePosts)}></Button>
      <Button label="Date" click={() => sortByDate(visiblePosts)}></Button>
    </SortItems>
  );
};

function mapStateToProps(state) {
  return {
    visiblePosts: state.visiblePosts
  };
};

const mapDispatchToProps = dispatch => ({
  sortByComments: posts => dispatch(sortByComments(posts)),
  sortByUpvotes: posts => dispatch(sortByUpvotes(posts)),
  sortByDate: posts => dispatch(sortByDate(posts)),
})

Sort.propTypes = {
  visiblePosts: PropTypes.array,
  sortByComments: PropTypes.func,
  sortByUpvotes: PropTypes.func,
  sortByDate: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);