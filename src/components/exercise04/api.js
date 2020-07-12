export const getUsersSync = () => [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
];

export const getUsersAsync = async () => {
  // TODO: implement GET request use 'getUrl' function
  // eslint-disable-next-line
  const getUrl = () => 'https://jsonplaceholder.typicode.com/users';
  return [];
};

export const getPostsSync = () => [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  }
];

export const getPostsAsync = async () => {
  // TODO: implement GET request use 'getUrl' function
  // eslint-disable-next-line
  const getUrl = () => 'https://jsonplaceholder.typicode.com/posts';
  return [];
};

export const getCommentsSync = postId => [
  {
    postId: postId,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  }
];

export const getCommentsAsync = async postId => {
  // TODO: implement GET request use 'getUrl' function
  // eslint-disable-next-line
  const getUrl = postId => `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  return [];
};
