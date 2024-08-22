import { MAX_PAGE } from './dummy-import-2';
// SHIFT + ALT + O to organize imports
const handlePage = (page: number) => {
  if (page > MAX_PAGE) {
    console.log('Page is too large!');
  }
};
