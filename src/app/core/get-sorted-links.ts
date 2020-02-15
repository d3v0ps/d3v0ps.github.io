
export default (links: Array<any>, blog) => links
  .filter(link => link.route.startsWith(`/${blog}`))
  .sort(( a, b ) => {
    if ( a.order < b.order ) {
      return -1;
    }
    if ( a.order > b.order ) {
      return 1;
    }
    return 0;
  });
