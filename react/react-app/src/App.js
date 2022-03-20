import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject'; 
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 4;
    this.state = {
      mode : 'welcome',
      selectedId : 2,
      welcom: {
        title:'Welcome',
        desc:'Hello, React!!',
      },
      subject: {
        title:'WEB',
        subTitle:'world wide web!',
      },
      content: [
        {id:1, title:'HTML', desc:'HTML is for information.'},
        {id:2, title:'CSS', desc:'CSS is for design.'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'},
        {id:4, title:'React', desc:'React is for UI.'},
      ],
    }
  }

  getReadContent() {
    for(let idx=0; idx<this.state.content.length; idx++) {
      let data = this.state.content[idx];

      if (data.id === this.state.selectedId) { 
        return data;
      }
    }
  }

  getContent() {    
    let _artical = null;

    if (this.state.mode === 'welcome') { 
      _artical = <ReadContent title={this.state.welcom.title} desc={this.state.welcom.desc}></ReadContent>;
    } else if (this.state.mode === 'read'){
        
      const _content = this.getReadContent();
      _artical = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _artical = <CreateContent onSubmitClick={function(title, desc) {
        this.max_content_id += 1;
        let newContent = { id:this.max_content_id, title : title, desc : desc };

        this.setState({ 
          content : this.state.content.concat(newContent),
          mode : 'read',
          selectedId : this.max_content_id,
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      const _content = this.getReadContent();      
      _artical = <UpdateContent data={_content} onSubmitClick={function(id, title, desc) {
        let newContents = Array.from(this.state.content);

        for(let idx=0; idx<newContents.length; idx++) {
          if(newContents[idx].id === id) {
            newContents[idx] = { id:id, title:title, desc:desc};
            break;
          }
        }

        this.setState({ 
          content : newContents,
          mode: 'read'
        });
      }.bind(this)}></UpdateContent>
    }

    return _artical;
  }

  render() {
    return (
      <div className="App">      
        <Subject title={this.state.subject.title} 
          subTitle={this.state.subject.subTitle}
          onChangePage={function() {            
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}></Subject>         
        <TOC data={this.state.content}
          onChangePage={function(idx) {            
            this.setState({
              mode:'read',
              selectedId: Number(idx)
            });
          }.bind(this)}></TOC>
        <Control onChangeMode={function(mode) {
            if (mode === 'delete') {
              if (window.confirm('삭제하시겠습니까?')) {
                let newContents = Array.from(this.state.content);

                for(let idx=0; idx<newContents.length; idx++) {
                  if (newContents[idx].id == this.state.selectedId) {
                    newContents.splice(idx, 1);
                    break;
                  }
                }

                this.setState({
                  mode:'welcome',
                  content:newContents,
                });
              }
            } else {
              this.setState({
                mode : mode,
              }); 
            }            
        }.bind(this)}></Control>

        {this.getContent()}
      </div>
    );
  }
} 

export default App;
