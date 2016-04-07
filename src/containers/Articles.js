import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticleById } from '../actions/articles'
import Article from '../components/Article'

class Articles extends Component {
    static propTypes = {
        articles: PropTypes.array,
    };

    render() {
        const { articles } = this.props
        const articlesElements = articles.map((article) =>
            <li key={article.id}>
                <Article article={article} />
            </li>
        )
        
        return (
            <div>
                Статьи
                <ul>
                    {articlesElements}
                </ul>
            </div>
        )
    }
}

export default connect((state) => {
    return { articles: state.articles }
})(Articles)
