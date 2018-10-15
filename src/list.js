import React from 'react';

class List extends React.Component {

  componentDidMount() {
    this.populateList();
  }

  componentDidUpdate() {
    this.populateList();
  }

  populateList = () => {
    for (let i = 0; i < this.props.venues.length; i++) {
      let listbox = document.getElementById('listbox');
      let item = document.createElement('div');
      item.innerText = `${i+1}. ${this.props.venues[i].title}
      ${this.props.venues[i].reviews}`
      item.className =  'listitem';
      listbox.appendChild(item);
    }
  }

  render() {
    return(
      <div className="options-box">
        <h1>WeddVenView</h1>
        <h3>Search for Wedding Venue:</h3>
        <div id="listbox">
        </div>
      </div>
    )
  }
};

export default List;
