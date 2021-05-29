/**created by v
 * 04-05-2021
 * 9:41 PM
 */

export const request = (url, method, data = null) =>
  new Promise((hajoxvel, dzaxoxvel) => {
    fetch(url, {
      method,
      data,
    })
      .then((response) => {
        return response.json();
      })
      .then( data => {
        hajoxvel(data)
      })
      .catch((err) => {
        dzaxoxvel(err)
      });
  });
