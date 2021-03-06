import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {      
        return !(newProps.data === this.props.data);
    }
    render() {
        var lists = [];
        let data = this.props.data;        
        for(let i=0;i<data.length; i++)
        {
            lists.push(<li key={data[i].id}><a href='/' data-id={data[i].id}onClick={function(e) {
                e.preventDefault();                
                this.props.onChangePage(e.target.dataset.id); 
            }.bind(this)}>{data[i].title}</a></li>);
        }

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
  }

export default TOC;