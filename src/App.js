import React, { Component } from 'react';
import Navbar from './component/navbar';
import Posts from './component/posts.component';

class App extends React.Component {
    state = {
        posts: [
            {
                name: "Bangladesh Win Over NZ in Mount Maunganui.",
                content: "A seminal moment in Bangladesh cricket history and this is also their first WTC win in this current cycle. "
            },
            {
                name: "Bangladesh Win Over NZ in Mount Maunganui.",
                content: "A seminal moment in Bangladesh cricket history and this is also their first WTC win in this current cycle. "
            },
        ],
        count: 0,
        count1: 0,
    }

    handleRemove = (index) => {
        const del = [...this.state.posts];
        del.splice(index, 1);
        this.setState({ posts: del })
    }

    render() {
        return (
            <>
                <Navbar count={this.state.count} count1={this.state.count1} />

                {
                    this.state.posts.map((post, index) => {
                        return (
                            <div key={index}>
                                <Posts
                                    name={post.name}
                                    content={post.content}
                                    handleRemove={post.handleRemove}
                                />
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default App;



// {
//     name: "Omicron Wave.",
//     content: "Bangladesh has reported a sharp rise in COVID-19 infections and virus-related deaths over the past week amid fears of omicron variant spreading throughout the country."
// },
// {
//     name: "Annual Picnic of BS-23.",
//     content: "If you’re happy to put a little ‘sand’ into your ‘sandwich’ Weston Beach is a lovely spot with views of Wales across the water. Whilst spending the day out you can unfold your picnic blanket and sit in the sun."
// },
// {
//     name: "NaVi' Won The Major.",
//     content: "NAVI are the champions of the PGL Major Stockholm 2021! The first CS:GO Major in two years, the PGL Major Stockholm 2021 has come to its conclusion. NAVI won the championship with a 2 : 0 victory over. G2 Esports in the grand final, earning $ 1,000,000 for their performance!"
// },
// {
//     name: "Bidya Sinha Mim Ties Knot.",
//     content: "The ethreal beauty dazzled in a traditional red lehenga by Sabyasachi on her wedding day while the groom opted for a white and pink traditional ensemble and matched with the white and pink themed background of the wedding. "
// },