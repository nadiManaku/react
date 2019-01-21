import React, { Component } from 'react';
import { Link } from 'react-router'
import Counter from './counter'
import NavBar from './navBar'

class HomeComponent extends Component {
    state = {
        imageUrl: 'https://picsum.photos/200',
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters: counters });
        console.log(this.state.counters[index]);
    }

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters })
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>

        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello
               <Link to='/star'>Star</Link >
                </h1>
                <NavBar counterTotal={this.state.counters.filter(c => c.value !== 0).length}></NavBar>
                {/* <img src={this.state.imageUrl} alt="" /> */}

                {/* {this.renderTags()} */}
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                        id={counter.id} />
                ))}
            </React.Fragment>
        );
    }


}

export default HomeComponent;
