import React from 'react';
import Pagination from './Pagination';
import BookTitle from '../Books/BookTitle';
import BookResultsList from '../Books/BookResultsList';
import BookListApi from '../Books/BookListApi';
 
class Teste extends React.Component {
    constructor() {
        super();
 
        // an example array of 150 items to be paged
        var exampleItems = [...Array(120).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
 
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
 
    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">                    
                        <h1>React - Pagination Example with logic like Google</h1>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <BookListApi />                        
                        <BookTitle />
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>                
            </div>
        );
    }
}
 
export default Teste;
