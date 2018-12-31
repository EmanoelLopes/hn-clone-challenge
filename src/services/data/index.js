import axios from 'axios';

const Posts = {
  get() {
    return axios.get('/api/data.json');
  }
};

export {
  Posts
};