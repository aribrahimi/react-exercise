import React from 'react';
import ReactDOM from 'react-dom';


let booklist = [
  {"title":"what is a woman","author":"simone","pages":420},
  {"title":"poem","author":"shakspare","pages":550},
  {"title":"cate runner","author":"Khalid","pages":650},
]
const Book = (props)=>{
  return (
    <div>
      <h1>Title:{props.title}</h1>
      <p>auther:{props.author}</p>
      <p>pages:{props.pages}</p>
    </div>
    )
}
class Library extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.toggleOpenClose = this.toggleOpenClose.bind(this)
  }
  toggleOpenClose(){
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    const books = this.props.books ;
    return(
      <div>
        <h1> This library is {this.state.open? "open":"close"}</h1>
        <button onClick={this.toggleOpenClose}> Change</button>
        {books.map((book,i)=> 
          <Book 
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
          )
    }
  </div>
    )

    }
}
ReactDOM.render(
  <Library books={booklist} /> , 
  document.getElementById('root')
  );
