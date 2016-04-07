import React, { Component, PropTypes } from 'react'
import { deleteArticleById } from '../actions/articles'
import store from '../store'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
    }
    
    render () {
        const { article } = this.props
        
        return (
            <div>
                <span>
                    <a href="#" onClick={this.handleDelete}>delete</a>
                    {" "}
                    {article.title}
                </span>
            </div>
        )
    }
    
    handleDelete = (event) => {
        event.preventDefault()
        //для этого используют декоратор connect из react-redux
        store.dispatch(deleteArticleById(this.props.article.id))
    }
}

export default Article
