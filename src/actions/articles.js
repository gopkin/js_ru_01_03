import { DELETE_ARTICLE } from '../constants'

export function deleteArticleById (articleId) {
    return {
        type: DELETE_ARTICLE,
        data: {
            articleId
        }
    }
}
